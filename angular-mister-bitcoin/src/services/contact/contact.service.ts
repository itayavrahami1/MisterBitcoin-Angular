import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError, of } from 'rxjs';
import { Contact } from '../../app/models/contact.model';
import { HttpClient } from '@angular/common/http';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private httpService: HttpClient) { }

  private BASE_URL = 'http://localhost:3000/contact'

  private _contacts$ = new BehaviorSubject<Contact[]>([])
  public contacts$ = this._contacts$.asObservable()

  public query(filterBy = { name: '' }): void {
    this.httpService.get<Contact[]>(this.BASE_URL)
      .pipe(
        map(contacts => {
          return contacts.filter(({ name }) => {
            return name.toLowerCase().includes(filterBy.name.toLowerCase());
          })
        })
      ).subscribe(contacts => {
        this._contacts$.next(contacts);
      })
  }

  public getContactById(id: string): Observable<Contact> {
    return this.httpService.get<Contact>(this.BASE_URL + `/${id}`)
      .pipe(
        retry(1),
        catchError(() => throwError('no contact found!'))
      );
  }

  public removeContact(id: string): void {
    this.httpService.delete<Contact[]>(this.BASE_URL + `/${id}`)
      .subscribe(res => {
        this.query()
      })
  }

  public saveContact(contact: Contact) {
    if (contact._id) return this.httpService.put<any>(this.BASE_URL + `/${contact._id}`, contact).subscribe(contact => this.query());
    else {
      contact._id = this._makeId();
      return this.httpService.post<any>(this.BASE_URL, contact).subscribe(contact => {
        const contacts = this._contacts$.getValue()
        contacts.push(contact)
        this._contacts$.next(contacts)
      });
    }
  }

  public getEmptyUser() {
    return { name: '', email: '', phone: '' }
  }

  private _sort(contacts: Contact[]): Contact[] {
    return contacts.sort((a, b) => {
      if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
        return -1;
      }
      if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
        return 1;
      }

      return 0;
    })
  }

  private _filter(contacts, term) {
    term = term.toLocaleLowerCase()
    return contacts.filter(contact => {
      return contact.name.toLocaleLowerCase().includes(term) ||
        contact.phone.toLocaleLowerCase().includes(term) ||
        contact.email.toLocaleLowerCase().includes(term)
    })
  }

  private _makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}

