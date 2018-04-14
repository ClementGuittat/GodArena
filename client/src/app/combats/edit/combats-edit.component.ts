import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, EmailValidator, Validators, FormBuilder, FormGroup } from '@angular/forms';

import { CombatService } from '../../_services/combat.service';
import { GladiateurService } from '../../_services/gladiateur.service';
import { Combat } from '../../_models/combat';
import { Gladiateur } from '../../_models/gladiateur';

@Component({
    templateUrl: './combats-edit.component.html'
})
export class CombatsEditComponent implements OnInit{

    combatForm: FormGroup;
    combat: Combat;
    gladiateurType: string[];
    gladiateurList: Gladiateur[];

    constructor (
        private combatService: CombatService,
        private gladiateurService: GladiateurService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router
    ){
        this.createForm();
    }

    createForm(){
        this.combatForm = this.formBuilder.group({
            date: new FormControl(''),
            lieu: new FormControl('', [Validators.required]),
            combattantsId: new FormControl('', [Validators.required])
        });
    }

    ngOnInit(): void {

        // Get barman information and fill up form
        this.route.params.subscribe(params => {
            this.combatService.getCombat(params['id']).subscribe(combat => {
                this.combat = combat;
                this.gladiateurType = this.combat.details.typeCombattants;

                this.combatForm.controls.date.setValue(this.combat.info.date);
                this.combatForm.controls.lieu.setValue(this.combat.info.lieu);
                this.combatForm.controls.combattantsId.setValue(this.combat.details.combattants);
                this.gladiateurService.getGladiateursByType(this.gladiateurType).subscribe(gladiateur=>{
                    this.gladiateurList = gladiateur;
                });
            });
        });
    }

    editCombat() {
        this.combat.info.date = this.combatForm.controls.date.value;
        this.combat.info.lieu = this.combatForm.controls.lieu.value;
        this.combat.details.combattants = this.combatForm.controls.combattantsId.value;
        this.combat.info.etat = 'Accepté';
        this.combatService.updateCombat(this.combat).subscribe(combat=>{
        });
    }
}
