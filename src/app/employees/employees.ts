import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-employees',
  styleUrl: './employees.css',
  templateUrl: './employees.html',
})
export class Employees {

  private route = inject(ActivatedRoute);

  employeeId = this.route.snapshot.paramMap.get('id')
}
