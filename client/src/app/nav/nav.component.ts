import { Component, OnInit, Output, OnChanges, EventEmitter, OnDestroy } from '@angular/core';
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
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {
  @Output() tick = new EventEmitter();
  name: string;
  pagename: string = "home";
  prod = "empty";

  constructor(private service: WebService) {


  }


  pageclick(page) {
    this.pagename = page;
  }

  ngOnInit() {

    console.log('ngOnInit NAV')

    // this.service.getData()
    //   .subscribe(data =>
    //     //  data=> console.log(data,"<<<<data recieve SUCCESS")
    //     console.log(data, "data Recieve SUCCESS!")
    //   );

    this.service.prod1.subscribe(function(data){
      this.prod = data;
    })

    this.service.getData().subscribe(
      _d=>console.log(_d,"<<<got data in nav SUCCESS")
    )

  }

  ngOnDestroy() {

  }

  login() {
    this.tick.emit();
  }
}
