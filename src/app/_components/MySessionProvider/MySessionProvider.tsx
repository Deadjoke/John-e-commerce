'use client'
import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'
import { CartContextProvider } from './CartContext'

export default function MySessionProvider({children}:{children:ReactNode}) {
  return (
    <SessionProvider>
      <CartContextProvider>
        {children}
      </CartContextProvider>
    </SessionProvider>
  )
}
