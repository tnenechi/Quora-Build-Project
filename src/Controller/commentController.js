import { response } from "express";
import { CommentModel } from "../Models/Comment";

export const createComment = async (request, response, next) => {
  //Get the fields from the request body
  const { comment } = request.body;

  //Check if the requied field is empty
  if (!comment) {
    return response.status(400).json({ message: "A comment is required :)" });
  }

  //try to create a new comment
  try {
    //create and save comment
    const newComment = await CommentModel.create({
      comment: comment,
    });

    response.status(201).json({
      'Success': "New comment created",
      'Comment': newComment,
    });
  } catch (error) {
    response
      .status(500)
      .json({ "Error occured while trying to create comment": error });
  }
};
