// Loading Single-Page-App providers here

import StoreProvider from '@/libs/redux/StoreProvider'
import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
    return (
        <StoreProvider>
            { children }
        </StoreProvider>
    )
}
