import { Component } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: '´',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  cursos: any[] = [];

  constructor(private cursosService: CursosService){

  }

  ngOnInit(){
    this.cursos = this.cursosService.getCursos()
  }
}
