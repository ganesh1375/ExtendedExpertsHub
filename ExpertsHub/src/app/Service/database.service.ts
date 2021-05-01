import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:5500/api'

  enroll(data) {
    console.log(data);
    return this.http.post(`${this.baseUrl}/enroll`, data)
  }
  get(){
    return this.http.get(`${this.baseUrl}/get`);
  }
}
