import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private location: Location) { }

  ngOnInit(): void {
    // // FOR LISTENING TO ROUTE CHANGES CONTINOUSILY - FOR PAGINATION
    // this.activatedRoute.paramMap.subscribe(params => {
    //   const contactId = params.get('id')
    //   this.contactService.getContactById(contactId)
    //     .subscribe(contact => this.contact = contact)
    // })
    const contactId = this.activatedRoute.snapshot.paramMap.get('id');
    this.contactImg = `https://robohash.org/${contactId}`
    this.contactService.getContactById(contactId).subscribe(contact => this.contact = contact)
  }

  onBack(){
    this.location.back()
  }

  onRemoveContact(contactId){
    this.contactService.removeContact(contactId)
    this.route.navigate(['/contact'])
  }

}
