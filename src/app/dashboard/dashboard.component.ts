import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { NbaPlayerService } from '../nba-player.service';
import { Hero } from './../hero';
import { Player } from './../nba-player';
import { PLAYERS } from './../mock-nba-players';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  players: Player[] = [];


  images = [1, 2, 3].map((id) => `https://picsum.photos/900/500?random&t=${Math.random()+id}`);
  constructor(private nbaPlayerService: NbaPlayerService,private heroService:HeroService) { }

  ngOnInit() {
    this.getHeroes();
    this.getNbaPlayers();
  }

  getHeroes(){
    this.heroService.getHeroes()
    .subscribe(HEROES => this.heroes = HEROES.slice(1,5));
  }

  getNbaPlayers(){
    this.nbaPlayerService.getNbaPlayers()
    .subscribe(PLAYERS => this.players = PLAYERS.slice(0,12));
  }

  teamColor(player:Player){
    return "#" + player.team_color;
  }


}
