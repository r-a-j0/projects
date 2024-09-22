import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { AllListComponent } from './pages/all-list/all-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SuccesspageComponent } from './pages/successpage/successpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AboutComponent } from './pages/about/about.component';
import { EditComponent } from './edit/edit.component'; 



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AllListComponent,
    HomepageComponent,
    SuccesspageComponent,
    AboutComponent,
    EditComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
