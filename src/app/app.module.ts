import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductsService } from'./products.service'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { BillingComponent } from './billing/billing.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbdTypeaheadFormat } from './ngbd-typeahead-format/ngbd-typeahead-format.component';
const appRoutes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'billing',      component: BillingComponent },
  
];
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    BillingComponent,
    NgbdTypeaheadFormat
  ],
  imports: [
     RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
     NgbModule.forRoot(),
     FormsModule
  ],
  providers: [ ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
