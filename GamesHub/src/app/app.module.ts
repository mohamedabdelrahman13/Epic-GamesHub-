import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBarAction,MatSnackBarActions,MatSnackBarLabel} from '@angular/material/snack-bar';
import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { CartComponent } from './components/cart/cart.component';
import { LibraryComponent } from './components/library/library.component';
import { PaymentComponent } from './components/payment/payment.component';



@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    HomeComponent,
    StoreComponent,
    GameDetailsComponent,
    CartComponent,
    LibraryComponent,
    PaymentComponent
  ],
  imports: [
    
    MatSnackBarLabel,
    MatSnackBarActions,
    MatSnackBarAction,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
