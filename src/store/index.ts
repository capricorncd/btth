/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2021-09-26 11:54 (GMT+0900)
 */
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
import { AppDispatch, RootState } from '@/types'

export default configureStore({
  reducer: {
    counter: counterSlice,
  },
})

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
