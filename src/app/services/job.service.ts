import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http:HttpClient) { }

  createNewJob(data:any){
    return this.http.post('http://localhost:3000/jobs',data)
  }

  updateJob(data:any,id:any){
   return this.http.put('http://localhost:3000/jobs/'+ +id, data)
  }

  fetchAllJob(){
    return this.http.get('http://localhost:3000/jobs')
  }

  fetchJobById(id:number | string){
   return this.http.get('http://localhost:3000/jobs/' + id);
  }

  deleteJobById(jobId:string | number){
    return this.http.delete('http://localhost:3000/jobs/' + jobId)
  }
}
