import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm:FormGroup;

 constructor(private fb:FormBuilder
   , private router:Router 
   , private register:RegisterService 
   ,private snack:MatSnackBar){
  this.registerForm=this.fb.group({
    Name: ['' , Validators.required],
    Email: ['' , Validators.required],
    Password:['' , Validators.required]
   })
 }

 onSubmit(Name:any | null , Email:any | null, Password:any | null){
   this.register.register(Name , Email , Password);
   this.router.navigateByUrl('/login');
   this.snack.open('Registered Successfully' , 'Close' , {duration : 3000
  ,
panelClass:['snackbar-register']})
  console.log(localStorage.getItem('name'))
  console.log(localStorage.getItem('email'))
  console.log(localStorage.getItem('password'))
 }



  backgroundStyle={
    'background-image': 'url(/assets/background-register.jpg)',
    'background-size': 'cover',
    'height': '600px',
    'width':'600px',
    'background-repeat': 'no-repeat',
    'background-position-x': '-300px'
    
  }
}
