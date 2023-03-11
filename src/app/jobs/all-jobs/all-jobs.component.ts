import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-all-jobs',
  templateUrl: './all-jobs.component.html',
  styleUrls: ['./all-jobs.component.css']
})
export class AllJobsComponent implements OnInit{
  jobs:any = [];
  constructor(private http:HttpClient, private jobService:JobService, private title:Title){}
  
  ngOnInit(): void {
   this.fetchAllJobs();
  }

  fetchAllJobs(){
    this.jobService.fetchAllJob().subscribe((res)=>{
      if(res){
        this.jobs = res;
        this.title.setTitle('All Jobs');
      }
     })
  }

  deleteJob(jobId:string | number){
    this.jobService.deleteJobById(jobId).subscribe((res)=>{
      alert('Deleted successfully !');
      this.fetchAllJobs();
    },(error)=>{
      alert('Something Went Wrong');
    });
  }
}
