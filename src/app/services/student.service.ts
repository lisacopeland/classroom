import { Student, StudentId } from '../models/student.model';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentCollection: AngularFirestoreCollection<Student>;
  students: Observable<StudentId[]>;

  constructor(private angularFirestore: AngularFirestore) {
    this.studentCollection = this.angularFirestore.collection<Student>('students');
  }

  getStudents(): Observable<StudentId[]> {
    return this.studentCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as Student;
          const id = a.payload.doc.id;
          console.log(data + ' ' + id);
          return { id, ...data };
        })
      )
    );
  }

  getStudentById(id) {
    // return this.studentCollection = this.angularFirestore.collection('students', ref => ref.where('id', '==', id));
    let thisCollection: AngularFirestoreCollection<Student>;
    let students: Observable<Student[]>;
      thisCollection = this.angularFirestore.collection<Student>('students', ref => {
        // Compose a query using multiple .where() methods
        return ref
                .where(thisCollection.documentId(), '<', '100');
      });
      students = thisCollection.valueChanges();
      return students;
    }
    // const student = new Subject<StudentId>();
    // const queryObservable = student.pipe(
    //    switchMap(data =>
    //        this.angularFirestore.collection('students', ref => ref.where('id', '==', id)).valueChanges()
    //  )
    // );

    // // subscribe to changes
    // queryObservable.subscribe(queriedItems => {
    //   console.log(queriedItems);
    //   return queriedItems;
    // });
    // student.next(id);



  addStudent(newStudent: Student) {
    this.studentCollection.add(newStudent);
  }

  deleteStudent(student) {
    this.studentCollection.doc(student.id).delete();
  }


  updateStudent(student) {
    this.studentCollection.doc(student.id).update(student);
  }
}
