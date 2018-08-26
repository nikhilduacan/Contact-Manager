import { Model } from "mongoose";
import { IContactModel } from "./contact";

export interface IModel {
  contact: Model<IContactModel>;
}