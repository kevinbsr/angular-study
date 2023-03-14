import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent {
  book: any = {
    title: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.54312,
    pageNumbers: 314,
    price: 44.99,
    releaseDate: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  }
}
