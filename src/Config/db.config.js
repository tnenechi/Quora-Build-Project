import mongoose from "mongoose";

export const connectDB = async () => {
  mongoose.set("strictQuery", true);
  mongoose.connect(process.env.DATABASE_URI, (error) => {
    if (error) {
      console.log(error);
      return;
    }

  });
};
