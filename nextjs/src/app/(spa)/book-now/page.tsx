"use client"

export const dynamic = 'force-dynamic'

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PublicIcon from '@mui/icons-material/Public';
import { SyntheticEvent, useEffect, useState } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import moment from 'moment-timezone'
import { useAppDispatch, useAppSelector } from '@/libs/redux/hook';
import { changeTimezone, decrementMonth, incrementMonth, selectCurrentDate, selectCurrentMonth, selectCurrentYear, selectMonth, selectTimezone, selectTimezones, selectYear, Timezone } from '@/features/appointments/slice';
import { useDispatch } from 'react-redux';

export default function Home() {
  const month = useAppSelector(selectMonth)
  const year = useAppSelector(selectYear)
  const tz = useAppSelector(selectTimezone)
  const dispatch = useAppDispatch()

  return (
    <div className="m-h-screen bg-neutral-100 flex justify-center">
        <div className="bg-neutral-50 shadow rounded-md py-12 m-32">
            <div className="text-center">
                <h2 className="text-neutral-500 text-md font-semibold">Justin McIntyre</h2>
                <h1 className="text-neutral-950 text-2xl font-extrabold">Introduction Meeting</h1>
            </div>
            <div className="flex text-center flex-wrap gap-2 m-8 text-neutral-700 justify-center items-center">
                <div className="flex flex-row items-center justify-center">
                    <AccessTimeIcon />
                    <p className='min-w-16'>30 min</p>
                </div>
                <div className="min-w-96 flex flex-row items-center justify-center gap-2">
                    <div className='hidden sm:inline'>
                        <VideocamOutlinedIcon />
                    </div>
                    <p>Web conferencing details provided upon confirmation.</p>
                </div>
            </div>
            <hr/>
            <div className="flex justify-center m-8">
                <div>
                    <p className="font-semibold text-xl text-neutral-950">Select a Date & Time</p>
                    <div>
                        <div className="flex justify-center items-center py-4 gap-2">
                            <div onClick={()=>{
                                dispatch(incrementMonth())
                            }}><KeyboardArrowLeftIcon /></div>
                            <div className="text-md text-center min-w-44 text-neutral-800 text-light pt-[2px]">{moment.tz(tz.label).month(month).format("MMMM")} {year}</div>
                            <div onClick={()=>{
                                dispatch(decrementMonth())
                            }}><KeyboardArrowRightIcon /></div>
                        </div>
                    </div>
                    <div className="mb-9">
                        <Calendar 
                        />
                    </div>
                    <TimeZonePicker />
                </div>
            </div>
        </div>
    </div>
  )
}

function TimeZonePicker() {
  const dispatch = useDispatch()
  const selectedTimezone = useAppSelector(selectTimezone)
  const timezones = useAppSelector(selectTimezones)
  const tz = useAppSelector(selectTimezone)
  
  const handleChange = (_event: SyntheticEvent<Element, Event>, value: Timezone) => {
    dispatch(changeTimezone(value.index));
  };

  return (
    <div >
      <Autocomplete
        options={timezones}
        getOptionLabel={(option) => `${option.label}`}
        renderOption={(props, option) => (
          <li {...props} key={option.index} style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <span>{option.label}</span>
            <span style={{ marginLeft: 'auto' }}>{option.currentTime}</span>
          </li>
        )}
        value={selectedTimezone}
        onChange={handleChange}
        isOptionEqualToValue={(option, value) => option.index === value.index}
        disableClearable={true}
        renderInput={(params) => (
          <TextField 
            {...params} 
            label="Time zone" 
            variant='standard'
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <InputAdornment position="end">
                  {moment.tz(tz.label).format("h:mm a")}
                </InputAdornment>
              ),
            }}
            />
        )}
      />
    </div>
  );
}

function Calendar() {
    const tz = useAppSelector(selectTimezone)
    const currentMonth = useAppSelector(selectCurrentMonth)
    const currentDate = useAppSelector(selectCurrentDate)
    const currentYear = useAppSelector(selectCurrentYear)
    const month = useAppSelector(selectMonth)
    const year = useAppSelector(selectYear)
    const today = moment.tz(tz.label).year(currentYear).month(currentMonth).date(currentDate)
    const firstOfTheMonth = moment.tz(tz.label).year(year).month(month).startOf('month')
    const lastOfTheMonth = moment.tz(tz.label).year(year).month(month).endOf('month')
    const firstOfMonthOffset = firstOfTheMonth.date()
    const lastOfMonthOffset = (lastOfTheMonth.date() - 6 ) * -1

    const dayComponents = []
    for(let i=0; i<firstOfMonthOffset; i++){
        dayComponents.push(<div key={dayComponents.length} className="w-11 h-11 items-center flex justify-center" />)
    }
    const day = moment.tz(tz.label).year(year).month(month).startOf('month')
    while(day.month() == firstOfTheMonth.month()){
        if(today.isSameOrAfter(day, 'day')){
            dayComponents.push(<div key={dayComponents.length} className="w-11 h-11 items-center flex justify-center flex-col gap-0 rounded-full">
                    <div className="m-0 relative">
                      <span className="text-neutral-500">{day.date()}</span>
                      { today.isSame(day, 'day') && <div className="m-0 bg-neutral-600 rounded-full h-1 w-1 absolute top-4/5 left-1/2 translate-x-[-50%]"></div> }
                    </div>
                </div>)
        } else {
            dayComponents.push(
                <div key={dayComponents.length} 
                    className="w-11 h-11 items-center flex justify-center flex-col gap-0 rounded-full bg-fuchsia-200 hover:bg-fuchsia-300 cursor-pointer" 
                    onClick={()=>{alert(moment.tz(tz.label).year(day.year()).month(day.month()).toISOString())}}>
                    <div className="m-0 relative">
                      <span className="text-fuchsia-950 font-semibold">{day.date()}</span>
                      { today.isSame(day, 'day') && <div className="m-0 bg-fuchsia-600 rounded-full h-1 w-1 absolute top-4/5 left-1/2 translate-x-[-50%]"></div> }
                    </div>
                </div>
            )
        }
        day.date(day.date() + 1)
    }
    for(let i=0; i<lastOfMonthOffset; i++){
        dayComponents.push(<div key={dayComponents.length} className="w-11 h-11 items-center flex justify-center"/>)
    }

    return (
        <div className="">
            <div className="grid grid-cols-7 text-center items-center h-full auto-rows-max auto-cols-max gap-2">
                <div className="w-10"><span className="text-xs text-neutral-800">SUN</span></div>
                <div className="w-10"><span className="text-xs text-neutral-800">MON</span></div>
                <div className="w-10"><span className="text-xs text-neutral-800">TUE</span></div>
                <div className="w-10"><span className="text-xs text-neutral-800">WED</span></div>
                <div className="w-10"><span className="text-xs text-neutral-800">THU</span></div>
                <div className="w-10"><span className="text-xs text-neutral-800">FRI</span></div>
                <div className="w-10"><span className="text-xs text-neutral-800">SAT</span></div>
                {dayComponents}
            </div>
        </div>
    )
}
