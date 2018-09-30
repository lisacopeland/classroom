import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Observable } from 'rxjs';
import { Student, StudentId } from '../models/student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {
  students: Observable<StudentId[]>;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.students = this.studentService.getStudents();

  }

}
