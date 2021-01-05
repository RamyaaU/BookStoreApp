import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent} from './components/register/register.component'
import { LoginComponent} from './components/login/login.component'
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetbooksComponent} from './components/getbooks/getbooks.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { MycartComponent } from './components/mycart/mycart.component';
import { OrderComponent} from './components/order/order.component'
const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'dashboard',component:DashboardComponent,
  children:[
    {path:'',component:GetbooksComponent},
    {path:'cart',component:MycartComponent},
    {path:'order',component:OrderComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
