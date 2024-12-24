import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/libs/redux/store'
import moment from 'moment-timezone'

// TODO limit the timezones to major ones
function getTimezonesWithCurrentTimeAndOffsetAndEstimatedUserTimezoneIndex(): [Timezone[], number] {
  let userTimezoneLabel = moment.tz.guess()
  let userTimzoneIndex = 0 // TODO fix this - might not actually be a problem
  const timezones = moment.tz.names().map((tz, index) => {
    const currentTime = moment.tz(tz).format('h:mm a'); // Format current time as HH:mm
    const offset = moment.tz(tz).utcOffset() / 60;
    if(userTimezoneLabel === tz) {
        userTimezoneLabel = tz
    }
    return { label: tz, currentTime, offset, index };
  }).sort((a, b) => a.offset - b.offset);;

  return [timezones,  userTimzoneIndex]
};

export type Timezone = {
    readonly index: number // it's position in the list
    label: string, // momentjs timezone
    currentTime: string,
    offset: number
}


export interface AppointmentBookingState {
  selectedTimezoneIndex: number, // momentjs timezone
  month: number,
  year: number,
  timezones : Timezone[],
  currentDate: number,
  currentMonth: number,
  currentYear: number
}

const [timezones, selectedTimezoneIndex] = getTimezonesWithCurrentTimeAndOffsetAndEstimatedUserTimezoneIndex()

const initialState: AppointmentBookingState = {
    timezones,
    selectedTimezoneIndex,
    month: moment().month(),
    year: moment().year(),
    currentDate: moment().date(), 
    currentMonth: moment().month(),
    currentYear: moment().year() 
}

export const slice = createSlice({
  name: 'appointment-booking',
  initialState,
  reducers: {
    incrementMonth: state => {
        state.month += 1
        if(state.month > 11) {
            state.month = 0
            state.year += 1
        }
    },
    decrementMonth: state => {
        state.month -= 1
        if(state.month < 0) {
            state.month = 11
            state.year -= 1
        }
    },
    changeTimezone: (state, action: PayloadAction<number>) => {
        state.selectedTimezoneIndex = action.payload
        const tz = state.timezones[state.selectedTimezoneIndex]
        state.currentMonth = moment.tz(tz.label).month()
        state.currentDate = moment.tz(tz.label).date()
        state.currentYear = moment.tz(tz.label).year()
    }
  }
})

export const { 
    incrementMonth, 
    decrementMonth, 
    changeTimezone 
} = slice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectTimezone = (state: RootState) => state.appointments.timezones[state.appointments.selectedTimezoneIndex]
export const selectMonth = (state: RootState) => state.appointments.month
export const selectYear = (state: RootState) => state.appointments.year
export const selectCurrentDate = (state: RootState) => state.appointments.currentDate
export const selectCurrentMonth = (state: RootState) => state.appointments.currentMonth
export const selectCurrentYear = (state: RootState) => state.appointments.currentYear
export const selectTimezones = (state: RootState) => state.appointments.timezones

export default slice.reducer
