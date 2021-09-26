/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2021-09-26 12:14 (GMT+0900)
 */
import React from 'react'
import { increment, decrement } from '@/store/counterSlice'
import { useAppSelector, useAppDispatch } from '@/store'
import { Link } from 'react-router-dom'

export default function Home() {
  const dispatch = useAppDispatch()
  const count = useAppSelector((state) => state.counter.count)
  return (
    <div className="center">
      <h1 className="mt20">Home</h1>
      <h2 className="pv20">{count}</h2>
      <div>
        <button onClick={() => dispatch(decrement(1))} className="ph10 pv5">
          decrement
        </button>
        <button onClick={() => dispatch(increment(1))} className="ph10 pv5 ml20">
          increment
        </button>
      </div>
      <div className="mt20">
        <Link to="/">Top</Link>
      </div>
    </div>
  )
}
