import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactAppComponent } from './pages/contact-app/contact-app.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { EditContactComponent } from './pages/edit-contact/edit-contact.component';

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'contact/edit/:id', component: EditContactComponent },
  { path: 'contact/edit', component: EditContactComponent },
  { path: 'contact', component: ContactAppComponent },
  { path: 'contact/:id', component: ContactDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
