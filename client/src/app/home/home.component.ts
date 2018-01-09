import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { ProductpageComponent } from '../productpage/productpage.component';
import { LoginComponent } from '../login/login.component';
import { NewproductComponent } from '../newproduct/newproduct.component';
import { RegisterComponent } from '../register/register.component';
import { WebService } from '../web.service';
import * as $ from "jquery";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],  
  providers:[NavComponent,ProductpageComponent,LoginComponent,NewproductComponent]
})
export class HomeComponent implements OnInit {
  @ViewChild('loginbox')
  private login:ElementRef;
  bool=false;
  constructor(private service:WebService) { 

    
  }

  navclick(){
    this.bool=!this.bool;

    var color='transparent';
    console.log(this.bool,"<<<bool")

    if(this.bool){
      color='red';
    }

    

    $("#myModal").css({'display':'block'});
    //this.login.nativeElement.style.color='red';
  }

  ngOnInit() {


    $(document).ready(function(){

      $(".closebtn").click(function(){
        console.log("close login c  lick")
        $("#myModal").css({'display':'none'});
      })

    })

    
  }

  buyproduct(data:Object){
    console.log("buy product in home")
  }

}
