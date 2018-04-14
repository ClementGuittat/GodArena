import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, EmailValidator, Validators, FormBuilder, FormGroup } from '@angular/forms';

import { CombatService } from '../../_services/combat.service';
import { Combat } from '../../_models/combat';

@Component({
    templateUrl: './combats-new.component.html'
})
export class CombatsNewComponent {

    combat: Combat;
    combattantTypes: string[] = [
        'Animal',
        'Archer',
        'Cavalier',
        'Epeiste',
        'Lancier'
    ];
    combatForm: FormGroup;


    constructor (
        private combatService: CombatService,
        private formBuilder: FormBuilder,
        private router: Router
    ){
        this.createForm();
    }

    createForm(){
        this.combatForm = this.formBuilder.group({
            date: new FormControl('', [Validators.required]),
            lieu: new FormControl('', [Validators.required]),
            custom: new FormControl('', [Validators.required]),
            typeCombattants: new FormControl('',[Validators.required])
        });
    }

    addCombat(){
        this.combat = new Combat (this.combatForm.value.date, this.combatForm.value.lieu, this.combatForm.value.custom, this.combatForm.value.typeCombattants);
        this.combatService.addCombat(this.combat).subscribe(combat=>{
        });
        this.combatForm.reset();
        this.router.navigate(['/ludus'] );
    }
}

