import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSnackBarAction,MatSnackBarActions,MatSnackBarLabel,MatSnackBarRef} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  loginForm:FormGroup;
  constructor(private fb:FormBuilder ,private snack:MatSnackBar , private router : Router , private log:LoginService){
     this.loginForm = this.fb.group({
      Email: ['' , Validators.required],
      Password:['' , Validators.required]
     })

    }

    get Email(){
      return this.loginForm.get('Email')
    }
    
    get Password(){
      return this.loginForm.get('Password')
    }

    currentName = localStorage.getItem('name')
    
    OnSubmit(currentName:any|null , Email:any|null , Password:any|null){
        if(Email === localStorage.getItem('email') && Password === localStorage.getItem('password')){
          localStorage.setItem('token' , 'eejfbwejbflwbefjw1344');
          localStorage.setItem('username' , currentName);
          this.log.login(currentName)
          this.router.navigateByUrl('/home')
          this.snack.open('Login Success!' , 'close' , {
          duration:3000,
          // panelClass:['snackbar']
        })
      }
      else{
        this.snack.open('invalid email or password!' , 'close' , {
          duration:3000 ,
          // panelClass:['snackbarFailed']
        })
      }
  }


  
 background={
  'background-image': 'url(/assets/image.jpg)',
}

backgroundStyle={
  'background-image': 'url(/assets/image.jpg)',
  'background-size': 'cover',
  'height': '600px',
  'width':'600px',
  'background-repeat': 'no-repeat',
  'background-position-x': '-300px'
  
}
backgroundStyleMobile={
  'background-image': 'url(/assets/image.jpg)',
  'background-size': 'cover',
  'height': '200px',
  'width':'200px',
  'background-repeat': 'no-repeat',
  // 'background-position-x': '-300px'
  
}
}
