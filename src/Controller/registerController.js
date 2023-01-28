import { UserModel } from "../Models/User";

export const signUp = async (request, response, next) => {
  //Get the fields from the request body
  const { firstName, lastName, emailAdress, password, userProfilePicture } =
    request.body;

  //Check if the required fields are empty
  if (!firstName || !lastName || !emailAdress || !password) {
    return response
      .status(400)
      .json({
        message:
          "The following fields are required: first name, last name, email, and password :)",
      });
  }

  //Check if any email in the DB matches the emailAdress from the request body
  const emailMatch = await UserModel.findOne({ email: emailAdress }).exec();

  if (emailMatch) {
    return response.status(409).json({ message: "Email already exists" }); //Conflict
  }

  //try to create the new user
  try {
    //CREATE NEW USER
    // const newUser = new UserModel({
    //     firstName: firstName,
    //     lastName: lastName,
    //     email: emailAdress,
    //     password: password,
    //     profilePicture: userProfilePicture ? userProfilePicture : null
    // });

    // //THEN SAVE THE NEW USER
    // await newUser.save();

    //OR create and save the new user once
    const newUser = await UserModel.create({
      firstName: firstName,
      lastName: lastName,
      email: emailAdress,
      password: password,
      profilePicture: userProfilePicture ? userProfilePicture : null,
    });

    response.status(201).json({
      'Success': `New user ${firstName} created`,
      'User': newUser
    });
  } catch (error) {
    response
      .status(500)
      .json({ "Error occured while trying to create account": error.message });
  }
};
