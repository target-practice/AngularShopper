import { Component } from '@angular/core';

import { ProductsService } from './products.service'; 

@Component({
    selector: 'products', // creates custom HTML element <products>
    template: 
    	`
    	<h2>{{ getTitle() }}</h2>
    	<ul>
    		<li *ngFor="let product of products">
    			{{ product }}
    		</li>
    	</ul>

    	` // the HTML markup to be rendered
})
export class ProductsComponent {
    
    title = "Browse Our Products";

    products;

    constructor(service: ProductsService) {
    	this.products = service.getProducts();
    }

    getTitle() {
    	return this.title;
    }
}