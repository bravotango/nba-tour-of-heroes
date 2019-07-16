import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlayerCardComponent } from './player-card/player-card.component';
import { NgbdTableComplete } from './table-complete/table-complete.component';
import { NgbdSortableHeader } from './sortable.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    PlayerCardComponent,
    NgbdTableComplete,
    NgbdSortableHeader
  ],
  imports: [
    BrowserModule,
    HttpClientModule,    
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
