import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  products;
  constructor() { }

  ngOnInit() {
     this.products=JSON.parse(localStorage.getItem('products'))
  }

}
