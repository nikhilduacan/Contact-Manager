import { Router, Request, Response, NextFunction, json} from 'express';
const  contactController = require('../controllers/contact.controller');
import { IModel } from '../models/model'

export class ContactsRouter {
  router: Router
 
  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * GET all Contacts.
   */
  public getAll(req: Request, res: Response, next: NextFunction) {
     res.send([{ "_id":1,"firstName":"John", "lastName":"Bush","email":'john.bush@demo.com', "phone":'654-094-0987' },
               { "_id":2,"firstName":"John", "lastName":"Bush","email":'john.bush@demo.com', "phone":'654-094-0987'}]);
  }



  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.getAll);
    // this.router.post('/:id', contactController.create);
    // this.router.put('/:id',contactController.update);
    // this.router.delete('/:id',contactController.delete);
  }

}

// let contactsRouter = new ContactsRouter();
// this.init();
export default new ContactsRouter().router;
