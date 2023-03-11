import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllJobsComponent } from './jobs/all-jobs/all-jobs.component';
import { CreateJobComponent } from './jobs/create-job/create-job.component';
import { EditJobComponent } from './jobs/edit-job/edit-job.component';
import { JobDetailsComponent } from './jobs/job-details/job-details.component';

const routes: Routes = [
  {path:'', pathMatch:'full', component:AllJobsComponent},
  {path:'jobs', component:AllJobsComponent},
  {path:'jobs/new', component:CreateJobComponent},
  {path:'job/:id', component:EditJobComponent},
  {path:'job-detail/:id', component:JobDetailsComponent},
  {path:'**', redirectTo:'/jobs'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
