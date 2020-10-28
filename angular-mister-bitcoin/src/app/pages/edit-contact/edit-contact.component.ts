import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/services/contact/contact.service';
import { UserMsgService } from 'src/services/system/user-msg.service';

@Component({
  selector: 'edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  contact: Contact
  constructor(private contactService: ContactService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private location: Location,
    private userMsgService: UserMsgService
  ) { }

  ngOnInit(): void {
    const contactId = this.activatedRoute.snapshot.paramMap.get('id');
    if (contactId) this.contactService.getContactById(contactId).subscribe(contact => this.contact = contact)
    else this.contact = this.contactService.getEmptyUser()
  }

  saveContact(form): void {
    const { name, phone, email } = form.value
    this.contact = { ...this.contact, name, phone, email }
    this.contactService.saveContact(this.contact)
    this.userMsgService.setUserMsg({txt: 'contactSaved', type: 'successed'})
    this.route.navigate(['/contact'])
   }
}
