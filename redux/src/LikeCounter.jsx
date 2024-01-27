import { Reducer } from "./redux/Reducer"
import  {incrementLike,decrementLike} from './redux/Actions'
import {configureStore} from '@reduxjs/toolkit'
import { Provider,useDispatch,useSelector } from "react-redux"

const store = configureStore({
    reducer:Reducer
})

const LikeCounter = ()=>{

    const likes = useSelector(state => state.likes);

    const dispatch =useDispatch();

    return(
        <>
        <h2>LIKE COUNTER {likes}</h2>
        <button onClick={()=>dispatch(incrementLike())}>Increment</button>
        <button onClick={()=>dispatch(decrementLike())}>Decrement</button>

        
        </>
    )
}

const LikeCounterApp = ()=>{
    return(
        <Provider store={store}>
            <LikeCounter/>
        </Provider>    
    )
}

export default LikeCounterApp