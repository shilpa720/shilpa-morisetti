import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharedpages/navbar/navbar.component';
import { FooterComponent } from './sharedpages/footer/footer.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { OrderDetailsService } from './pages/services/order-details.service';
import { FrequentlyaskedquestionsComponent } from './pages/frequentlyaskedquestions/frequentlyaskedquestions.component';
import { HomeComponent } from './pages/home/home.component';
import { DatainceptionComponent } from './datainception/datainception.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { LifesciencesComponent } from './pages/lifesciences/lifesciences.component';
import { HealthcareComponent } from './pages/healthcare/healthcare.component';
import { BankingandpaymentsComponent } from './pages/bankingandpayments/bankingandpayments.component';
import { EducationComponent } from './pages/education/education.component';
import { InsurenceComponent } from './pages/insurence/insurence.component';
import { RetailComponent } from './pages/retail/retail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MenuComponent,
    AboutComponent,
    ContactusComponent,
    FrequentlyaskedquestionsComponent,
    HomeComponent,
    DatainceptionComponent,
    MenupageComponent,
    LifesciencesComponent,
    HealthcareComponent,
    BankingandpaymentsComponent,
    EducationComponent,
    InsurenceComponent,
    RetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
