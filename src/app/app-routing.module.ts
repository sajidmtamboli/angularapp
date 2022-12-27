import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { ProducTvComponent } from './product/produc-tv/produc-tv.component';
import { ProductWashingComponent } from './product/product-washing/product-washing.component';
import { ProductComponent } from './product/product.component';
import { ProductlaptopComponent } from './product/productlaptop/productlaptop.component';


const routes: Routes = [
  { path : '', redirectTo : 'login', pathMatch: 'full'},
  { path : 'login', component: LoginComponent},
  { path:'aboutUs', component: AboutusComponent} ,// localhost://4200/aboutus
  { path:'product', 
                children : [
  { path : '', component : ProductComponent},
  { path : 'laptop', component : ProductlaptopComponent},
  { path : 'tv', component : ProducTvComponent},
  { path : 'washingmachine', component : ProductWashingComponent},
  ]}, // localhost://4200/product
  
  { path:'contactUs', component: ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
