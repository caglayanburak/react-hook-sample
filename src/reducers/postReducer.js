import * as actions from '../actions/postActions'
export const initialState = {
    posts: [],
    loading: false,
    hasErrors: false
}


export default function postReducer(state = initialState, action) {


    switch (action.type) {
        case actions.GET_POSTS:
            return { ...state, loading: true }
        case actions.GET_POSTS_SUCCESS:
            return { posts: action.payload, loading: false, hasErrors: false }
        case actions.GET_POSTS_FAIL:
            return { ...state, loading: false, hasErrors: true }

        default:
            return state;
    }
}