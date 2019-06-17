import { Component, OnInit, TemplateRef } from '@angular/core';
import { EventoService } from '_services/evento.service';
import { Evento } from '_models/Evento';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  eventosFiltrados: Evento[];
  eventos: Evento[];
  mostrarImagem: boolean = false;
  imagemLargura: 50;
  imagemMargem: 2;
  modalRef: BsModalRef;

  _filtroLista: string;

  constructor(
      private eventoService: EventoService
    , private modalService: BsModalService
  ) {}

  get filtroLista(): string {
    return this._filtroLista;
  }
  set filtroLista(value: string) {
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    this.getEventos();
  }

  getEventos() {
    this.eventoService.getAllEventos()
      .subscribe(
        (_eventos: Evento[]) => {
          console.log(_eventos);
          (this.eventos = _eventos);
        },
        error => console.error(error)
      );
  }

  alternarImagem() {
    this.mostrarImagem = !this.mostrarImagem;
  }

  filtrarEventos(filtrarPor: string): Evento[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      evento => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }
}
