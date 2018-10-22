import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../services/student.service';
import { Observable } from 'rxjs';
import { StudentId, Student } from '../models/student.model';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.page.html',
  styleUrls: ['./student-detail.page.scss'],
})
export class StudentDetailPage implements OnInit {
  id = '';
  students: Observable<Student[]>;

  constructor(private route: ActivatedRoute,
              private studentService: StudentService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('id is ' + this.id);
    this.students = this.studentService.getStudentById(this.id);
    this.students.subscribe((students: Student[]) => {
      console.log(students);
    });

  }
}
