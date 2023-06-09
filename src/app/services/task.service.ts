import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiurl = 'http://localhost:5000/tasks'
  constructor(private http:HttpClient) {}

  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiurl)
  }

  deleteTask(task: Task): Observable<Task>{
    const url = `${this.apiurl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
}
