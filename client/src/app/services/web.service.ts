import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { FileUploader } from 'ng2-file-upload';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable()
export class WebService {
  public uploader:FileUploader = new FileUploader({url:'http://localhost:3001/upload/productpic'})

  constructor(private _http:Http) { }

  uploadpic (img):Observable<any>{
    const body = {"filaname": img};
    console.log(img,"<<<img in uploadpic")
     /*this.uploader.uploadAll();*/
    return this._http.post('http://localhost:3000/upload/productpic',body)
  }

  newproduct(_data):Observable<any>{

    console.log(_data,"<<<data");

   return this._http.post("http://localhost:3000/api/addproduct",_data)
  }

}