import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../../core/services/project.service';
import { Project } from '../../../../models/project.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-project-list',
  imports: [],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})

export class ProjectListComponent implements OnInit {
  projects: Project[] = []; // 1
  projectForm: FormGroup; // 2

  constructor( // 2
    private projectService: ProjectService,
    private fb: FormBuilder
  ) {
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      deadline: ['', Validators.required]
    });
  }

  ngOnInit(): void { // 1
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getProjects().subscribe({
      next: (data) => this.projects = data,
      error: (err) => console.error('Error, loading projects', err)
    });
  }

  onSubmit(): void { // 2
    if (this.projectForm.invalid) return;

    const newProject: Project = {
      id: Math.floor(Math.random() * 1000), // stimulerat ID
      name: this.projectForm.value.name,
      description: this.projectForm.value.description,
      deadline: this.projectForm.value.deadline,
      tasks: []
    };
    this.projectService.createProject(newProject).subscribe({
      next: () => {
        this.loadProjects();
        this.projectForm.reset();
      },
      error: (err) => console.error('Error creating project', err)
    });
  }
}

/* 
1)
- Vi hämtar projekten när komponenten laddas (ngOnInit).
- Vi sparar resultatet i en lokal variabel projects.

2)
- Lägger till Reactive Form för att skapa nytt projekt.
- Formuläret använder RF med validering (Validators.required).
- När du klickar på knappen görs en POST till API:t och listan laddas om.

*/