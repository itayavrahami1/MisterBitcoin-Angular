import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/services/contact.service';

@Component({
  selector: 'edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  contact: Contact
  constructor(private contactService: ContactService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    const contactId = this.route.snapshot.paramMap.get('id');
    if (contactId) this.contactService.getContactById(contactId).subscribe(contact => this.contact = contact)
    else this.contact = this.contactService.getEmptyUser()
  }
}
