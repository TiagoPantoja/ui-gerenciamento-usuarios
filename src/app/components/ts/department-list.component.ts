import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../services/department.service';
import { Departamento } from '../../models/Departamento';

@Component({
  selector: 'app-department-list',
  templateUrl: '../html/department-list.component.html',
  styleUrls: ['../css/department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  departments: Departamento[] = [];

  constructor(private departmentService: DepartmentService) {
  }

  ngOnInit() {
    this.departmentService.getDepartments().subscribe((data: Departamento[]) => {
      this.departments = data;
    });
  }

  deleteDepartment(id: number) {
    this.departmentService.deleteDepartment(id).subscribe(() => {
      this.departments = this.departments.filter(department => department.id !== id);
    });
  }
}

