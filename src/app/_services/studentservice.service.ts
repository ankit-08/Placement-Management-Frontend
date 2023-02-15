import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Placedstudent } from '../_models/placedstudent';

import { Studentdetails } from '../_models/studentdetails';
import { Incomingcompany } from '../_models/incomingcompany';
import { Appliedcompany } from '../_models/appliedcompany';


@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {
  stdobj :Studentdetails
  constructor(public http:HttpClient) { }
  AddStudentRecord(stdobj:any){
    return this.http.post('http://localhost:8082/AddStudentRecord',stdobj);
  }

  StudentLogin(stdobj:any){
    return this.http.post('http://localhost:8082/StudentLoginCheck',stdobj);
  }

  viewincomingcompany(){}
  applycompany(){}
  viewplacedstudent(){}
}
