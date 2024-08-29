import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Employee {
  employeE_ID: number;
  employeE_NUMBER: number;
  officiaL_EMAIL: string;
  firsT_NAME	:string;
  middlE_NAME :string;
  lasT_NAME:string;
  gender: string;
  dob: Date;
  maritaL_STATUS: string;
  paN_NO: string;
  personaL_EMAIL:string;
  depT_ID:number;
  companY_ID:number;
  divisioN_ID:number;
}

// export class Product{
//   productId:number;
//   productName:string;
//   price:number;
//   productCategory:String;

//   constructor(productId: number,productName: string,price: number,productCategory:String) {
//     this.productId = productId;
//     this.productName = productName;
//     this.price = price;
//     this.productCategory = productCategory;


export interface Respom {
  data : Employee[];
  message : string;
  status : string;
}

  @Injectable({
  providedIn: 'root'
  })

  export class EmployeeService {

  private apiUrl = 'http://174.138.187.142:8016/api/DbConnection/GetEmployeeList'
  // private apiUrl = 'https://freetestapi.com/api/v1/students';
  private apiUrl1 = 'http://174.138.187.142:8016/api/DbConnection/GetEmployeeById?id='
  // private apiUrl1 = 'https://freetestapi.com/api/v1/students/'

  private selectedEmployee: Employee | null = null;

  constructor(private http: HttpClient) { }


  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  getEmployeeById(empId:number): Observable<Employee> {
    return this.http.get<Employee>(this.apiUrl1+empId);
  }

  setSelectedEmployee(employee: Employee): void {
    this.selectedEmployee = employee;
  }

  getSelectedEmployee(): Employee | null {
    return this.selectedEmployee;
  }

  // getEmployeeById(id:any): Observable<Employee> {
  //   console.log("id = "+id);
  //   console.log(this.apiUrl1+id);
  //   return this.http.get<Employee>(this.apiUrl1+id);
  // }

}
