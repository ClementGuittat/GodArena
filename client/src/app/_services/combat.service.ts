import { Injectable } from '@angular/core';
import { Combat } from '../_models/combat';

@Injectable()
export class CombatService {

    combats: Combat[] = [
        new Combat('Jeudi 25 avril', 'Colisee'),
        new Combat('Mercredi 24 avril', 'Paris')
    ];

    getAllCombats() {
        return this.combats;
    }

    addCombat(combat: Combat) {
         this.combats.push(combat);
    }
}
