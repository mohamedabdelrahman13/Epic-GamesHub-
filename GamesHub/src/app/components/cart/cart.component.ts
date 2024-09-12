import { Component, OnChanges, OnInit } from '@angular/core';
import { game } from '../../models/game.model';
import { GamesService } from '../../services/games.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems:game[]=[]
  orderTotalPrice:number = 0;
  getPurchased:boolean = false;

  constructor(private cartService:CartService 
    ,private gam:GamesService 
    , private activeRoute:ActivatedRoute 
    , private snack:MatSnackBar
    ,private router:Router){
   
    
  }
  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
    });
    this.orderTotalPrice = this.cartService.getTotalPrice();
     this.cartService.isPurchased.subscribe((status)=>{
     this.getPurchased = status ;  
     })
  }

  remove(item:game){
    this.cartService.removeFromCart(item);
    item.inCart=false;
    item.Purchased=false;
  }
  removeAll(){
    this.cartService.removeAllGames();
    this.snack.open('Cart cleared!' , 'close' , {duration : 2000,
      // panelClass:['cartCleared']
    } )
  }

  
  
  payment(cartitems:game[]){
    this.router.navigateByUrl('/payment')
  }

 


}

