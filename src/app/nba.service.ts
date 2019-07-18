
  import { Injectable } from '@angular/core';
  import { StatLine } from './stats';
  import { HttpClient } from '@angular/common/http';
  import { Observable, of } from 'rxjs';
  import { map } from 'rxjs/operators';
  import {PLAYERS} from './mock-players';
  import {Bio} from './bio';
  import {Team} from './team';
  



  @Injectable({
    providedIn: 'root'
  })
  export class NbaService {
  
    constructor(private httpClient: HttpClient) { }
  
    API_URL:string ="https://btgraphix.com/nba/";
  
    getStatistics():Observable<StatLine[]> {
      return this.httpClient.get<StatLine[]>(this.API_URL + 'stats.php');
    }

    getStats(): Observable<StatLine[]> {
      //var stats = this.httpClient.get<StatLine[]>('https://btgraphix.com/nba/stats.php');

      return this.httpClient.get<StatLine[]>('https://btgraphix.com/nba/stats.php');
    }

    getTeams() {
      return this.httpClient.get('https://btgraphix.com/nba/teams.php');
    }
    getBios() {
      return this.httpClient.get('https://btgraphix.com/nba/bios.php');
    }
  
    getPlayer(id:number):Observable<StatLine> {
      console.log('entered getPlayer id: ' + id);
      let myQuery = this.API_URL + 'player.php?id=' + id
     // console.log(this.httpClient.get<StatLine>(myQuery))
      return this.httpClient.get<StatLine>(myQuery);
    }
    
    getBio(id:number):Observable<Bio> {
      return this.httpClient.get<Bio>('https://btgraphix.com/nba/bio.php?id=' + id );
    }
    
    getTeam(abb:string):Observable<Team> {
      return this.httpClient.get<Team>('https://btgraphix.com/nba/team.php?teamAbb=' + abb );
    }  

  }