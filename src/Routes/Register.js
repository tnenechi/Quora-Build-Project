import { Router, json } from 'express';
import { signUp } from '../Controller/registerController';

const router = Router();

//When a post request comes in on the register route, call the signUp() function
router.post('/api/register', json(), (request, response, next) => {
    signUp(request, response, next);

})

export default router;