import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from '../../services/department.service';
import { Departamento } from '../../models/Departamento';

@Component({
  selector: 'app-department-form',
  templateUrl: '../html/department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {
  department: Departamento = {id: 0, name: ''};

  constructor(
    private departmentService: DepartmentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const departmentId = this.route.snapshot.paramMap.get('id');
    if (departmentId) {
      this.departmentService.getDepartment(parseInt(departmentId)).subscribe(department => {
        this.department = department;
      });
    }
  }

  saveDepartment(): void {
    if (this.department.id === 0) {
      this.departmentService.createDepartment(this.department).subscribe(() => {
        this.router.navigate(['/departments']);
      });
    } else {
      this.departmentService.updateDepartment(this.department).subscribe(() => {
        this.router.navigate(['/departments']);
      });
    }
  }
}
