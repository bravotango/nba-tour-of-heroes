import { Component, OnInit } from '@angular/core';
import { Player } from '../nba-player';
import { StatLine } from  '../stats';
import { NbaService } from './../nba.service';
import { NbaPlayerService } from './../nba-player.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {


  players: Player[] = [];
  stats:StatLine[];

  constructor( private nbaService:NbaService, private playerService: NbaPlayerService) {
    
 } 

  ngOnInit() {
    this.getHeroes();
    this.getStatistics();
  }

  getHeroes(){
    this.playerService.getNbaPlayers()
    .subscribe(players => this.players = players)
  }

  getStatistics(){
    this.nbaService.getStatistics()
    .subscribe(stats => this.stats = stats)
  }

}
