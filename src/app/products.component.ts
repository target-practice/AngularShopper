import { Component } from '@angular/core';

@Component({
    selector: 'products', // creates custom HTML element <products>
    template: '<h2>{{ "Title: " + title }}</h2>' // the HTML markup to be rendered
})
export class ProductsComponent {
    
    title = "Browse Our Products";
}