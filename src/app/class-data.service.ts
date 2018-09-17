import { Injectable } from '@angular/core';
import { runInThisContext } from 'vm';

@Injectable({
  providedIn: 'root'
})
export class ClassDataService {

  students = [
    {
      'id': '1',
      'name': 'John Smith',
      'grade': 10 },
    {
      'id': '2',
      'name': 'Lisa Copeland',
      'grade': 11 },
    {
      'id': '3',
      'name': 'Tony Stark',
      'grade': 12 },
    {
      'id': '4',
      'name': 'Thor OdenSon',
      'grade': 10 },
    {
      'id': '5',
      'name': 'Matt Murdock',
      'grade': 11 },
    {
      'id': '6',
      'name': 'Kamala Kahn',
      'grade': 12 },
    {
      'id': '7',
      'name': 'Peter Parker',
      'grade': 11 },
  ];

  classes = [
    {
      'id': '1',
      'subject': 'math',
      'days': 'mon, tues',
      'students': ['1', '2', '5']
    },
    {
      'id': '2',
      'subject': 'english',
      'days': 'wed, fri',
      'students': ['3', '7', '1']
    }
  ];

  constructor() { }

  getClasses() {
    return this.classes.slice();
  }

  getClassRoster(classId) {
    const classIdx = this.classes.findIndex(x => classId === x.id);
    if (classIdx !== -1) {
      const currClass = this.classes[classIdx].students;
      const roster = [];
      for (const currStudentIdx of currClass) {
          const student = this.students.find(x => x.id === currStudentIdx);
          roster.push(student);
      }
      return roster;

    } else {
      return null;
    }
  }

  getClassbyId(classId) {
    return this.classes.find(x => classId === x.id);
  }

  addClass(newClass) {
    this.classes.push(newClass);
    return newClass;
  }

  updateClass(newClass) {
    const classIdx = this.classes.findIndex(x => newClass.id === x.id);
    if (classIdx !== -1) {
      this.classes[classIdx] = newClass;
      return newClass;
    } else {
      return null;
    }
  }

  deleteClass(classId) {
    const classIdx = this.classes.findIndex(x => classId === x.id);
    if (classIdx) {
      this.classes.splice(classIdx, 1);
    } else {
      return null;
    }
  }
}
