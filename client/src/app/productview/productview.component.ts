import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from './../services/product.service';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent implements OnInit {
  @Input() data={};
  
  constructor(
    private _ps:ProductService
  ) { }

  ngOnInit() {
  }

}
