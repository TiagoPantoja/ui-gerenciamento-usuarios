import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from '../../services/user.service';
import { DepartmentService } from "../../services/department.service";
import { Usuario } from '../../models/Usuario';
import { Departamento } from '../../models/Departamento';

@Component({
  selector: 'app-user-form',
  templateUrl: '../html/user-form.component.html',
  styleUrls: ['../css/user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: Usuario = {id: 0, name: '', email: '', departamentoId: 0};
  departments: Departamento[] = [];

  constructor(
    private userService: UserService,
    private departmentService: DepartmentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe(departments => {
      this.departments = departments;
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userService.getUser(Number(id)).subscribe(user => {
        this.user = user;
      });
    }
  }

  saveUser() {
    if (this.user.id === 0) {
      this.userService.createUser(this.user).subscribe(() => {
        this.router.navigate(['/users']);
      });
    } else {
      this.userService.updateUser(this.user).subscribe(() => {
        this.router.navigate(['/users']);
      });
    }
  }
}
