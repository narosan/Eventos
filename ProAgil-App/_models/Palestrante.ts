import { Evento } from './Evento';

export interface Palestrante {
    id: number;
    nome: string;
    miniCurriculo: string;
    imagemURL: string;
    telefone: string;
    redesSociais: RedeSocial[];
    palestrantesEventos: Evento[];
}
