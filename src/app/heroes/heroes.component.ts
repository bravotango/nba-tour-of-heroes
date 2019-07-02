import { Component, OnInit } from '@angular/core';
import { Player } from '../nba-player';

import { NbaPlayerService } from './../nba-player.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {


  players: Player[] = [];

  constructor(private playerService: NbaPlayerService) {
    
 } 

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(){
    this.playerService.getNbaPlayers()
    .subscribe(players => this.players = players)
  }

}
