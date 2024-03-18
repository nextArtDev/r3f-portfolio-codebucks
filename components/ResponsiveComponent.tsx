'use client'

import useScreenSize from '@/hooks/useScreenSize'
import React, { ReactNode } from 'react'

const ResponsiveComponent = ({ children }: { children: ReactNode }) => {
  const size = useScreenSize()

  return <>{children({ size })}</>
}

export default ResponsiveComponent
