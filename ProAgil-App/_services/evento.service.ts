import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from '_models/Evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private baseUrl = 'http://localhost:5000/api/evento';

  constructor(private http: HttpClient) { }

  getAllEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.baseUrl);
  }

  getEventoById(id: number): Observable<Evento> {
    return this.http.get<Evento>(`${this.baseUrl}/${id}`);
  }

  getEventoByTema(tema: string): Observable<Evento> {
    return this.http.get<Evento>(`${this.baseUrl}/getByTema/${tema}`);
  }
}
