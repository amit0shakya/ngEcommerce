import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from './../services/product.service';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  addToCart=false;
   @Input() data={};
  // //we dont require EventEmitter for now we using Services insted of this
  // @Output() buy = new EventEmitter<Object>();

  constructor(
    private _ps:ProductService
  ) { }

  buythis():void{
    this.addToCart=!this.addToCart;
    this._ps.setdata({buy:this.addToCart,product:this.data});
  }

  ngOnInit() {
    
    /*
    this.service.getData()
    .subscribe(
      _d=> console.log(_d,"<<<data in Product.ts")
    )*/
  }

}