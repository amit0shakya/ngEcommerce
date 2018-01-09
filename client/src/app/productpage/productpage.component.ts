import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { OwlCarousel} from 'ng2-owl-carousel';
import { WebService } from '../web.service';
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

  dummyproducts=[
    {id:'1',name:'surf',cost:'150', offer:'1 bucket free', qty:200},
    {id:'2',name:'coffee',cost:'150', offer:'5% off', qty:10},
    {id:'3',name:'maggie',cost:'150', offer:'', qty:100},
    {id:'4',name:'tata salt',cost:'10', offer:'', qty:0},
    {id:'5',name:'corn flakes',cost:'350', offer:'30% off', qty:10},
    {id:'6',name:'hmt watch',cost:'2580', offer:'RS 80 Paytm cashback', qty:10},
  ];

  images=[{img:"image1.jpg"},{img:"image2.jpg"},{img:"image3.jpg"},{img:"image4.jpg"},{img:"image5.jpg"}];

  @ViewChild('owlElement') owlElement: OwlCarousel

  constructor(
    private wtf:WebService
  ) { }

  ngOnInit() {
    
  }

  buyproduct(data){
    console.log(data,"<<<buyproduct Product page sending data")
    this.wtf.setdata(data);

  }
}