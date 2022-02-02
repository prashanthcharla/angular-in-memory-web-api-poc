import { Component, OnInit } from '@angular/core';
import { Stream } from './models/stream';
import { CollegeService } from './services/functional/college.service';
import { LecturerService } from './services/functional/lecturer.service';
import { StreamService } from './services/functional/stream.service';
import { StudentService } from './services/functional/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'college-demo';
  stream: Stream;

  constructor(private streamService: StreamService,
    private lecturerServive: LecturerService,
    private studentService: StudentService,
    private collegeService: CollegeService) {}

  ngOnInit(): void {
    this.streamService.getAllStreamsDetails();
    this.lecturerServive.getAllLecturerDetails();
    this.studentService.getAllStudentsDetails();
    this.collegeService.getAllCollegesDetails();
  }
}
