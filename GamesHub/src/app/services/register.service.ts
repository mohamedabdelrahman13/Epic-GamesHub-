import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }
  register(Name:any | null , Email:any|null , password:any | null){
    localStorage.setItem('name' , Name)
    localStorage.setItem('email' , Email)
    localStorage.setItem('password' , password)
  }
}
