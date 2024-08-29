import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EditApiService } from './editapi.service'; 

@Component({
  selector: 'emp-edit-root',
  templateUrl: './emp-edit.component.html'
})
export class EmpEditComponent implements OnInit {
  employees: any[] = [];
  editForm: FormGroup;
  isEditing: boolean = false;
  currentEmployee: any;

  constructor(
    private fb: FormBuilder,
    private editApi: EditApiService // Inject the service
  ) {
    this.editForm = this.fb.group({
      name: ['']
    });
  }

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.editApi.getEmployees().subscribe((data:any) => {
      this.employees = data;
    });
  }

  editEmployee(employee: any) {
    this.isEditing = true;
    this.currentEmployee = employee;
    this.editForm.patchValue(employee);
  }

  saveEmployee() {
    if (this.editForm.valid) {
      this.editApi.updateEmployee(this.currentEmployee.id, this.editForm.value)
        .subscribe(() => {
          this.loadEmployees();  
          this.isEditing = false;
          this.currentEmployee = null;
        });
    }
  }

  cancelEdit() {
    this.isEditing = false;
    this.currentEmployee = null;
  }
}
