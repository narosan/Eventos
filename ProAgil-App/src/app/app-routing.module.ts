import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventosComponent } from './eventos/eventos.component';

const routes: Routes = [
  { path: 'eventos', component: EventosComponent },
  { path: '', redirectTo: 'eventos', pathMatch: 'full' },
  { path: 'dashboard', redirectTo: 'eventos', pathMatch: 'full' },
  { path: 'palestrantes', redirectTo: 'eventos', pathMatch: 'full' },
  { path: 'contatos', redirectTo: 'eventos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
