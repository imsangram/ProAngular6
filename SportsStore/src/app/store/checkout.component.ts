import { Component } from "@angular/core";
import { CartDetailComponent } from './cartDetail.component';
import { Cart } from '../model/cart.model';
@Component({
    template: `<div><h3 class="bg-info p-1 text-white">Checkout Component</h3></div>`
})
export class CheckoutComponent {
    constructor(cart:Cart){
        debugger;
    }
 }