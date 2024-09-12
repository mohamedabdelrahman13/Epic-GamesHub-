import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { game } from '../../models/game.model';
import { GamesService } from '../../services/games.service';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HeaderComponent } from '../header/header.component';
import { category } from '../../models/category.model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent implements OnInit {
  @ViewChild('addbtn') addToCartBtn!:ElementRef
  games:game[]=[]
  emptyCart : any = 0
  catList:category[]=[]
  gamesOfCat:game[] = [];
  logged:boolean = false;
  selectedCatName:string = 'All';
  constructor(private login:LoginService, private game:GamesService,private snack:MatSnackBar , private router:Router , private cartserv:CartService){
      this.gamesOfCat = this.game.getAllGames(); 
  }
  ngOnInit(): void {
    this.games = this.game.getAllGames(); 
    this.emptyCart = this.cartserv.isEmptyCart;
    this.catList=this.game.getCatList();
     this.login.isLoggedIn.subscribe((status)=>{
      this.logged = status;
    })
  }
  
  openGameDetails(gid:number){
    this.router.navigate(['/store' , gid])
  }

  opencart(gid:number , gname:string , gprice:string){
    this.router.navigate(['/cart' , gid , gname , gprice])
  }

  addToCart(game: game) {
   if(this.logged){
    this.cartserv.addToCart(game);
    this.snack.open('Game added successfully' , 'close' , {
      duration:1000,
      // panelClass:['snackbar-addToCart']
    }
    );
    game.inCart=true;
   }
   else{
    this.snack.open('you must login first' , 'close' , {duration:3000})
    this.router.navigateByUrl('/login')
   }
  }

  changeCat()
  {
    if(this.selectedCatName != 'All')
    {
      this.game.getCatListAll();
    }
    this.gamesOfCat = this.games.filter(game => game.category == this.selectedCatName)
  }
//   addbtn(gameID:number){
//    let addedGame = this.games.find(game=>game.id=gameID);
//    if(addedGame?.inCart){
//     this.addToCartBtn.nativeElement.innerText="In Cart"
//   }
 
// }

}
