import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../nba-player';

import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import {NbaPlayerService} from './../nba-player.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  player:Player;

  constructor(
    private route:ActivatedRoute,
    private nbaPlayerService:NbaPlayerService, 
    private location: Location,

    ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    
    this.nbaPlayerService.getNbaPlayer(id)
    .subscribe(player => this.player = player)
    ;
  }

  goBack():void{
    this.location.back();
  }

}
