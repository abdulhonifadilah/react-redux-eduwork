import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { decrementWithChekingAction, increment } from '../../app/features/counter/action';

export default function Redux() {
    let {count} = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return (
        <div>
        <button onClick={()=>dispatch(decrementWithChekingAction(1))}>-</button>
        {' '}<span>{count}</span>{' '}
        <button onClick={()=>dispatch(increment(1))}>+</button>
        </div>
    )
}
