import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { TopBarComponent } from './top-bar/top-bar.component'
import { ProductListComponent } from './product-list/product-list.component'
import { ProductDetailsComponent } from './product-details/product-details.component'
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component'

@NgModule({
    declarations: [
        AppComponent,
        TopBarComponent,
        ProductListComponent, 
        ProductDetailsComponent, 
        ProductAlertComponent, 
        CartComponent, 
        ShippingComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
