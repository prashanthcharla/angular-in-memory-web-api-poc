import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lecturer } from 'src/app/models/lecturer';

@Injectable({
  providedIn: 'root'
})
export class LecturerService {

  constructor(private _http: HttpClient) { }

  addLecturer(lecturer: Lecturer) { }

  updateLecturerDetails(id: number, lecturer: Lecturer) { }

  removeLecturer(id: number) { }

  getLecturerDetails(id: number) { }

  getAllLecturerDetails() { }
}
