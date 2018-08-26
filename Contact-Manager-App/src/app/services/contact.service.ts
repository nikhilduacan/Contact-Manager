import  {Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

const httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
};
@Injectable ({
    providedIn: 'root'
})

export class ContactService{
    private readonly contactUrl = "http://localhost:3000/api/contacts";

    constructor(private http: HttpClient){}
    getContactList() : Observable<Contact[]> {
        return this.http.get<Contact[]>(this.contactUrl);
    }

    createContact(){};

    updateContact(contactId: number){};

    deleteContact(contactId: number){}



}