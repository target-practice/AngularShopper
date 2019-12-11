import { Component } from '@angular/core';

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

    products = ["product 1", "product 2", "product 3"];

    getTitle() {
    	return this.title;
    }
}