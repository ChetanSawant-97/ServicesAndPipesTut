import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PatientDetailsService {
  private url = 'http://localhost:8080/getPatientList'

  constructor(private httpClient : HttpClient  ) { }

  getPatientList(){
    return this.httpClient.get(this.url);
  }
}
