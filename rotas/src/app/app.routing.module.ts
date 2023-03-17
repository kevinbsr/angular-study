import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModuleWithProviders } from '@angular/core'
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component'
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component'

import { CursosComponent } from './cursos/cursos.component'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'

const appRutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'curso/:id', component: CursoDetalheComponent },
  { path: 'nao-encontrado', component: CursoNaoEncontradoComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
