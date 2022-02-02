import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from 'src/app/models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http: HttpClient) { }

  addStudent(student: Student) { }

  getStudentDetails(id: number) { }

  getAllStudentsDetails() { }

  updateStudentDetails(id: number, student: Student) { }

  removeStudent(id: number) { }
}
