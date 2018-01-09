import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { AsyncSubject } from 'rxjs/Asyncsubject';
import{ Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class WebService {
  public product = new AsyncSubject<any>();
  prod1 = new Subject<any>();
  constructor() { }

  setdata(_data){
    console.log(_data,"<<<data in webservice")
     this.product.next(_data);
    //this.prod1.next(_data);
  }

  getData(): Observable<any>{
    console.log("get data");
  return this.product.asObservable();
  
  }
}
