// API-anrop för projektdata 

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Project } from '../../models/project.model'; // Importera Project-modellen

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }
  // Hämta alla projekt
  // Denna metod returnerar en Observable som innehåller en lista av projekt
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }

  // Hämta ett specifikt projekt med dess ID
  getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}/${id}`);
  }

  // Skapa
  createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.apiUrl, project);
  }

  // Uppdatera
  updateProject(id: number): Observable<Project> {
    return this.http.put<Project>(`${this.apiUrl}/${project.id}`, project);
  }

  // Radera
  deleteProject(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);

  }
}


/* 
  ProjectService hanterar API-anrop för projektdata.
  Den använder HttpClient för att hämta projekt från en simulerad API-url.

*/

