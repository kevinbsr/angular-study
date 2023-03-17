import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";
import { AlunosComponent } from "./alunos.component";

const alunosRoutes = [
  { path: 'alunos', component: AlunosComponent, children: [
    { path: ':id', component: AlunoDetalheComponent },
    { path: ':id/editar', component: AlunoFormComponent },
    { path: 'novo', component: AlunoFormComponent }
  ] },
]

@NgModule({
  imports: [
    RouterModule.forChild(alunosRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AlunosRoutingModule { }