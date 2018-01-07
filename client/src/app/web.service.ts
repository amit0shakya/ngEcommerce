import { Injectable, EventEmitter, Output  } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs';

@Injectable()
export class WebService {
  @Output() tick = new EventEmitter();
   
  //public product =new Subject<any>();
  public productService = new Subject<any>();
  //prodService=this.product.asObservable()

  public test = new Subject<any>();

  constructor() { 
  }

  login(){
    //console.log('login')
  }

  buyProduct(_data){
    console.log(_data,"<<<data recieve to webservice sending to product.ts");
    this.productService.next(_data);
  }
  
  getProduct(): Observable<any>{
    return this.test.asObservable();
  }

}