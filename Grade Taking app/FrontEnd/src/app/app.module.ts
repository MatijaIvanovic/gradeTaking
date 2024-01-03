import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student/student.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { AddStudentComponent } from './student/add-student/add-student.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditStudentComponent } from './edit-student/edit-student.component';
const appRoutes:Routes = [
{
  path: '', component:StudentComponent
},
{
  path: 'add-student', component:AddStudentComponent
},
{
  path:'edit/:id', component:EditStudentComponent
}

]
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    NavbarComponent,
    AddStudentComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
