import { Document } from "mongoose";
import { IContact } from "../interfaces/contact";

export interface IContactModel extends IContact, Document {
  //custom methods for your model would be defined here
}