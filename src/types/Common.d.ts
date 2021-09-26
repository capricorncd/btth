/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2021-09-26 21:33 (GMT+0900)
 */
import React from 'react'

export type AnyObject = Record<string, any>

export type StringObject = Record<string, string>

export type ClickFunction = (e?: React.MouseEvent) => void

export interface CommonProps {
  className?: string
  onClick?: ClickFunction
  children?: JSX.Element | React.ReactNode
  style?: AnyObject
  data?: any
  to?: string
}
