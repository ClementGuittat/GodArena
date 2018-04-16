import { Component } from '@angular/core';
import { GladiateurService } from '../_services/gladiateur.service';

@Component({
  templateUrl: './ludusHome.component.html'
  //styleUrls: ['./accueil.component.css']
})
export class LudusHomeComponent {

    constructor(public gladiateurService: GladiateurService){ }

}
