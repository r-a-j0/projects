import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './pages/registration/registration.component';
import { AllListComponent } from './pages/all-list/all-list.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SuccesspageComponent } from './pages/successpage/successpage.component';
import { AboutComponent } from './pages/about/about.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  { 
    path: 'registration', 
    component: RegistrationComponent 
  },
  { 
    path: 'about', 
    component: AboutComponent 
  },
  {
    path: '*',
    redirectTo:'registration',
    pathMatch:'full'
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'list',
    component: AllListComponent
  },
  {
    path: 'success',
    component: SuccesspageComponent
  },
  {
    path: '',
    component: HomepageComponent
  },
  { 
    path: '', 
    component: AllListComponent 
  },
  { 
    path: 'register', 
    component: RegistrationComponent 
  },
  { path: 'edit/:id',
    component: EditComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
