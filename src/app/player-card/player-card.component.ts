import { Component, OnInit, Input } from '@angular/core';
import { StatLine } from '../stats';
import { NbaService } from '../nba.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { Bio } from '../bio';
import { Observable } from 'rxjs';
import { Team } from '../team';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {

  @Input() player:StatLine;
  @Input() teamAbb:string;

  bio:Bio;
  team:Team;

  image:string;
  age:number;
  color:string = "#ccc"

  constructor(private nbaService:NbaService,private route:ActivatedRoute) { }

  ngOnInit() {

    this.teamBackground(this.player);
    this.getTeam();
    this.getBio()

  }

  getBio(){
    //const id = +this.route.snapshot.paramMap.get('id');
    this.nbaService.getBio(this.player.id)
    .subscribe((bio) => {
      this.bio = bio;
      if (this.bio) {this.calculateAge(this.bio) } else {this.age=0}
    });
  }

  teamBackground(player:StatLine){
    let abb = player.Team;
    this.image = "https://btgraphix.com/nba/images/teams/" + abb + ".svg"
  }

  calculateAge(bio:Bio):void{
    let timeDiff = Math.abs(Date.now() - new Date(bio.birthdate).getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
    this.age = age;
  }


  getTeam(){
    this.nbaService.getTeam(this.teamAbb)
    .subscribe((team) => {
      this.team = team;
      this.getColor(team);
    });
  }

  getColor(team){
    if(team) {this.color = "#" + team.color;}
  }

}
