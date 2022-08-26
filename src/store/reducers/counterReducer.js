

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET_COUNTER'

const defaultStore = {
    count : 0,
}

export let counterReducer = (state = defaultStore, action) =>{

switch (action.type){

    case INCREMENT:
        return {...state, count: state.count + 1}

    case DECREMENT:
        return {...state, count: state.count - 1}
    
    case RESET:
        return{...state, count: 0}


    default:
        return state

}
}


export const decrease = () =>(
    {type: DECREMENT}
)

export const increase = () =>(
    {type: INCREMENT}
)

export const resetCounter = () =>(
    {type:RESET}
)