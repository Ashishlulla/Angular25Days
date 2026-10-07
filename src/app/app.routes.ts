import { Routes } from '@angular/router';
import { Employees } from './employees/employees';
import { Home } from './home/home';
import { About } from './about/about';
import { NotFound } from './not-found/not-found';
import { Contact } from './contact/contact';
import { EmployeeForm } from './employee-form/employee-form';

export const routes: Routes = 
[
    {path:'employees', component:Employees},
    {path:'employees/:id', component:Employees},
    {path:'', component:Home},
    {path:'about', component:About},
    {path:'contact', component:Contact},
    {path:'add-employee', component:EmployeeForm},
    {path:'**', component:NotFound},
    
];
