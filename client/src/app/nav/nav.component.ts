import { Component, OnInit, Output, OnChanges, EventEmitter } from '@angular/core';
import { WebService } from '../web.service';
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
  providers:[WebService],
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() tick= new EventEmitter();
  name:string;
  pagename:string="home";

  constructor(
    private service:WebService
  ) {}

  pageclick(page){
    this.pagename=page;
  }

  ngOnInit() {
    
    this.service.getProduct()
    .subscribe(
      _data=> console.log(_data,"<<<data in recieve in nav.ts")
    )
  }

  login(){
    this.tick.emit();
  }
}
