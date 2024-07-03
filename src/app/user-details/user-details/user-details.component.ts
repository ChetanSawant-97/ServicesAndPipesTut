import { Component } from '@angular/core';
import { PatientDetailsService } from '../services/patient-details.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  userName = "";
  patientList : any;

  constructor(private service:PatientDetailsService ){}

  setName(data:string){
    this.userName = data;
  }

  ngOnInit(){
    this.service.getPatientList().subscribe(
      response =>{
        console.log(response);
        this.patientList = response;
      }
    )
  }



}
