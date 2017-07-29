import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  newdata={};
  products=[]
  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    if(localStorage.getItem('products')){
    this.products=JSON.parse(localStorage.getItem('products'))
    }
  }
  open(content) {
    this.modalService.open(content).result.then((result) => {
    });
  }
  delete(i){
    this.products.splice(i,1);
    localStorage.setItem('products',JSON.stringify(this.products))
  }
  edit(i){
    this.newdata=this.products[i]
  }
  updatedata(i){
    this.products[i]=this.newdata;;
    localStorage.setItem('products',JSON.stringify(this.products))
    this.newdata={}
  }
  addnew(){
    this.products.push(this.newdata)
    this.newdata={};
    localStorage.setItem('products',JSON.stringify(this.products))
  }

}
