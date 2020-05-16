import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions'

export const Post = ( {post} ) => {


    return (<div>
       
    Post {post.title}
    </div>)

}
const mapDispatchToProps = {  };



// Connect Redux to React
export default Post