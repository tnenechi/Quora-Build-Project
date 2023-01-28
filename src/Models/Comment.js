import { model, Schema } from 'mongoose';


const commentSchema = new Schema({
    comment:{
        type: String,
        required: true
    },
    userID:{
        type: Schema.Types.ObjectId, ref: 'User'
    },
    postID:{
        type: Schema.Types.ObjectId, ref: 'Post'
    },
    upvotes:{
        type: Number
    },
    downvotes:{
        type: Number 
    }
});

export const CommentModel = model('Comment', commentSchema);