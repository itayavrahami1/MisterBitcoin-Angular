import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ContactService } from 'src/services/contact.service';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  contact: Contact;
  contactImg: String = '';
  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    const contactId = this.route.snapshot.paramMap.get('id');
    this.contactImg = `https://robohash.org/${contactId}`
    this.contactService.getContactById(contactId).subscribe(contact => this.contact = contact)
  }

}
