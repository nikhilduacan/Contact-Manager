import * as express from 'express';
import ContactsRouter from './router/contactRouter';
import  * as bodyParser from 'body-Parser';
import * as logger from "morgan";
import * as path from "path";
import { IModel } from "./models/model"; //import IModel
import { IContact } from "./interfaces/contact"; //import IUser

//models
import { IContactModel } from "./models/contact"; //import IUserModel

//schemas
import { contactSchema } from "./schemas/contact"; //import userSchema

import errorHandler = require("errorhandler");
import methodOverride = require("method-override");
import mongoose = require("mongoose"); //import mongoose
// Creates and configures an ExpressJS web server.
class App {
  // ref to Express instance
  public express: express.Application;
  private model: IModel; //an instance of IModel

  //Run configuration methods on the Express instance.
  constructor() {
    this.model = Object();
    this.express = express();
    console.log("Starting middleware");
    this.config();
    this.middleware();
    this.routes();
  }
  // Configure Express middleware.
  private middleware(): void {
    this.express.use(bodyParser.urlencoded({extended : true}));
    //this.express.use(bodyParser.json);
    // console.log("Done from middleware");

  }


  public config(){
    const MONGODB_CONNECTION: string = "mongodb://localhost:27017/test";
    global.Promise = require("q").Promise;
    mongoose.Promise = global.Promise;

    //connect to mongoose
   //  let connection: mongoose.Connection = mongoose.createConnection(MONGODB_CONNECTION);
    mongoose.connect(MONGODB_CONNECTION).then(

      () => {
          console.log("MongoDB Successfully Connected On: " + MONGODB_CONNECTION)
      },
      (err: any) => {
          console.error("MongoDB Error:", err);
          console.log('%s MongoDB connection error. Please make sure MongoDB is running.');
          process.exit();
      }

  );

    //create models
    this.model.contact = mongoose.connection.model<IContactModel>("Contact", contactSchema);
    
    
    // let contact: IContact = {
    //   email: "foo@bar.com",
    //   firstName: "Brian",
    //   lastName: "Love"
    // };
    // let a = new this.model.contact(contact);
    // a.save();
  }

  // Configure API endpoints.
  private routes(): void {
    /* This is just to get up and running, and to make sure what we've got is
     * working so far. This function will change when we start to add more
     * API endpoints */
    let router = express.Router();
    // placeholder route handler
    router.get('/', (req, res, next) => {
        res.send(
            `<html>
              <head>
                <title>Tutorial: HelloWorld</title>
              </head>
              <body>
                <h1>HelloWorld Tutorial</h1>
        
            <p>
              The current data and time is: 
              <strong>`+new Date()+`</strong>
            </p>    
        
              </body>
            </html>`
            )
    });
    this.express.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     next();});
    this.express.use('/', router);
    this.express.use('/api/contacts', ContactsRouter);
  }
}
export default new App().express;