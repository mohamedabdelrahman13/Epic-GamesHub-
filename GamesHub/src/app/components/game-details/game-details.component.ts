import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { game } from '../../models/game.model';
import { GamesService } from '../../services/games.service';
import { CartService } from '../../services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrl: './game-details.component.css'
})
export class GameDetailsComponent implements OnInit {
  currGame:number = 0
  game:game|null = null
  constructor(private route : Router ,  private router : ActivatedRoute , private gam:GamesService , private cart:CartService , private snack:MatSnackBar){

  }

  ngOnInit(): void {
    this.currGame=Number(this.router.snapshot.paramMap.get('gid'));
    // console.log(this.currGame);
    this.game=this.gam.getGameByID(this.currGame)
    // console.log(this.gam.getGameByID(this.currGame))
  }
  
  getBackgroundImageUrl(){
    return `url(${this.game?.imgUrl})`;
  }

  
  addToCart(game: game) {
    this.cart.addToCart(game);
    this.snack.open('Game added successfully' , 'close' , {
      duration:1000
    }
    );
    game.inCart=true;
  }

  goBack(){
    this.route.navigateByUrl('/store')
  }
}
