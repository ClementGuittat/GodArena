import { Component } from '@angular/core';
import { GladiateurService } from '../_services/gladiateur.service';

@Component({
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  title = 'GodArena';

  constructor(public gladiateurService: GladiateurService){ }

    initBD(){
      this.gladiateurService.initBase().subscribe(res=>{
        console.log(res);
      });
    }
}
