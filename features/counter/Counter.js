import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from './counterSlice';

const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter).count
    return(
        <>
            <div className="flex flex-col justify-center items-center">
                <div><h1 className="text-center text-3xl">{count}</h1></div>
                <div className="flex flex-col justify-center items-center">
                    <div className="text-white">
                        <button 
                            onClick={()=>dispatch(decrement())}
                            className="bg-rose-600 px-5 m-5 rounded-md">-</button>
                        <button 
                            onClick={()=>dispatch(reset())}
                            className="bg-green-600 px-5 m-5 rounded-md">Reset</button>
                        <button 
                            onClick={()=>dispatch(increment())}
                            className="bg-sky-600 px-5 m-5 rounded-md">+</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Counter;