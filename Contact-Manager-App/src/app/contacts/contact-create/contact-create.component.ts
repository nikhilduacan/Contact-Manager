import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {
  createContactFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.createContactFormGroup = formBuilder.group({
      name: formBuilder.group({
        firstName:['', Validators.required],
        lastName: ['', Validators.required],
      }),
        email: ['', Validators.email],
        phone: ['', Validators.maxLength(12)],
    },this.checkNameLength('firstName','lastName'))
   }

   checkNameLength(firstNameKey: string, lastNameKey: string): any{
     debugger;
     let firstName = this.createContactFormGroup.controls[firstNameKey];
     let lastName = this.createContactFormGroup.controls[lastNameKey];
     if((firstName.value.length + lastName.value.length >12))
     return false;
   }
  ngOnInit() {
  }

  onBack(){
    this.router.navigateByUrl('/contactList');
  }

}
