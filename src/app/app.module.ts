import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchPipe } from './emp-details/search.pipe';
import { SortPipe } from './emp-details/sort.pipe';
import { RouterModule,Routes } from '@angular/router';
// import { AddfieldComponent } from './addfield/addfield.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmpUpdateComponent } from './emp-update/emp-update.component';
import { EmpEditComponent } from './emp-edit/emp-edit.component';
import { EmployeeService } from './emp-details/employee.service';
import { EditApiService } from './emp-edit/editapi.service'; 
import { CustomDatePipe } from './emp-details/custom-date.pipe'; // Import the pipe




@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    SortPipe,
    EmpDetailsComponent,
    EmpUpdateComponent,
    EmpEditComponent,
    CustomDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule
  ],

  providers: [EmployeeService,EditApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

