import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data: Employee[] = [];
  columns: string[] = ['first_name', 'last_name', 'email', 'gender', 'salary', 'actions'];

  constructor(private service: EmployeeService) { }

  ngOnInit(): void {
    this.service.list().subscribe((employees) => {
      this.data = employees;
      console.log(this.data);
      console.log(employees)
    });
  }

  remove(_id: string): void {
      this.service.remove(_id).subscribe(() => {
        this.data = this.data.filter((employee) => employee._id !== _id);
      }
    );
  }
}
