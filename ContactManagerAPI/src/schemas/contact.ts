import { Schema } from "mongoose";

export let contactSchema: Schema = new Schema({
  createdAt: Date,
  email: String,
  firstName: String,
  lastName: String
});
contactSchema.pre("save", function(next) {
//   if (!this.createdAt) {
//     this.createdAt = new Date();
//   }
  next();
});