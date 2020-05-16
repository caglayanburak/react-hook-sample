import React, { Component } from 'react';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';

const ProductList = ({ parentMessage }) => {
    // const [count, setCount] = useState(0);
    const dispatch = useDispatch();
    const { count, name } = useSelector(state => ({
        ...state.counterReducer,
        ...state.nameReducer
    }));

    function incrementCount() {
        dispatch({
            type: 'INCREMENT'
        })
    }

    function decrementCount() {
        dispatch({
            type: 'DECREMENT'
        })
    }


    return (
        <div>
            ProductList <b>{parentMessage}</b>
            <label>Message:{name}</label>

            <br />
            <label>{count}</label>
            <button onClick={incrementCount}>+</button>
            <button onClick={decrementCount}>-</button>
            {/* <button onClick={() => setCount(count + 1)}> + </button> */}
        </div>
    );
}

export default ProductList;