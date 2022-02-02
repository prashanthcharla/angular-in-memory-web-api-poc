import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { College } from 'src/app/models/college';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {

  constructor(private _http: HttpClient) { }

  addCollege(college: College) { }

  updateCollegeDetails(id: number, college: College) { }

  removeCollege(id: number) { }

  getCollegeDetails(id: number) { }

  getAllCollegesDetails() { }
}
