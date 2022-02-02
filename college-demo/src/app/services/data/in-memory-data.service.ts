import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { College } from 'src/app/models/college';
import { Lecturer } from 'src/app/models/lecturer';
import { Stream } from 'src/app/models/stream';
import { Student } from 'src/app/models/student';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    let stream: Array<Stream> = [
      {
        id: 1,
        name: "Electronics & Communications",
        noOfYears: 4
      },
      {
        id: 2,
        name: "Computer Science",
        noOfYears: 4
      },
      {
        id: 3,
        name: "Information Technology",
        noOfYears: 4
      },
      {
        id: 4,
        name: "Mechanical",
        noOfYears: 4
      },
      {
        id: 5,
        name: "Electronics & Electrical",
        noOfYears: 4
      },
      {
        id: 6,
        name: "Civil Engineering",
        noOfYears: 4
      },
    ];

    let student: Array<Student> = [
      {
        id: 1,
        collegeId: 1,
        firstName: "Prashanth",
        lastName: "Charla",
        streamId: 1,
        currStreamYear: 2
      },
      {
        id: 2,
        collegeId: 1,
        firstName: "Vikas",
        lastName: "Krishnamurthy",
        streamId: 2,
        currStreamYear: 4
      },
      {
        id: 3,
        collegeId: 1,
        firstName: "Raj",
        lastName: "Kumar",
        streamId: 4,
        currStreamYear: 2
      },
      {
        id: 4,
        collegeId: 1,
        firstName: "Sajan",
        lastName: "Kumar",
        streamId: 2,
        currStreamYear: 4
      },
      {
        id: 5,
        collegeId: 1,
        firstName: "Yashwanth",
        lastName: "Paindla",
        streamId: 1,
        currStreamYear: 3
      },
      {
        id: 6,
        collegeId: 1,
        firstName: "Vishal",
        lastName: "Palle",
        streamId: 3,
        currStreamYear: 1
      },
      {
        id: 7,
        collegeId: 1,
        firstName: "Sai Krishna",
        lastName: "Mudigonda",
        streamId: 1,
        currStreamYear: 2
      },
      {
        id: 8,
        collegeId: 1,
        firstName: "Nikhil",
        lastName: "Reddy",
        streamId: 3,
        currStreamYear: 3
      },
      {
        id: 9,
        collegeId: 1,
        firstName: "Sharath",
        lastName: "Reddy",
        streamId: 3,
        currStreamYear: 1
      },
      {
        id: 10,
        collegeId: 1,
        firstName: "Girish",
        lastName: "Golla",
        streamId: 6,
        currStreamYear: 4
      },
    ];

    let lecturer: Array<Lecturer> = [
      {
        id: 1,
        streamId: 1,
        firstName: "Pavan Kumar",
        lastName: "Erraboina"
      },
      {
        id: 2,
        streamId: 2,
        firstName: "Akhilesh",
        lastName: "Yadav"
      },
      {
        id: 3,
        streamId: 3,
        firstName: "Satish",
        lastName: "Reddy"
      },
      {
        id: 4,
        streamId: 4,
        firstName: "Ashok",
        lastName: "Reddy"
      },
      {
        id: 5,
        streamId: 5,
        firstName: "Madhu Priya",
        lastName: "Putti"
      },
      {
        id: 6,
        streamId: 6,
        firstName: "Sowjanya",
        lastName: "Reddy"
      },
    ];

    let college: Array<College> = [
      {
        id: 1,
        location: "Warangal, Telangana",
        name: "Kakatiya Institute of Technology & Science",
        principalId: 1
      },
      {
        id: 2,
        location: "Banglore, Karnataka",
        name: "Indian Institue of Management",
        principalId: 1
      },
    ];

    return { stream, student, lecturer, college };
  }
}
