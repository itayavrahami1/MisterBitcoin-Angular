import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BitcoinResolverService } from 'src/services/bitcoin/bitcoin-resolver.service';
import { UserResolverService } from 'src/services/user/user-resolver.service';
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { ContactAppComponent } from './pages/contact-app/contact-app.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { EditContactComponent } from './pages/edit-contact/edit-contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'contact/edit/:id', component: EditContactComponent },
  { path: 'contact/edit', component: EditContactComponent },
  { path: 'contact/:id', component: ContactDetailsComponent },
  { path: 'contact', component: ContactAppComponent },
  // { path: 'user',resolve: { user: UserResolverService }, component: UserHomeComponent },
  { path: 'user',resolve: { user: UserResolverService, rate: BitcoinResolverService}, component: UserHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
