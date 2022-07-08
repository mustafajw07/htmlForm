import mongoose from "mongoose";


async function connectDb(url) {
  await mongoose.connect(url);
}



export default connectDb;