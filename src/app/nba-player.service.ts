import { Injectable } from '@angular/core';
import { Player } from './nba-player';
import { PLAYERS } from  './mock-nba-players';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NbaPlayerService {

  constructor() { }

  getNbaPlayers(): Observable<Player[]> {
    return of (PLAYERS);
  }

  getNbaPlayer(id:number): Observable<Player> {
    return of (PLAYERS.find(player => player.id === id));
  }

}
