import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private baseUrl = 'http://localhost:5000/api/evento';

  constructor(private http: HttpClient) { }

  getEventos() {
    return this.http.get(this.baseUrl);
  }
}
