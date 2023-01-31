import { Router, json } from 'express';
import { createPost, getPosts } from '../Controller/postController';

const router = Router();

//call the createPost() function when a request comes in via the create-post route

router.post('/api/create-post', json(), (request, response, next) =>{
    createPost(request, response, next);
});

router.get('/api/posts', (reqest, response, next) =>{
    getPosts(reqest, response, next);
})

export default router;