import mongoose from "mongoose";
// var Schema = mongoose.Schema();
const { Schema } = mongoose;
// let userSchema = mongoose.Schema({
//   googleId: String,
// });
const userSchema = new Schema({
  googleId: String,
});

export default mongoose.model("users", userSchema);
