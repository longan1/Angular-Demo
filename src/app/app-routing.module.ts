import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './view/about/about.component';
import { ContactComponent } from './view/contact/contact.component';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { ProudctCreateComponent } from './view/proudct-create/proudct-create.component';
import { ProudctUpdateComponent } from './view/proudct-update/proudct-update.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },

  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product-create', component: ProudctCreateComponent },

  { path: 'product/:id', component: ProudctUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
