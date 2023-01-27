import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'work',component:WorkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
