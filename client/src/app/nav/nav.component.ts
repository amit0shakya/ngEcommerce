import { Component, OnInit, Output, OnChanges, EventEmitter, OnDestroy } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ProductService } from './../services/product.service';
import * as $ from "jquery";

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {
  public searchitem:String;
  @Output() tick = new EventEmitter();
  toggledd=false;
  name: string;
  pagename: string = "home";
  productlist=[];

  constructor(private _ps: ProductService) {

  }

  pageclick(page) {
    this.pagename = page;
  }

  ngOnInit() {

    var _this=this;
    this._ps.productService.subscribe(function(data){
      if(data!=null){
      _this.productlist.push(data)
      console.log(_this.productlist,"<<<data in nav")
      }
    })

  }

  ngOnDestroy() {

  }

  login() {
    this.tick.emit();
  }

  finditem(){

    this._ps.findProduct(this.searchitem)
  }
}
