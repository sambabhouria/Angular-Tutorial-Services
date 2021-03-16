import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  template: `
    <h2>Employee details</h2>
    <ul *ngFor= " let employee of employees">
     <li>{{employee.id}} - {{employee.name}} - {{employee.age}} - {{employee.retiredate}}</li>
    </ul>

  `,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  /*
    avoid diplicat data (not a good solution) DRY Dot not Reapeat Your self SRP 
    // Simple Responsabiliy Principale
  */

  // Beter way Service 1-> share dara responsability 2-> implementing appication logiq-3 External Interaction(database for exemple)
  // In agular service naming-convention is : 
  public employees = [
    {id: 1, name:"George", age:32, retiredate:"March 12, 2014"},
    {id: 2, name:"Edward", age:17, retiredate:"June 2, 2023"},
    {id: 3, name:"Christine", age:58, retiredate:"December 20, 2036"},
    {id: 4, name:"Sarah", age:62, retiredate:"April 30, 2020"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}