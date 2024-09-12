import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private snack:MatSnackBar , private router:Router) { }
 private loggedIn = new BehaviorSubject<boolean>(this.hasToken())
 private username = new BehaviorSubject<any>(this.getUsername())

 get isLoggedIn():Observable<boolean>{
  return this.loggedIn.asObservable();
 }
 
 get currentUsername():Observable<string>{
  return this.username.asObservable()
 }


 getUsername(){
  return localStorage.getItem('name');
 }

 hasToken(): boolean {
  return !!localStorage.getItem('token');
}

login(username:string) {
    this.loggedIn.next(true);
    this.username.next(username);
}

logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  this.loggedIn.next(false);
  this.username.next(''); 
  this.snack.open('Signed out!' , 'close' , {duration:4000})
  this.router.navigateByUrl('/login')
}

}
