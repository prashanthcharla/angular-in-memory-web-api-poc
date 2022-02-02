import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { COLLEGE_DATA } from 'src/app/common/helpers/college.data';
import { LECTURER_DATA } from 'src/app/common/helpers/lecturer.data';
import { STREAM_DATA } from 'src/app/common/helpers/stream.data';
import { STUDENT_DATA } from 'src/app/common/helpers/student.data';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    return { 
      stream: STREAM_DATA, 
      student: STUDENT_DATA, 
      lecturer: LECTURER_DATA, 
      college: COLLEGE_DATA 
    };
  }
}
