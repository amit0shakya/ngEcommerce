import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { OwlCarousel} from 'ng2-owl-carousel';
import { ProductService } from './../services/product.service';
import * as $ from "jquery";

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  providers:[ProductComponent],
  styleUrls: ['./productpage.component.css']
})

export class ProductpageComponent implements OnInit {

  findproductname;

  allProducts=[
    {id:'1',name:'surf',cost:'150', offer:'1 bucket free', qty:200,image:'surf.jpg'},
    {id:'2',name:'coffee',cost:'150', offer:'5% off', qty:10,image:'coffee.jpg'},
    {id:'3',name:'maggie',cost:'150', offer:'', qty:100,image:'maggie.jpg'},
    {id:'4',name:'tata salt',cost:'10', offer:'', qty:0,image:'tata.jpg'},
    {id:'5',name:'corn flakes',cost:'350', offer:'30% off', qty:10,image:'cornflakes.jpg'},
    {id:'6',name:'hmt watch',cost:'2580', offer:'RS 80 Paytm cashback', qty:10,image:'hmt.jpg'},
  ];

  showProducts=[];

  //images=[{img:"image1.jpg"},{img:"image2.jpg"},{img:"image3.jpg"},{img:"image4.jpg"},{img:"image5.jpg"}];

  @ViewChild('owlElement') owlElement: OwlCarousel

  constructor(
    private _ps:ProductService
  ) { }

  ngOnInit() {
    this.showProducts=this.allProducts.slice();

    var _this=this;
    this._ps.productFinder.subscribe(
      _p=>_this.findproduct(_p)
    )
  }

  findproduct(item){
    
    this.findproductname=item;

    if(item==null){
      return false;
    }

    if((item==undefined)||(item=='')){
      this.showProducts=this.allProducts.slice();
    }else{
  
      var _this=this;

      this.showProducts.splice(0,this.showProducts.length);

        this.allProducts.forEach(function(obj){
          
            if(_this.matchProduct(obj.name,item)){
              _this.showProducts.push(obj)
            }
        })

    }

  }
  
  matchProduct(name,product):Boolean{
    var _n=name.split(" ")
    var bool=false;
    
    _n.forEach(function(nm){
      if(nm==product){
        bool= true;
      }
    })
    
    return bool;

  }

}