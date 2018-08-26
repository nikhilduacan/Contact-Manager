import {Router, Request, Response, NextFunction} from 'express';
export class ContactController {

public getAll(req: Request, res: Response, next: NextFunction) {
  
    // Website you wish to allow to connect
   res.send('inputString');
  }

public create(){}

public delete(){}

public update(){}

}

export default new ContactController();
