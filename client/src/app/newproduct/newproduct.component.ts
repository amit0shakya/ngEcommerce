import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { ProductviewComponent } from '../productview/productview.component';
import { WebService } from '../services/web.service';
import { FileUploader } from 'ng2-file-upload';
import { Http, Response } from '@angular/http';
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
  public URL = 'http://localhost:3000/upload/productpic';
  public uploader:FileUploader = new FileUploader({url:this.URL, itemAlias:'single'});

  _data={name:'',price:'',qty:'1',offer:'',catagoery:'',keywords:'',image:'',dummy:true}

  constructor(
    private ws:WebService,
    private http: Http, 
    private el: ElementRef
  ) { }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };

    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      console.log("ImageUpload:uploaded:", item, status, response);
    };
  }

  uploadpic(){
    
    console.log('upload pic')
    //this.uploader.uploadAll()
    //console.log(this.uploader,"<<this.uploader")

    //locate the file element meant for the file upload.
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#picuploader');
    //get the total amount of files attached to the file input.
    let fileCount: number = inputEl.files.length;
    //create a new fromdata instance
    let formData = new FormData();
    //check if the filecount is greater than zero, to be sure a file was selected.

    if (fileCount > 0) { // a file was selected
      //append the key name 'photo' with the first file in the element
      formData.append('single', inputEl.files.item(0));
      //call the angular http method

      console.log(formData,"<<<formData")

      this.http
      //post the form data to the url defined above and map the response. Then subscribe //to initiate the post. if you don't subscribe, angular wont post.
          .post(this.URL, formData)
          .map((res:Response) => res.json())
          .subscribe(//map the success function and alert the response
            (success) => {alert(success._body)},
            (error) => alert(error)
          )
      }

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