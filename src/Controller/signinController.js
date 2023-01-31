import { UserModel } from "../Models/User";

export const signIn = async (request, response, next) => {
    const { email, password } = request.body;
    console.log('line 5');

    if(!email || !password) return response.status(400).json({msg: "Please enter your email and password"});

    //check if email exists in DB
    const emailExists = await UserModel.findOne({email: email}).exec();

    if(!emailExists){
        return response.status(404).json({msg: "Incorrect login details"});

    }

    let user = emailExists;

    
    if(password === user.password){
        console.log('here');
        return response.status(200).json({userID: user._id});
    }
    
    return response.status(404).json({msg: "Incorrect login details"});
}