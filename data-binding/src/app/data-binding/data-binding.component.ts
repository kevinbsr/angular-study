import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']

  styles: [
    `.highlight {
     background-color: yellow;
     font-weight: bold;
    }`
  ]
})
export class DataBindingComponent {
  url: string = 'https://loiane.com';

  cursoAngular: boolean = true

  urlImagem = 'http://lorempixel.com.br/400/200/'

  valorAtual: string = ''
  valorSalvo = ''

  isMouseOver: boolean = false

  getValor(){
    return 1
  }

  getCurtirCurso(){
    return true
  }

  botaoClicado(){
    alert('Botão clicado!')
  }

  onKeyUp(evento: KeyboardEvent){
    console.log();
    this.valorAtual = (<HTMLInputElement>evento.target).value
  }

  salvarValor(valor: any){
    this.valorSalvo = valor;
  }


  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver
  }
}
