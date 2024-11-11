import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, decrement, increment } from './Counterslice'
import { Cartdata } from './Cartdata'
import { Cartproduct } from './Cartproduct'

export function Counter() {
    const count = useSelector((state) => state.counter.count)
    const data=useSelector((state) => state.counter.data)
    const dispatch = useDispatch()
    

    return(
        // <div>
        //     <h1>{data.count}</h1>
        //     <button onClick={()=> dispatch(increment())>Increment</button>

        //     <button onClick={()=> dispatch(decrement())}>Decrement</button>
        // </div>
        <>
        <div>
            <h1>{count}</h1>
            <h1>{data.name}</h1>
            <h1>{data.age}</h1>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
            <button onClick={()=>dispatch(addData({name:"name",age:24}))}>addData</button>

        </div>
        <Cartdata />
        {/* <Cartproduct /> */}
        </>
    )
}