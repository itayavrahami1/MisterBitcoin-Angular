import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/services/contact.service';

Router
@Component({
  selector: 'app-contact-app',
  templateUrl: './contact-app.component.html',
  styleUrls: ['./contact-app.component.scss']
})
export class ContactAppComponent implements OnInit,OnDestroy {
  subscription: Subscription
  contacts: Contact[] = []

  constructor(private contactService: ContactService,
    private router: Router) { }

  ngOnInit(): void {
    this.contactService.query()
    this.subscription = this.contactService.contacts$.subscribe(contacts => {
      this.contacts = contacts
    })
  }

  handleFilterChange(filterBy){
    this.contactService.query(filterBy)
  }

  removeContact(contactId){
    this.contactService.removeContact(contactId)
  }

  editContact(contactId){
    console.log('edit contact', contactId);
    this.router.navigate([`/contact/edit/${contactId}`])
  }

  ngOnDestroy(): void {
    // TODO - UNSUBSCRIBE
  }

}
