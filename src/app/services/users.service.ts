import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  api: string = '../../assets/data.json'
  constructor(private http: HttpClient) { }

  getUsers():Observable<any>{
    return this.http.get(this.api)
  }
}
