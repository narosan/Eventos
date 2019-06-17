import { Component, OnInit } from '@angular/core';
import { EventoService } from '_services/evento.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  _filtroLista: string;
  get filtroLista(): string {
    return this._filtroLista;
  }
  set filtroLista(value: string) {
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  eventosFiltrados: any = [];
  eventos: any = [];
  mostrarImagem: boolean = false;
  imagemLargura: number = 50;
  imagemMargem: number = 2;

  constructor(private eventoService: EventoService) {}

  ngOnInit() {
    this.getEventos();
  }

  getEventos() {
    this.eventoService.getEventos()
      .subscribe(
        response => (this.eventos = response),
        error => console.error(error)
      );
  }

  alternarImagem() {
    this.mostrarImagem = !this.mostrarImagem;
  }

  filtrarEventos(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      evento => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }
}
