import { Component, OnInit, TemplateRef } from '@angular/core';
import { EventoService } from '_services/evento.service';
import { Evento } from '_models/Evento';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { defineLocale, BsLocaleService, ptBrLocale } from 'ngx-bootstrap';
defineLocale('pt-br', ptBrLocale);
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
  registerForm: FormGroup;

  _filtroLista: string;

  constructor(
      private eventoService: EventoService
    , private modalService: BsModalService
    , private fb: FormBuilder
    , private localeService: BsLocaleService
  ) {
    this.localeService.use('pt-br');
  }

  get filtroLista(): string {
    return this._filtroLista;
  }
  set filtroLista(value: string) {
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  ngOnInit() {
    this.validation();
    this.getEventos();
  }

  getEventos() {
    this.eventoService.getAllEventos()
    .subscribe(
      (_eventos: Evento[]) => {
        this.eventos = _eventos;
        this.eventosFiltrados = _eventos;
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
    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }

    validation() {
      this.registerForm = this.fb.group({
        tema: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
        local: new FormControl('', Validators.required),
        dataEvento: new FormControl('', Validators.required),
        qtdPessoas: new FormControl('', [Validators.required, Validators.max(120000)]),
        imagemURL: new FormControl('', Validators.required),
        telefone: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email])
      });
    }

    salvarAlteracao() {
      console.log(true);
    }
}