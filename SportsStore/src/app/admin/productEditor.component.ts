import { Component } from "@angular/core";
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
    templateUrl: 'productEditor.component.html'
})
export class ProductEditorComponent {
    editing: boolean = false;
    product: Product = new Product();

    constructor(private repository: ProductRepository, private router: Router, private activeRoute: ActivatedRoute) {
        let id = this.activeRoute.snapshot.params["id"];
        this.editing = this.activeRoute.snapshot.params["mode"] == "edit";
        if(this.editing){
            this.product = this.repository.getProduct(id);
        }
    }

    getProduct(id:number) {
        this.product = this.repository.getProduct(id);
    }

    save(form:NgForm){
        this.repository.saveProdct(this.product);
        this.router.navigateByUrl("/admin/main/products");
    }
 }