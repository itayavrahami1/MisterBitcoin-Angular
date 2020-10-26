import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { ContactAppComponent } from './pages/contact-app/contact-app.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EditContactComponent } from './pages/edit-contact/edit-contact.component';
import { ContactFormComponent } from './cmps/contact-form/contact-form.component';
import { FooterComponent } from './cmps/footer/footer.component';
import { UserHomeComponent } from './cmps/user/user-home/user-home.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    ContactAppComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactDetailsComponent,
    ContactFilterComponent,
    EditContactComponent,
    ContactFormComponent,
    FooterComponent,
    UserHomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
