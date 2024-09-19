import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { CartService } from '../../services/cart.service';
import { game } from '../../models/game.model';
import { StoreComponent } from '../store/store.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  activeLink: string = '';
  isLoggedIn:boolean=false;
  username:string='';
  itemsAdded:number = 0;
  constructor( private log:LoginService , private cart:CartService , private router:Router){
  //  this.itemsAdded=this.cart.getNoOfCartItems()
   console.log(this.cart.getNoOfCartItems())
  }

  ngOnInit(): void {
    this.log.isLoggedIn.subscribe((logged:boolean)=>{
      this.isLoggedIn = logged
    })
    this.log.currentUsername.subscribe((username:string)=>{
      this.username = username;
    })
    this.cart.getNoOfCartItems().subscribe((Games:number)=> {this.itemsAdded= Games})
  }
  
  showServices(){
    this.router.navigateByUrl('/home');
    window.scrollBy({
      top: 600,
      behavior:'smooth'
    })
  }

  setActiveLink(event: Event, link: string) {
    if(link!=''){
      event.preventDefault();
      this.activeLink = link;
    }
  }
  
 logout(){
  this.log.logout();
 }
  

 
  
  logo={
    'background-image': 'url(/assets/logo.png)',
    'background-size': 'cover',
    'height': '60px',
    'width': '75px',
  }
}
