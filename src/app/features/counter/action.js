import * as counter from './constants'

export const increment=(val)=>{
    return{
        type: counter.INC,
        value : val
    }
}
export const decrement=(val)=>{
    return{
        type: counter.DEC,
        value : val
    }
}

export const decrementWithChekingAction =(val)=>{
    return (dispatch, getState)=>{
        if(getState().counter.count > 0){
            dispatch(decrement(val));
        }
    }
}
