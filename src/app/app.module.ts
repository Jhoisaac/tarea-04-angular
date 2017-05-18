import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }     from './app.component';
import { ProductoComponent }  from './Components/producto.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ProductoComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
