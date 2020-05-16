export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAIL = 'GET_POSTS_FAIL'



export const getPosts = () => ({
    type: GET_POSTS
})


export const getPostsSuccess = posts => ({
    type: GET_POSTS_SUCCESS,
    payload: posts
})

export const getPostFail = () => ({
    type: GET_POSTS_FAIL
})

export function fetchPosts() {
    return async dispatch => {
        dispatch(getPosts())
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();

            dispatch(getPostsSuccess(data));
        } catch (error) {
            dispatch(getPostFail())
        }
    }
}