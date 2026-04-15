import react from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../features/counterSlice";

function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="counter-container">
            <div className="counter-card">
                <h1>Redux Counter</h1>

                <div className="counter-display">{count}</div>

                <div className="button-group">
                    <button
                        className="btn btn-decrement"
                        onClick={() => dispatch(decrement())}
                    >
                        -1
                    </button>

                    <button
                        className="btn btn-increment"
                        onClick={() => dispatch(increment())}
                    >
                        +1
                    </button>

                    <button 
                        className="btn btn-reset"
                        onClick={() => dispatch(reset())}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;