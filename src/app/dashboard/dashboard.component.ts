import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { NbaService } from '../nba.service';
import { StatLine } from './../stats';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  players: StatLine[];

  images = [1, 2, 3].map((id) => `https://picsum.photos/900/500?random&t=${Math.random()+id}`);
  constructor(private nbaService: NbaService,private heroService:HeroService) { }

  ngOnInit() {

    if (!sessionStorage.getItem("stats")) { this.getPlayers(); } else {
      this.players = JSON.parse(sessionStorage.getItem("stats"))
    }

  }

  getPlayers(){

    if (!sessionStorage.getItem("stats")) {
      this.nbaService.getStats()
      //.subscribe(PLAYERS => this.players = PLAYERS.slice(0,12));

      .subscribe((STATISTICS) => {
        this.players = STATISTICS,
        sessionStorage.setItem("stats",  JSON.stringify(STATISTICS))
      });
    } 
  }

}
