import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { DatainceptionComponent } from './datainception/datainception.component';
import { FrequentlyaskedquestionsComponent } from './pages/frequentlyaskedquestions/frequentlyaskedquestions.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { OrderDetailsService } from './pages/services/order-details.service';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { BankingandpaymentsComponent } from './pages/bankingandpayments/bankingandpayments.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'menu',component:MenuComponent},
{path:'about',component:AboutComponent},
{path:'contactus',component:ContactusComponent},
{path:'frequentlyaskedquestions',component:FrequentlyaskedquestionsComponent},
{path:'datainception',component:DatainceptionComponent},
{path:'menu/:id',component:MenupageComponent},
{path:'bankingandpayments',component:BankingandpaymentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
