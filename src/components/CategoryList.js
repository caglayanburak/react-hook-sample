import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function CategoryList() {

    const dispatch = useDispatch();
    // const { count, name } = useSelector(state => ({
    //     ...state.counterReducer,
    //     ...state.nameReducer
    // }));
    const postsSelector = useSelector((state) => state.posts.posts);
    const handleUpdateName = (event) => {
        dispatch({
            type: 'UPDATE_NAME',
            payload: event.target.value
        })
    }


    return (
        <div>
            CategoryList {postsSelector.length}
            <input onChange={handleUpdateName} />
        </div>
    );
}


export default CategoryList;