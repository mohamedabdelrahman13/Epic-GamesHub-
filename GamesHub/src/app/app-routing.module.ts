import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { CartComponent } from './components/cart/cart.component';
import { LibraryComponent } from './components/library/library.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'home' , component:HomeComponent},
  {path:'store' , component:StoreComponent},
  {path:'cart' , component:CartComponent},
  {path:'store/:gid' , component:GameDetailsComponent},
  {path:'cart/:gid/:gname/:gprice' , component:CartComponent},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'library' , component:LibraryComponent},
  {path:'payment' , component:PaymentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
