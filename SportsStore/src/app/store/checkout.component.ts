import { Component } from "@angular/core";
import { CartDetailComponent } from './cartDetail.component';
import { Cart } from '../model/cart.model';
import { NgForm } from "@angular/forms";
import { OrderRepository } from "../model/order.repository";
import { Order } from "../model/order.model";

@Component({
    templateUrl: 'checkout.component.html',
    styleUrls: ["checkout.component.css"]
})
export class CheckoutComponent {
    orderSent: boolean = false;
    submitted: boolean = false;

    constructor(public repository: OrderRepository, public order: Order) {
    }

    submitOrder(form: NgForm) {
        this.submitted = true;
        if (form.valid) {
            this.repository.saveOrder(this.order).subscribe(order => {
                debugger;
                this.order.clear();
                this.orderSent = true;
                this.submitted = false;
            });
        }
    }
}