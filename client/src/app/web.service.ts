import { Injectable, EventEmitter, Output  } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WebService {
  @Output() tick = new EventEmitter();
   
  //public product =new Subject<any>();
  public productService = new Subject<any>();
  //prodService=this.product.asObservable()

  public test = new Subject();
  testService = this.test.asObservable();

  constructor() { 
  }

  login(){
    //console.log('login')
  }

  getTestval(){
    this.test.next('Hello Amit');
  }

  
  testProduct(_data){
    console.log(_data,"<<< product in webservice");
    this.productService.next(_data);
  }

}