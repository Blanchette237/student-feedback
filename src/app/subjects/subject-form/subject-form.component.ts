import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Subject } from '../../models/subject.model';
import { SubjectService } from '../subjects.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subject-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.css']
})
export class SubjectFormComponent {
  constructor(private subjectService: SubjectService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const newSubject: Subject = {
        id: Math.max(...this.subjectService.getSubjects().map(s => s.id)) + 1,
        branch: form.value.branch,
        name: form.value.name
      };
      this.subjectService.addSubject(newSubject);
      form.reset();
    }
  }

}
