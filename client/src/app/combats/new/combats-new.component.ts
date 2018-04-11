import { Component } from '@angular/core';
import { CombatService } from '../../_services/combat.service'

@Component({
    selector: 'combats-new',
    templateUrl: './combats-new.component.html'
})
export class CombatsNewComponent {

    combatService : CombatService;

    constructor (combatService: CombatService){
        this.combatService = combatService;
    }

    addCombat(f){
      console.log(f);
        //this.combatService.addCombat(combat);
    }
}

