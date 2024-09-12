import { Injectable } from '@angular/core';
import { BehaviorSubject , Observable } from 'rxjs';
import { game } from '../models/game.model';
import { ObserversModule } from '@angular/cdk/observers';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  private cartItems:game[]=[]
  private cart = new BehaviorSubject<game[]>([])
  cart$ = this.cart.asObservable()
  private noOfGamesAdded =  new BehaviorSubject<number>(this.Added())
  private emptyCart =  new BehaviorSubject<number>(this.isEmpty())
  private Purchased = new BehaviorSubject<boolean>(false)

  get isPurchased(){
    return this.Purchased.asObservable()
  }
  get isEmptyCart():Observable<number>{
    return this.emptyCart.asObservable()
  } 
   getlibraryItems(){
    return this.cartItems;
  }

  addToCart(game:game){
    this.cartItems.push(game);
    const currentCart = this.cart.value;
    const currentGamesNo = this.noOfGamesAdded.value;
    this.cart.next([...currentCart, game]);
    this.noOfGamesAdded.next(currentGamesNo+1);
  }
 
  removeFromCart(game: game){
    this.cartItems=this.cartItems.splice(this.cartItems.indexOf(game)-1 , 1)
    const currentCart = this.cart.value;
    const currentGamesNo = this.noOfGamesAdded.value;
    const updatedCart = currentCart.filter(cartItem => cartItem.id !== game.id);
    this.cart.next(updatedCart);
    this.noOfGamesAdded.next(currentGamesNo-1);
  }
  removeAllGames() {
    const currentCart = this.cart;
    for(let i = 0 ; i < currentCart.value.length ; i++)
    {
      currentCart.value[i].inCart = false
    }
    const currentGamesNo=this.noOfGamesAdded.value
    this.noOfGamesAdded.next(currentGamesNo-currentGamesNo);
    this.cart.next([])
  }
  
  getTotalPrice(){
    let totalprice = 0
   const currentCart = this.cart;
   for (let i = 0 ; i< currentCart.value.length ; i++){
    totalprice += +currentCart.value[i].price
   }
   return totalprice
  }
  Added(){
    return this.cart.value.length
  }

  isEmpty(){
     return this.cart.value.length
  }

  getNoOfCartItems():Observable<number>{
    return this.noOfGamesAdded.asObservable() ;
  }
  
  addtoLibrary(){
    this.Purchased.next(true)
  }

  gamesAdded(){
    return this.cart.value;
  }
}
