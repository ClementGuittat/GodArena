import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
    tabSelected: Gladiateur[] = [];
    armeSelected: string[] = [];

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
            date: new FormControl('', [Validators.required]),
            lieu: new FormControl('', [Validators.required]),
        });
    }

    ngOnInit(): void {

        // Get barman information and fill up form
        this.route.params.subscribe(params => {
            this.combatService.getCombat(params['id']).subscribe(combat => {
                this.combat = combat;
                this.gladiateurType = this.combat.details.typeCombattants;
                this.initTabSelected();

                this.combatForm.controls.date.setValue(this.combat.info.date);
                this.combatForm.controls.lieu.setValue(this.combat.info.lieu);
                this.gladiateurService.getGladiateursByType(this.gladiateurType).subscribe(gladiateur=>{
                    this.gladiateurList = gladiateur.map(g=>new Gladiateur (g));
                });
            });
        });
    }

    initTabSelected(){
        let i = 0;
        for (let type of this.gladiateurType){
            this.tabSelected.push(this.combat.details.combattants[i] ? new Gladiateur(this.combat.details.combattants[i]) : null);
            this.armeSelected.push(this.combat.details.combattants[i] ? this.combat.details.combattants[i].infosSpeciales.armeChoisie : "");
            i++;
        }
    }

    isValid(){
        let good = false;
        let i =0;
        for (let type of this.gladiateurType){
            if (this.tabSelected[i]){
                good = true;
            }
            else {
                good = false;
                break;
            }
            i++;
        }
        return good;
    }

    compareFn(item1,item2){
      return item1._id == item2._id;
    }

    editCombat() {
        this.combat.info.date = this.combatForm.controls.date.value;
        this.combat.info.lieu = this.combatForm.controls.lieu.value;
        this.tabSelected.map( g => g.enCombat=true);
        this.combat.details.combattants = this.tabSelected;
        let i =0;
        for (let arme of this.armeSelected){
            this.combat.details.combattants[i].infosSpeciales.armeChoisie = this.armeSelected[i];
            i++;
        }
        this.combat.info.etat = 'Accepté';
        this.combatService.updateCombat(this.combat).subscribe(combat=>{
        });
        this.router.navigate(['/empereur'] );
    }
}
