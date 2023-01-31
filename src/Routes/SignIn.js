import { Router, json } from 'express';
import { signIn } from '../Controller/signinController';


const router = Router();

router.post("/api/signIn", json(), (response, request, next) =>{
    console.log('Route - line 8')
    signIn(response, request, next);
});

export default router;