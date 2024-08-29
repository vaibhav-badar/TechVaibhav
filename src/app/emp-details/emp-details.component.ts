import { Component,OnInit } from '@angular/core';
import { EmployeeService, Employee,  } from './employee.service';
import { Router } from '@angular/router';
// import { EmpUpdateComponent } from './emp-update/emp-update.component';
// import {ActivatedRoute, RouterModule} from '@angular/router';

@Component({
  selector: 'emp-details-root',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})

 export class EmpDetailsComponent implements OnInit {
  title = 'Employee Form';
  employees: Employee[] = [];
  searchQuery: string = '';
  sortField: string = '';
  ascending: boolean = true;
  employee:Employee | undefined;
  id: number =0;
  isFirst:boolean=true;
  // productList:Product[] = [
  //   new Product(1,"Product 1",100,"ABC"),
  //   new Product(2,"Product 2",1200,"ABC"),
  //   new Product(3,"Product 3",8900,"ABC"),
  //   new Product(4,"Product 4",100,"XYZ"),
  //   new Product(5,"Product 5",500,"XYZ"),
  // ];
  // sum:number=0;
  // productListABC:Product[] = [];
  // productListXYZ:Product[] = [];
  // isABC:boolean = false;
  //   isXYZ:boolean = false;
    constructor(private employeeService: EmployeeService,private router:Router) { } 

    // fetchEmployees():void{
      ngOnInit(): void {

        // for(var i=0;i<this.productList.length;i++){
        //   this.sum = this.sum + this.productList[i].price;
        // }

      this.employeeService.getEmployees().subscribe(
        (data) => {
          this.employees = data;
          console.log(data);
          console.log(this.employees);
        },
        (error) => { 
          console.error('Error fetching employee data', error);
        }
      );  
    }

    sort(field: string) {
      if (this.sortField === field) {
        this.ascending = !this.ascending;
      } else {
        this.sortField = field;
        this.ascending = true;
      }
    }

    // filteredEmployees() {
    //   return this.employees.filter(employee => {
    //     return (
    //       employee.employeE_ID.toString().includes(this.searchQuery) || 
  //       // employee.employeE_NUMBER.includes(this.searchQuery) ||      
  //       employee.officiaL_EMAIL.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
  //       employee.gender.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
  //       new Date(employee.dob).toLocaleDateString().includes(this.searchQuery) 
  //     );
  //   });
  // }

  // getEmplyeebyId(empId:number){
  //   this.employeeService.getEmployeeById(empId).subscribe(
  //     (data) => {
  //       this.employees = data;
  //       console.log(data);
  //       console.log(this.employees);
  //     },
  //     (error) => { 
  //       console.error('Error fetching employee data', error);
  //     }
  //   ); 
  // }  

  getEmplyeebyId(empId:number){
    this.isFirst=false;
    console.log(empId);
    this.id=empId;
  }


  // this.router.navigate(['/emp-update'], { 
  //   state: { middlE_NAME: this.employee.middlE_NAME } 
  // });

  // onedit(productId:number,productName:String,price:number,productCategory:String){
  //   alert("Product Id = " + productId + ' ' + "Product Name " + productName + ' ' + "Product Price " + price  + ' ' + "Product Category" + productCategory)
  // }

  // getAcategory() {
    
  //   for(var i=0;i<this.productList.length;i++ ){
  //     if(this.productList[i].productCategory=='ABC'){
  //       this.productListABC.push(this.productList[i])
  //     }
  //   }

  //   if(this.productListABC.length>0){
  //     this.isABC = true;
  //   }
  //   else{
  //     alert("No abc category product found")
  //   }
  // }

  // getXcategory(){

  //   for(var i=0;i<this.productList.length;i++){
  //     if(this.productList[i].productCategory=='XYZ'){
  //       this.productListXYZ.push(this.productList[i])
  //     }
  //   }
  //   if(this.productListABC.length>0){
  //       this.isXYZ=true;
  //   }
  // }
}





// getXcategory(product.productCategory){

// }
