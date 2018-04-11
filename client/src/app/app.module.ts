import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component'
import { CombatsListComponent } from './combats/list/combats-list.component'
import { CombatsNewComponent } from './combats/new/combats-new.component'

import { CombatService } from './_services/combat.service'

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CombatsListComponent,
    CombatsNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    routing
  ],
  providers: [CombatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
