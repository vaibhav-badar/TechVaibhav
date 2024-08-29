import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmpUpdateComponent } from './emp-update/emp-update.component';
import { EmpEditComponent } from './emp-edit/emp-edit.component';

const routes: Routes = [
  { path: '', component: EmpDetailsComponent },
  { path: 'emp-edit', component: EmpEditComponent },
  { path: 'emp-update', component: EmpUpdateComponent },
  { path: 'emp-details', component: EmpDetailsComponent },
  // { path: '', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
