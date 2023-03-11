import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import { Title } from '@angular/platform-browser';
interface Job {
  experience_required?: boolean,
  id?:number,
  job_close_date?:string,
  job_notes?:string,
  job_number?:string,
  job_start_date?:string,
  job_title?:string,
  number_of_openings?:number
};
@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})

export class JobDetailsComponent implements OnInit {
  jobDetails:Job = {};
  constructor(private jobService:JobService, private route:ActivatedRoute, private router:Router, private title:Title){}

  ngOnInit(): void {
    this.route.params.subscribe((param)=>{
      if(param['id']){
        this.title.setTitle('Job Detail');
        this.jobService.fetchJobById(param['id']).subscribe((res)=>{
          this.jobDetails = res;
        })
      }else{
        this.router.navigate(['/jobs']);
      }
    })
  }
}
