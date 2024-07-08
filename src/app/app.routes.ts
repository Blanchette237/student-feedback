import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubjectFormComponent } from './subjects/subject-form/subject-form.component';


export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'subjects/subject-form', component: SubjectFormComponent }
];

