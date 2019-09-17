import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { StaticDataSource } from "./static.datasource";
import { Order } from './order.model';

@Injectable()
export class OrderRepository {
    private orders: Order[] = [];
    
    constructor(private dataSource: StaticDataSource) {
    } 
    
    getOrders(): Order[] {
        return this.orders;
    }
    saveOrder(order:Order){
        return this.dataSource.saveOrder(order);
    }
}