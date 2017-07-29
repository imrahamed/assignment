import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operator/map';
import {debounceTime} from 'rxjs/operator/debounceTime';
import {distinctUntilChanged} from 'rxjs/operator/distinctUntilChanged';


@Component({
  selector: 'ngbd-typeahead-format',
  templateUrl: './ngbd-typeahead-format.component.html',
  styles: [`.form-control { width: 300px; }
  .quantity{
    width: 30px;
    height: 30px;
    margin-left: 7%;
    text-align: center;}`]
})
export class NgbdTypeaheadFormat {
   states = JSON.parse(localStorage.getItem('products'))

  billingproducts: any=[];
  public model: any;
  totalamount=0;
  formatter = (result) => result.name || '';
  
  search = (text$: Observable<string>) =>
    map.call(distinctUntilChanged.call(debounceTime.call(text$, 200)),
      term => term === '' ? [] : this.states.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));
      constructor(){
        this.states.forEach(element => {
  element.quantity=1;
  element.total=(element.price*(element.gst/100))+element.price;
  element.temptotal=(element.price*(element.gst/100))+element.price;
  console.log(element)
});
      }
  add(){
    this.billingproducts.push(this.model);
    this.model={};
    this.calculatetotal();
  }
  calculatetotal(){
    this.totalamount=0;
    this.billingproducts.forEach(element => {
      this.totalamount=this.totalamount+element.total;
    });
  }
  valuechanged(i){
    this.billingproducts[i].total=this.billingproducts[i].temptotal;
    this.billingproducts[i].total=this.billingproducts[i].quantity*this.billingproducts[i].total;
    this.calculatetotal()
  }
}
