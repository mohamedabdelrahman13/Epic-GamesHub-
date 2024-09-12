import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { game } from '../../models/game.model';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})
export class LibraryComponent {
  getPurchased:boolean = false;
  purchasedGames:game[]=[];
  constructor(private router:Router , private cart:CartService){
    this.purchasedGames = this.cart.getlibraryItems();
    this.cart.isPurchased.subscribe((status)=>{
        this.getPurchased = status;
    })
  }
 




}
