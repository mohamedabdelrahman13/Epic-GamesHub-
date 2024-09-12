import { Component, ElementRef, HostListener, OnInit, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  constructor(){}
backgroundStyle={
  // 'background-image': 'url(/assets/home-background.jpeg)',
  'background-image': 'url(/assets/home-background-removebg.png)',
  'background-size': 'cover',
  'height': '80vh',
  'width':'43%',
  'background-repeat': 'no-repeat',
  'background-position-x': '-350px'
  
   }
}

