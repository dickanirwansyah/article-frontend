import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AppUserService {

  url = environment.apiUrl

  constructor(private httpClient:HttpClient) { }

  login(data:any){
    return this.httpClient.post(this.url+"/appuser/login", data,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

  addNewAppUser(data:any){
    return this.httpClient.post(this.url+"/appuser/addNewAppUser", data,{
      headers: new HttpHeaders().set('Content-Type','application/json')
    });
  }

  updateNewAppUser(data:any){
    return this.httpClient.post(this.url+"/appuser/updateUser", data,{
      headers: new HttpHeaders().set('Content-Type','application/json')
    });
  }

  updateUserStatus(data:any){
    return this.httpClient.post(this.url+"/appuser/updateUserStatus",data,{
      headers: new HttpHeaders().set('Content-Type','application/json')
    });
  }

  getAllAppUser(){
    return this.httpClient.get(this.url+"/appuser/getAllAppuser",{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

}
