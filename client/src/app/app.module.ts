import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { routing } from './app.routing';

import { MaterialModule } from './_helpers/material.module';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component'
import { MenuComponent } from './menu/menu.component';
import { LudusHomeComponent } from './ludusHome/ludusHome.component';
import { EmpereurHomeComponent } from './empereurHome/empereurHome.component';
import { CombatsListComponent } from './combats/list/combats-list.component';
import { CombatsNewComponent } from './combats/new/combats-new.component';
import { CombatsEditComponent } from './combats/edit/combats-edit.component';
import { NotFoundComponent } from './404/not-found.component';

import { CombatService } from './_services/combat.service';
import { GladiateurService } from './_services/gladiateur.service';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuComponent,
    LudusHomeComponent,
    EmpereurHomeComponent,
    CombatsListComponent,
    CombatsNewComponent,
    CombatsEditComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    MaterialModule,
    routing
  ],
  providers: [
    CombatService,
    GladiateurService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
