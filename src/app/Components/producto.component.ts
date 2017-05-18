/**
 * Created by jh0n4 on 11/5/17.
 */
import { Component } from '@angular/core';

import { Producto } from './producto';

@Component({
  moduleId: module.id,
  selector: 'app-product',
  templateUrl: 'producto.component.html'
})


export class ProductoComponent {
  producto: Producto[]= [{
    "id": 1,
    "name": "Super Tires",
    "description": "These tires are the very best",
    "inStock": 5,
    "price": 4.99,
  }];
}
