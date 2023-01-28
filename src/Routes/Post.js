import { Router, json } from 'express';
import { createPost } from '../Controller/postController';

const router = Router();

//call the createPost() function when a request comes in via the create-post route

router.post('/api/create-post', json(), (request, response, next) =>{
    createPost(request, response, next);
});

export default router;