import { Fragment, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import CommentForm from "./elements/CommentForm";
import { useEffect } from "react";


function Feed() {
    const [comment, setComment] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/comments")
            .then((response) => {
                setComment(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    return (
        <Fragment>
        <Navbar />
            <div className="w-full h-full flex flex-col justify-center items-center">
                <h1 className="text-center mt-5">Share your last trip memories with our community.</h1>
            </div>
        <CommentForm />
        <div className="p-4">
            <div className="flex justify-between items-center">
                <h1>Comment list</h1>

            </div>
                <table className="w-full border-separate border-spacing-2">
                    <thead>
                        <tr>
                            <th className="border border-slate-600 rounded-md">No</th>
                            <th className="border border-slate-600 rounded-md">Title</th>
                            <th className="border border-slate-600 rounded-md max-md:hidden">Created at</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comment.map((comments, index) => {
                            return (
                        <tr key={comment._id} className="h-8">      
                            <td className="border border-slate-600 rounded-md text-center">
                                {index + 1}
                            </td>
                            <td className="border border-slate-600 rounded-md text-center max-md:hidden">
                                {comments.CommentText}
                            </td>
                        </tr>
                        )})}
                    </tbody>

                </table>
            
        </div>
        </Fragment>
    )
}

export default Feed;