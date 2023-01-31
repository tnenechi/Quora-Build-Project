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
        type: Number,
        default: 0
    },
    downvotes:{
        type: Number,
        default: 0
    }
});

export const CommentModel = model('Comment', commentSchema);