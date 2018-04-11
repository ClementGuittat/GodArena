import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CombatService } from '../../_services/combat.service';
import { Combat } from '../../_models/combat';

@Component({
    selector: 'combats-list',
    templateUrl: './combats-list.component.html'
})
export class CombatsListComponent implements OnInit {

    combatService : CombatService;
    lastCombats : Combat[];

    constructor (combatService: CombatService){
        this.combatService = combatService;
    }

    ngOnInit () {
        this.lastCombats = this.combatService.getAllCombats();
    }
}
