import { Component } from '@angular/core';
import { game } from '../../models/game.model';
import { CartService } from '../../services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  purchasedGames:game[]=[];
  totalPrice:number=0;
  paymentForm:FormGroup;
  constructor(private cart:CartService,
    private fb:FormBuilder
    ,private snack:MatSnackBar){
    this.purchasedGames= this.cart.gamesAdded();
    this.totalPrice=this.cart.getTotalPrice();
    this.paymentForm = this.fb.group({
      Number: ['' , Validators.required],
      MMYY: ['' , Validators.required],
      cvv: ['' , Validators.required],
      NameOnCard: ['' , Validators.required],
     })

  }

  OnSubmit(){
    for(let i = 0 ; i< this.purchasedGames.length ; i++)
    {
      this.purchasedGames[i].Purchased=true;
    }
    this.cart.addtoLibrary();
    this.cart.removeAllGames();
    this.snack.open('Games added to your library' , 'close' , {duration:3000});
  }



}
