import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {
  @Input() contact: Contact;
  @Output() onRemoveContact = new EventEmitter()
  @Output() onEditContact = new EventEmitter()
  contactImg: String = ''
  constructor() { }

  ngOnInit(): void {
    this.contactImg = `https://robohash.org/${this.contact._id}`
  }

}
