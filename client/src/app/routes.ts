import { NgModule ,ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { LoginComponent } from './login/login.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';

export const routes:Routes=[
    { path: '', redirectTo:'index', pathMatch:'full' },
    {path:'index', component:ProductpageComponent,data:{title:'some data'}},
    {path:'new', component:NewproductComponent},
    {path:'register', component:RegisterComponent},
    {path:'about', component:AboutComponent}
];

export const AppRouter: ModuleWithProviders = RouterModule.forRoot(routes)