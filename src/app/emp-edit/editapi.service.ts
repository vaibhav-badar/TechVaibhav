import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditApiService {
  private apiUrl = 'https://api.example.com/employees'; // Update with your actual API URL

  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get(this.apiUrl);
  }

  updateEmployee(id: number, employee: any) {
    return this.http.put(`${this.apiUrl}/${id}`, employee);
  }
}
