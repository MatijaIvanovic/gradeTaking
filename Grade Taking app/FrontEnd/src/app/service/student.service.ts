import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient:HttpClient) { }

  getData(){
    return this.httpClient.get(environment.apiUrl+'/students');
  }

  insertData(data: any){
    return this.httpClient.post(environment.apiUrl+'/student/add', data);
  }
  getDataById(id:any){
    return this.httpClient.get(environment.apiUrl+'/student/'+id);
  }
  updateData(id:any, data:any){
    return this.httpClient.put(environment.apiUrl+'/student/edit/'+id, data);
  }
  deleteData(id:any){
    return this.httpClient.delete(environment.apiUrl+'/student/delete/'+id);
  }
}
