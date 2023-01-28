import { PostModel } from "../Models/Post";

export const createPost = async (request, response, next) => {
  //Get the fields from the request body
  const { text, pictures, userID } = request.body;

  //check if the required field is empty
  if (!text) {
    return response.status(400).json({ message: "The text is required :)" });
  }

  //try to create the new post
  try {
    //create and save new post
    const newPost = await PostModel.create({
      text: text,
      pictures: pictures ? pictures : "",
    });

    response.status(201).json({
      'Success': 'New post created',
      'Post': newPost
    });
  } catch (error) {
    response
      .status(500)
      .json({ "Error occured while trying to create post": error });
  }
};
