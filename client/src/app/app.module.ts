import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRouter } from './routes';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { NavComponent } from './nav/nav.component';
import { ProductComponent } from './product/product.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { OwlModule } from 'ng2-owl-carousel';
import { FormsModule }   from '@angular/forms';
import { ReCaptchaModule } from 'angular2-recaptcha';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    NewproductComponent,
    NavComponent,
    ProductComponent,
    ProductpageComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouter,
    OwlModule,
    ReCaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
