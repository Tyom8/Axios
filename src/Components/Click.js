import { useEffect, useReducer, useState} from "react";
import { useNavigate } from "react-router-dom";

function reducer(state, action) {
    if (action.type === "plus") {
        return state + 1
    } else if (action.type === "minus") {
        return state - 1
    }
    else if (action.type === "multi") {
        return state * 2
    }
    else if (action.type === "unmulti") {
        return state / 2
    } else {
        throw new Error()
    }
}

function Click() {
    const [state, dispatch] = useReducer(reducer, 0);
    const navigate = useNavigate();
    const [token,setToken] = useState(localStorage.getItem("token"));
    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    },[token])

    const quit = ()=> {
        setToken(localStorage.removeItem("token"));
    }
    return (
        <>
                <div>
            <h3>Count: {state}</h3>
            <button onClick={() =>
                dispatch({ type: "plus" })
            }>+</button>
            <button onClick={() => {
                dispatch({ type: "minus" })
            }}>-</button>
            <button onClick={() => {
                dispatch({ type: "multi" })
            }}>*</button>
            <button onClick={() => {
                dispatch({ type: "unmulti" })
            }}>/</button>
        </div>
        <button onClick={quit}>Quite</button>
        </>
    )
}

export default Click;