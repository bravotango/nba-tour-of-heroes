import { Component, OnInit, Input } from '@angular/core';
import { StatLine } from '../stats';
import { Bio } from '../bio';
import { Team } from '../team';

import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import {NbaService} from './../nba.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent implements OnInit {

  player:StatLine;

  constructor(
    private route:ActivatedRoute,
    private nbaService:NbaService, 
    private location: Location,

    ) { }

  ngOnInit() {
    this.getPlayer();
  }

  getPlayer(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.nbaService.getPlayer(id)
    .subscribe(player => this.player = player);
  }

  goBack():void{
    this.location.back();
  }

}
