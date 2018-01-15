import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AsyncSubject } from 'rxjs/Asyncsubject';
import{ Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class ProductService {
  private product = new BehaviorSubject<any>(null);
  public productService = this.product.asObservable();

  private finder = new BehaviorSubject<any>(null);
  public productFinder = this.finder.asObservable();
  
  constructor() { }

  setdata(_data){
    console.log(_data,"<<<data in webservice")
     this.product.next(_data);
  }

  findProduct(_item){
    this.finder.next(_item);
  }

}