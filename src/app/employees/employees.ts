import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-employees',
  styleUrl: './employees.css',
  templateUrl: './employees.html',
})
export class Employees {

  private route = inject(ActivatedRoute);

  employeeId = this.route.snapshot.paramMap.get('id')
}
