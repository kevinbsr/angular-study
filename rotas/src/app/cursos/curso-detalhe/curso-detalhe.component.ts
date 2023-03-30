import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent {
    id:number = 0
    inscricao: Subscription = new Subscription;
    curso: any;

    constructor(
      private route: ActivatedRoute,
      private cursosService: CursosService,
      private router: Router
      ){
      /* this.id = this.route.snapshot.params['id']
      console.log(this.route); */
    }
    ngOnInit(){
      this.inscricao = this.route.params.subscribe((params: any) => {
        this.id = params['id'];
        this.curso = this.cursosService.getCurso(this.id)

        if(this.curso == null){
          this.router.navigate(['/nao-encontrado'])
        }
      })

    }
    ngOnDestroy(){
      this.inscricao.unsubscribe()
    }
}