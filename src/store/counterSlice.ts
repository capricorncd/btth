/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2021-09-26 11:55 (GMT+0900)
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface StoreCounterState {
  count: number
}

const initialState = {
  count: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: StoreCounterState, action: PayloadAction<number>) => {
      state.count += action.payload
    },
    decrement: (state: StoreCounterState, action: PayloadAction<number>) => {
      state.count -= action.payload
    },
  },
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer
