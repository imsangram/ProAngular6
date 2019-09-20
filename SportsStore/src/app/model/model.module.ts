import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { Cart } from './cart.model';
import { OrderRepository } from './order.repository';
import { Order } from './order.model';
import { RestDataSource } from "./rest.datasource";
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from './auth.service';

@NgModule({
    imports: [HttpClientModule],
    providers: [ProductRepository, Cart, Order, OrderRepository, RestDataSource,  AuthService
        /*{ provide: StaticDataSource, useClass: RestDataSource } */
    ]
})
export class ModelModule { 
    
} 