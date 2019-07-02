import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../nba-player';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {

  @Input() player:Player;
  image:string;
  age:number;

  constructor() { }

  ngOnInit() {
    this.teamBackground(this.player);
    this.calculateAge(this.player);
  }

  teamColor(player:Player){
    return "#" + player.team_color;
  }

  teamBackground(player:Player){
    let abb = player.team_abbreviation;
    if (abb === 'okl') { abb = 'okc'}
    this.image = "https://www.nba.com/assets/logos/teams/primary/web/" + abb.toUpperCase() + ".svg"
  }

  calculateAge(player:Player){
    let timeDiff = Math.abs(Date.now() - new Date(player.dob).getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
    this.age = age;
  }

}
