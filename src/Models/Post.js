import { model, Schema } from 'mongoose';


const postSchema = new Schema({
    text:{
        type: String,
        required: true
    },
    pictures:{
        type: [String],
        required: false
    },
    userID:{
        type: Schema.Types.ObjectId, ref: 'User'
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

export const PostModel = model('Post', postSchema);