// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {

//   private apiUrl = 'https://dummy.restapiexample.com/api/v1/create';

//   constructor(private http: HttpClient) { }

//   createData(data: any): Observable<any> {
//     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
//     return this.http.post(this.apiUrl, data, { headers });
//   }
// }

 


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UpdateApi {
  private apiUrl = 'http://174.138.187.142:8016/api/DbConnection/SaveEmployeeAdditionalInfo';  

  constructor(private http: HttpClient ) {}

  // updateFields(data: { field1: string }): Observable<any> {
  //   return this.http.post<any>(this.apiUrl, data);
  // }

  // updateFields(data: any): Observable<any> {
  //   return this.http.post<string>(this.apiUrl, data);
  // }

  updateFields(employee: any, options: any) {
    return this.http.post(this.apiUrl, employee, options);
  }
}
