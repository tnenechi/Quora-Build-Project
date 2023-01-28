import { Router, json } from "express";
import { createComment } from "../Controller/commentController";



const router = Router();

//call the createComment() function when a request comes in via the create-comment route

router.post('/api/create-comment', json(), (request, response, next) =>{
    createComment(request, response, next);
});

export default router;