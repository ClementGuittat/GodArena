import { Component } from '@angular/core';
import { CombatService } from '../../_services/combat.service';
import { FormControl, EmailValidator, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Combat } from '../../_models/combat';

@Component({
    selector: 'combats-new',
    templateUrl: './combats-new.component.html'
})
export class CombatsNewComponent {

    combat: Combat;
    combatForm: FormGroup;


    constructor (private combatService: CombatService, private formBuilder: FormBuilder){
        this.createForm();
    }

    createForm(){
        this.combatForm = this.formBuilder.group({
            date: new FormControl('', [Validators.required]),
            lieu: new FormControl('', [Validators.required]),
            etat: new FormControl('En Attente', [Validators.required])
        });
    }

    addCombat(){
        this.combat = new Combat (this.combatForm.value.date, this.combatForm.value.lieu, this.combatForm.value.etat);
        this.combatService.addCombat(this.combat);
        this.combatForm.reset();
    }
}

