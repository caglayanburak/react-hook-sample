import { fetchPosts } from "./actions/postActions"
import { connect } from "react-redux"
import React, { useEffect } from 'react';
import Post from "./components/PostComponent";



const PostPage = ({ dispatch, loading, posts, hasErrors }) => {

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    const renderPosts = () => {
        if (loading) return <p>Loading posts...</p>
        if (hasErrors) return <p>Unable to display posts.</p>
        return posts.map(post => <Post key={post.id} post={post} />)
    }

    return (<div>Post Page
        {posts.length}
        <br/>
        {renderPosts()}
    </div>)
}


const mapStateToProps = state => ({
    loading: state.posts.loading,
    posts: state.posts.posts,
    hasErrors: state.posts.hasErrors,
})



export default connect(mapStateToProps)(PostPage)