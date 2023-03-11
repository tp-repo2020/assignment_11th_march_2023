import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/services/job.service';
interface Job {
  experience_required?: boolean,
  id?:number | string,
  job_close_date?:string,
  job_notes?:string,
  job_number?:string,
  job_start_date?:string,
  job_title?:string,
  number_of_openings?:number
};
@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent {
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
  constructor(private fb:FormBuilder, private jobService:JobService, private router:Router, private title:Title,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.title.setTitle('Update/Edit Job');
    this.route.params.subscribe((param)=>{
      if(param['id']){
        this.jobService.fetchJobById(param['id']).subscribe((res:any)=>{
          this.prefillForm(res);
        })
      }else{
        this.router.navigate(['/jobs']);
      }
    })
  }

  prefillForm(res:any){
    this.createJob.patchValue({
      id:res.id,
      job_number:res.job_number,
      job_title:res.job_title,
      job_start_date:res.job_start_date,
      job_close_date:res.job_close_date,
      experience_required:res.experience_required,
      number_of_openings:res.number_of_openings,
      job_notes:res.job_notes,
    })
  }

  updateJobForm(){
    if(!this.createJob.invalid){
      let id = this.createJob.value.id;
      this.jobService.updateJob(this.createJob.value,id).subscribe((res)=>{
        if(res){
          this.router.navigate(['/jobs']);
          this.title.setTitle('All Jobs');
          alert('Updated successfully');
        }
      },(error)=>{
        alert('Something went wrong')
      })
    }
   
  }
}
