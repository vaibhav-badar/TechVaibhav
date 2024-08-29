// import { Component, OnInit, Input } from '@angular/core';

// @Component({
//   selector: 'app-emp-update',
//   templateUrl: './emp-update.component.html',
//   styleUrls: ['./emp-update.component.css']
// })
// export class EmpUpdateComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }





// import { Component } from '@angular/core';
// import { ApiService } from './api.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

// export class AppComponent {
//   title = 'sample-apithree';
  

//   submittedData: any[] = []; 
  
//   constructor(private apiService: ApiService) { }

//   submitData() {
//     const data = {
//       name: 'John Doe',
//       salary: '50000',
//       age: '30'
//     };
    
//     this.apiService.createData(data).subscribe(
//       response => { 
//         console.log('Data submitted successfully:', response);
//         this.submittedData.push(response.data);
//       },
//       error => {
//         console.error('Error submitting data:', error);
//       }
//     );
//   }
// }

// import { Component,Input } from '@angular/core';
// import { UpdateApi } from './updateapi.service';  

// @Component({
//   selector: 'emp-update-root',
//   templateUrl: './emp-update.component.html',  
//   styleUrls: ['./emp-update.component.css']  
// })
// export class EmpUpdateComponent {

//   @Input() middlE_NAME: string = '';

//   formGroupExampleInput: string = '';
  
//   // formGroupExampleInput2: string = '';

//   constructor(private updateApi: UpdateApi) {}

//   ngOnInit() {
//     // Initialize the form input with the middle name
//     this.formGroupExampleInput = this.middlE_NAME;
//   }

//   onSubmit() {
//     const data = {
//       field1: this.formGroupExampleInput
//       // field2: this.formGroupExampleInput2
//     };
//     console.log(this.formGroupExampleInput)
//     this.updateApi.updateFields(data).subscribe(response => {
     
//       console.log('Fields updated successfully:', response);
//     }, error => {
   
//       console.error('Error updating fields:', error);
//     });
//   }
// }



import { Component, Input } from '@angular/core';
import { UpdateApi } from './updateapi.service';
import { Router } from '@angular/router';
import { Employee, EmployeeService } from '../emp-details/employee.service';
import {DatePipe} from '@angular/common';
// // import { EmployeeService } from './employee.service'; 
// import { formatDate } from '@angular/common';


@Component({
  selector: 'emp-update-root',
  templateUrl: './emp-update.component.html',
  styleUrls: ['./emp-update.component.css'],
  providers:[EmployeeService]
})
export class EmpUpdateComponent {
 
   @Input() item:any;

  employee:Employee | undefined;
  middleName: string = '';
  firstName: string ='';
  lastName: string ='';
  officialEmail:string='';
  personalEmail:string='';
  maritalStatus:string='';
  panNumber : string ='';
  genDER:string='';
  empNumber : number = 0;
  empID: number | null = null;
  // empDate:Date ='';
  // empDate: string | undefined;
  empDate: any | null = null; 
  divisionId: number | null = null;
  companyId: number | null = null;
  departmentId: number | null = null;
  selectedFile: any;
  // selectedFile: File | null = null;
  // url: string | ArrayBuffer | null = null;
 
  //formGroupExampleInput: string = this.middleName;

  constructor(private updateApi: UpdateApi, private router: Router,private employeeService: EmployeeService) {
    // const navigation = this.router.getCurrentNavigation();
    // if (navigation?.extras.state) {
    //   this.formGroupExampleInput = navigation.extras.state['middleName'];
    // }
    
  }

  // ngOnInit() {
  //   this.formGroupExampleInput = this.middleName;
  // }
  ngOnInit(){
    this.employeeService.getEmployeeById(this.item).subscribe(
        (data) =>{
          this.employee = data;
          console.log(this.employee);
          this.middleName=this.employee.middlE_NAME;
          this.firstName=this.employee.firsT_NAME;
          this.lastName=this.employee.lasT_NAME;
          this.officialEmail=this.employee.officiaL_EMAIL;
          this.maritalStatus=this.employee.maritaL_STATUS;
          this.panNumber=this.employee.paN_NO;
          this.personalEmail=this.employee.personaL_EMAIL;
          this.genDER=this.employee.gender;
          this.empNumber=this.employee.employeE_NUMBER;
          this.empID=this.employee.employeE_ID;
          this.empDate=this.employee.dob.toString().split('T')[0];
          // const empdate = this. employee.dob
          // var datePipe = new DatePipe();
          // this.empDate = this.datePipe.transform(empdate, 'dd/MM/yyyy');


          // this.empDate=this.employee.dob;
          console.log(this.employee);
          this.divisionId=this.employee.divisioN_ID;
          this.companyId=this.employee.companY_ID;
          this.departmentId=this.employee.depT_ID;


          // if (this.item && this.item.dob) {
          //   this.empDate = this.item.dob; // Assign the DOB to empDate
          // }git
          //this.employeeService.setSelectedEmployee(this.employee);
          // this.router.navigateByUrl('/emp-update')
          // this.form-group.patchValue({
          //   mname=data.middlE_NAME;
          // })
          // this.router.navigate(['/emp-update'], { state: { middleName: this.employee.middlE_NAME } });
          
        }
      )

      console.log(this.empDate);
  }

