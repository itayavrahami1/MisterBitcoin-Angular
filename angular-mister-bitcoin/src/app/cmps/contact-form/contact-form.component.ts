import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact.model';
import { ContactFormValidator } from 'src/app/validators/ContactFormValidator';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})

export class ContactFormComponent implements OnInit {

  @Input() contact: Contact;
  @Output() onSaveForm = new EventEmitter()

  public contactForm: FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: new FormControl(this.contact.name,[Validators.required]),
      phone: new FormControl(this.contact.phone,[Validators.required]),
      email: new FormControl(this.contact.email, [Validators.required])
      // name: new FormControl(this.contact.name,[Validators.required, ContactFormValidator.startsWithNumber]),
      // phone: new FormControl(this.contact.phone,[Validators.required, ContactFormValidator.vaildPhoneNumber]),
      // email: new FormControl(this.contact.email, [Validators.required,ContactFormValidator.vaildEmail])
    })
  }
}
