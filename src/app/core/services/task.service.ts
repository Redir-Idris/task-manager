// TaskService för att hantera uppgifter, (tjänst för att hantera uppgifter i applikationen)

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../../models/task.model'; // Importera Task-modellen

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://dummyjson.com/todos';

  constructor(private http: HttpClient) { }
  // hämta alla tasks
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
  // hämta en specifik task med dess ID
  getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.apiUrl}/${id}`);
  }

  // skapa en ny task
  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  // uppdatera en task
  updateTask(id: number, task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${id}`, task);
  }

  // ta bort en task
  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}


/* 
  TaskService hanterar API-anrop för uppgifter.
  Den använder HttpClient för att hämta uppgifter från en simulerad API-url.
  Metoder för att skapa, uppdatera och ta bort uppgifter kan läggas till senare.

*/
