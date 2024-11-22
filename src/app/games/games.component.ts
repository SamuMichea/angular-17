import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template:`
    <h3>Los juegos favoritos de {{ username }}</h3>
    <ul>
      @for (game of games; track game.id) {
        <li (click)="fav(game.name)">{{ game.name }}</li>
      }
    </ul>
  `,
  styles:``, 
})
export class GamesComponent {
  @Input() username = ''
  @Output() addFavoriteEvent = new EventEmitter<string>()
  // EventEmitter, In/Output tambien son decoradores q se importar de angular.core

  fav(gameName:string){
    this.addFavoriteEvent.emit(gameName)
    // debemos utilizar el this (que se refiere a la instancia de la clase), luego addFavoriteEvent y emitimos el evento q estamos creando (dicimos que informacion pasar)
  }

  games = [
    {
      id: 1 ,
      name: 'Uncharted 4',
    },
    {
      id: 2 ,
      name: 'Horizon Zero Dawn',
    },
    {
      id: 3 ,
      name: 'Bloodborne',
    },
  ]
}
