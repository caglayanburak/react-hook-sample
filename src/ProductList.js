import React, { Component } from 'react';
import { useState } from 'react'

const ProductList = ({ parentMessage }) => {
    const [count, setCount] = useState(0);

    return (
        <div>
            ProductList <b>{parentMessage}</b>
            <br />
            <label>{count}</label>
            <button onClick={() => setCount(count + 1)}> + </button>
        </div>
    );
}

export default ProductList;