  url="";
   
//   onselectFile(e:any){

//     if(e.target.files){
//       var reader = new FileReader;
//       reader.readAsDataURL(e.target.files[0]);
//       reader.onload=(event:any)=>{
//         this.url=event.target.result;
//       }
//   }
// }

// url = 'https://www.gravatar.com/avatar/?d=mp&s=300';

// onselectFile(event: any) {
//   const input = event.target as HTMLInputElement;
//   if (input.files && input.files[0]) {
//     const file = input.files[0];
//     const reader = new FileReader();
//     reader.onload = (e: ProgressEvent<FileReader>) => {
//       this.url = e.target?.result as string;
//     };
//     reader.readAsDataURL(file);

//     console.log(file);
//   }
// }


onselectFile(event: any) {
  let debugFlag = false; // Initialize a flag to false

  console.log('File input clicked'); // Debug message to indicate method execution

  // Check if event and event.target are defined
  if (event && event.target && event.target.files) {
    console.log('Event and files detected:', event.target.files); // Debug message to verify event and files existence
    
    const file = event.target.files[0]; // Attempt to get the first file
    console.log('Selected file:', file); // Debug message to check the selected file

    if (file) {
      debugFlag = true; // Set the flag to true when a file is selected
      console.log('File selected, flag set to:', debugFlag); // Debug message to verify flag state

      this.selectedFile = file;
      console.log('File is set to selectedFile property'); // Debug message to confirm file assignment

      const reader = new FileReader();
      reader.onload = (e: any) => {
        console.log('File reading is completed, flag still true:', debugFlag); // Debug message to check flag after reading

        this.url = e.target.result;
        console.log('Image URL set:', this.url); // Debug message to verify URL assignment
      };
      reader.readAsDataURL(file);
      console.log('Started reading file'); // Debug message to confirm file reading initiation
    } else {
      debugFlag = false; // Set the flag to false when no file is selected
      console.warn('No file selected, flag set to:', debugFlag); // Warning message to show flag state when no file is selected
    }
  } else {
    console.warn('File input not detected or no files available'); // Additional warning if event or files are not available
  }
}





// onselectFile(e: any){
//   console.log(event);
// }

//   onselectFile(event: MouseEvent): void {
//   // Assert event.target as HTMLInputElement
//   const target = event.target as HTMLInputElement;

//   console.log(target);

//   if (target.files) {
//     const files: Blob[] = Array.from(target.files);
//     // Process the files
//     console.log(files);
//    }
//  }

  // get formattedEmpDate(): string {  
  //   return this.empDate ? formatDate(this.empDate, 'dd/MM/yyyy', 'en-US') : '';
  // }

  // set formattedEmpDate(value: string) {
  //   this.empDate = value ? new Date(value) : null;
  // }


    // const data = {
    //   field1: this.formGroupExampleInput
    // };
    // console.log(this.formGroupExampleInput);

    // const data = {
    //   field1: this.middleName
    // };
    // debugger;
   
    
  //   this.updateApi.updateFields(this.employee).subscribe(response => {
  //     if(response=='Success'){
  //     console.log('Fields updated successfully:', response);
  //     this.router.navigateByUrl('/emp-details');
  //     }else{
  //       alert("error")
  //     }
  //   }, );
  // }

  // Update the service method to specify the responseType as 'text'
onSubmit() {
this.employee!.middlE_NAME=this.middleName;
this.updateApi.updateFields(this.employee, { responseType: 'text' as 'json' }).subscribe(
  response => {
    if (response) {
      console.log('Fields updated successfully:', response);
      alert("Field Updated Successfully");
      console.log(response);
      this.router.navigateByUrl('/emp-details');
      // this.router.navigate(['/emp-details']);
    }
  },
  error => {
    console.error('Error updating fields:', error);
  }
);
}
}

// error => {
//   console.error('Error updating fields:', error);
// }
