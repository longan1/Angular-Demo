import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './view/about/about.component';
import { HomeComponent } from './view/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { ProudctUpdateComponent } from './view/proudct-update/proudct-update.component';
import { ProudctCreateComponent } from './view/proudct-create/proudct-create.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContactComponent } from './view/contact/contact.component';
import { CardComponent } from './component/card/card.component';
import { ProductServiceService } from './service/product-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './view/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {  CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
// Import library module
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ProductComponent,
    ProudctUpdateComponent,
    ProudctCreateComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    CardComponent,
    ProductFormComponent,
    LoginComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
