import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';


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
    FormsModule
  ],
  providers: [CombatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
