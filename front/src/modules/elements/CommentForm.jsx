import axios from "axios";
import React, { Fragment, useState } from "react";
//import { useNavigate } from "react-router-dom";

function CommentForm() {

    const [post, setPost] = useState({commentText: ''});

    const handleInput = (e) => {
        setPost({...post, [e.target.name]: e.target.value});
    }

    const handleCreateComment = (e) => {
        e.preventDefault()

        const commentData = {
            CommentText: post.commentText
        }

        axios.post("http://localhost:5000/comments", commentData)
        .then(
            response => console.log(response))
        .catch(error => {
            console.log(error);
        });
    };

    return(
        <Fragment>
            <form onSubmit={handleCreateComment} className="relative h-1/2 w-screen py-3 sm:max-w-xl sm:mx-auto">
                    <label className="absolute text-gray-600 text-sm">Write something</label>
                    <input name="commentText" onChange={handleInput} type='text' id='post_id' placeholder="Share something..." className="peer h-10 w-1/3 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"/>
                    <button type="submit" className="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
                </form>
        </Fragment>
    )
}

export default CommentForm;