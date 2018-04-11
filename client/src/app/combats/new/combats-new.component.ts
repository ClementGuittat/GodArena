import { Component } from '@angular/core';
import { CombatService } from '../../_services/combat.service';
import { Combat } from '../../_models/combat';

@Component({
    selector: 'combats-new',
    templateUrl: './combats-new.component.html'
})
export class CombatsNewComponent {

    combatService : CombatService;
    combat : Combat;

    constructor (combatService: CombatService){
        this.combatService = combatService;
    }

    addCombat(combat){
      console.log(combat);
        this.combat = new Combat (combat.Date, combat.Lieu, combat.Etat);
        this.combatService.addCombat(this.combat);
    }
}

