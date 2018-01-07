import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  providers:[ProductComponent],
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {
  
  _data={name:'',cost:'',qty:'1',offer:'',catagoery:'',keywords:'',image:''}
  constructor() { }

  ngOnInit() {
  }

   getFiles(event){
    console.log(event.target.files[0].name,"<<<filepath")
  }

  submit(){
    
  }

}
