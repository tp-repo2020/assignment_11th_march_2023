import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit{

  formModel = {
    "id": 1,
    "job_number": "411-AKJ",
    "job_title": "Software Developer",
    "job_start_date": "2022-12-12",
    "job_close_date": "2023-12-12",
    "experience_required": true,
    "number_of_openings": 1,
    "job_notes": "Frontend Developer(Angular)"
  }
 createJob = this.fb.group({
  id:['',[Validators.required]],
  job_number:['',[Validators.required]],
  job_title:['',[Validators.required]],
  job_start_date:['',[Validators.required]],
  job_close_date:['',[Validators.required]],
  experience_required:[true,[Validators.required]],
  number_of_openings:[5,[Validators.required]],
  job_notes:['',[Validators.required]],
  });
  constructor(private fb:FormBuilder, private jobService:JobService, private router:Router, private titleService:Title){}

  ngOnInit(): void {
    this.titleService.setTitle('Create new Job');
  }

  createJobForm(){
    if(!this.createJob.invalid){
      this.jobService.createNewJob(this.createJob.value).subscribe((res)=>{
        if(res){
          this.router.navigate(['/jobs']);
          this.titleService.setTitle('All Jobs')
        }
      },(error)=>{
        alert('Duplicate Job ID')
      })
    }
   
  }
}
