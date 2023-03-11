import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AllJobsComponent } from './jobs/all-jobs/all-jobs.component';
import { CreateJobComponent } from './jobs/create-job/create-job.component';
import { EditJobComponent } from './jobs/edit-job/edit-job.component';
import { JobDetailsComponent } from './jobs/job-details/job-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AllJobsComponent,
    CreateJobComponent,
    EditJobComponent,
    JobDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
