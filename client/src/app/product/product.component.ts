import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WebService } from '../web.service';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  providers:[WebService],
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  addToCart=false;
  @Input() data={};
  //we dont require EventEmitter for now we using Services insted of this
  @Output() buy = new EventEmitter<Object>();

  constructor(
    private service:WebService
  ) { }

  buythis(){
    console.log('Sending value to product service');
    
    //this.addToCart=!this.addToCart;
    
    this.service.testProduct(this.data);

    /*
      this.service.prodService.subscribe(
        _d=>console.log(_d,"<<data in product.ts")
      )
    */

    
    //this.service.product.next({buy:this.addToCart,object:this.data});
  }

  ngOnInit() {
    
  }

}