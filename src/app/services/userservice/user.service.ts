import { Injectable } from '@angular/core';
import { HttpService} from '../httpservice/http.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpService) { }

  registration(data: any){
    console.log("data in user service",data);
    return this.http.post('bookstore_user/registration',data);
  }
  
  login(data:any){
    console.log("data in user service",data);
    return this.http.post('bookstore_user/login',data);
  }
}