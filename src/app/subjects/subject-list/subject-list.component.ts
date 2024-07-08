import { Component } from '@angular/core';
import { SubjectService } from '../subjects.service';
import { Subject } from '../../models/subject.model';

@Component({
  selector: 'app-subject-list',
  standalone: true,
  imports: [],
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css'
})
export class SubjectListComponent {
  subjects: Subject[] = [];

  constructor(private subjectService: SubjectService) {}

  ngOnInit(): void {
    this.subjects = this.subjectService.getSubjects();
  }

}
