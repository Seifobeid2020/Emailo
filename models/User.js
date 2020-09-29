import mongoose from "mongoose";
// var Schema = mongoose.Schema();
const { Schema } = mongoose;
// let userSchema = mongoose.Schema({
//   googleId: String,
// });
const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 },
});

export default mongoose.model("users", userSchema);
