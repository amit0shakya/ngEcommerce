import { Component, OnInit } from '@angular/core';
import { ProductviewComponent } from '../productview/productview.component';
import { WebService } from '../services/web.service';
import { FileUploader } from 'ng2-file-upload';

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  providers:[ProductviewComponent],
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {
  loaded: boolean = false;
  imageSrc: string = '';
  uploader:FileUploader = new FileUploader({url:'http://localhost:3000/upload/productpic'});

  _data={name:'',price:'',qty:'1',offer:'',catagoery:'',keywords:'',image:'',dummy:true}

  constructor(
    private ws:WebService 
  ) { }

  ngOnInit() {
  }

  uploadpic(){
    
    this.uploader.uploadAll()
    //console.log(this.uploader,"<<this.uploader")

  }

  _handleReaderLoaded(e) {
    var reader = e.target;
    this.imageSrc = reader.result;
    this.loaded = true;
  }

  saveproduct(){
    this.ws.newproduct(this._data)
    .subscribe(cb=>console.log(cb,"<callback"));
  }


  onSubmit(_data){
    console.log(_data,"<<<data")

    this.ws.uploadpic(_data)
    .subscribe(data=>console.log(data))
  }

}