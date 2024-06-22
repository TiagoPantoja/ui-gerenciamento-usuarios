import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departamento } from '../models/Departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiUrl = 'http://localhost:8080/api/departamentos';

  constructor(private http: HttpClient) {}

  getDepartments(): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(this.apiUrl);
  }

  getDepartment(id: number): Observable<Departamento> {
    return this.http.get<Departamento>(`${this.apiUrl}/${id}`);
  }

  createDepartment(department: Departamento): Observable<Departamento> {
    return this.http.post<Departamento>(this.apiUrl, department);
  }

  updateDepartment(department: Departamento): Observable<Departamento> {
    return this.http.put<Departamento>(`${this.apiUrl}/${department.id}`, department);
  }

  deleteDepartment(id: number): Observable<Departamento> {
    return this.http.delete<Departamento>(`${this.apiUrl}/${id}`);
  }
}
