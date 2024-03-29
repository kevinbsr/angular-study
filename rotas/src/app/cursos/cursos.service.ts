import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getCursos(){
    return [
      {id: 1, nome: 'Angular'},
      {id: 2, nome: 'Java'},
      {id: 3, nome: 'JavaScript'},
      {id: 4, nome: 'Ionic'},
      {id: 5, nome: 'TypeScript'},
      {id: 6, nome: 'Bootstrap'}
    ]
  }

  getCurso(id: Number){
    let cursos = this.getCursos();
    for(let i = 0; i < cursos.length; i++){
      let curso = cursos[i];
      if(curso.id == id){
        return curso;
      }
    }
    return null;
  }

  constructor() { }
}
