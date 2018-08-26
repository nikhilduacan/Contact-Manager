import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
import {MatSort, MatTableDataSource} from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  title = 'app';
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phone','action'];
  contactList: Contact[];
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private contactService: ContactService){}
  ngOnInit() {
    this.contactService.getContactList().subscribe(contacts => {
      debugger;
      this.contactList = contacts;
    });
  }

  onEdit(){
    debugger;
  }

  onDelete(){
    debugger;
  }
  navigatorTo(){
    this.router.navigateByUrl('/createContact');
  }
}

