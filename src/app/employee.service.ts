import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees = [
    { id: 1, name: 'Mithun', position: 'Developer' },
    { id: 2, name: 'Sachin', position: 'Designer' },
    { id: 3, name: 'Nila', position: 'Manager' },
    { id: 4, name: 'Nandu', position: 'Tester' },
    { id: 5, name: 'Ananya', position: 'Analyst' }
  ];

  constructor() {}

  getEmployees() {
    return this.employees;
  }
}
