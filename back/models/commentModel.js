import mongoose from "mongoose";

export const commentSchema = mongoose.Schema(
    {
        CommentID : {
            type: Number,
            required: true
        },
        UserID : {
            type: Number,
            required: true
        },
        CommentText : {
            type: String,
            required: true
        },
        CreatedAt : {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Comment =  mongoose.model('Comment', commentSchema);
export default Comment;