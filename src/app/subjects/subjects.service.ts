import { Injectable } from '@angular/core';
import { Subject } from '../models/subject.model';


@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private subjects: Subject[] = [
    { id: 1, branch: 'CSE', name: 'Managerial Economics and Financial Accountancy (MEFA)' },
    { id: 2, branch: 'CSE', name: 'Object Oriented Programming (OOP)' },
    { id: 3, branch: 'CSE', name: 'Switching Theory and Logic Design (STLD)' },
    { id: 4, branch: 'CSE', name: 'Discrete Structures and Graph Theory (DSGT)' },
    { id: 5, branch: 'CSE', name: 'Computer Organisation and Architecture (COA)' }
  ];

  getSubjects() {
    return this.subjects;
  }

  addSubject(subject: Subject) {
    this.subjects.push(subject);
  }
}
