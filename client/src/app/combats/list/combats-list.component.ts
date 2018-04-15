import { Component, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { CombatService } from '../../_services/combat.service';
import { Combat } from '../../_models/combat';

@Component({
    selector: 'combats-list',
    templateUrl: './combats-list.component.html',
    styleUrls: ['./combats-list.component.css']
})
export class CombatsListComponent implements OnInit {

    displayedColumns = ['Date', 'Lieu', 'TypeCombattants','Customisation', 'Etat', 'Actions'];
    combatsData: MatTableDataSource<Combat>;
    nbCombats: Number;
    urlActuel: string;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor (private combatService: CombatService, private router: Router, private location: Location){ }

    ngOnInit () {
        this.combatService.getAllCombats().subscribe(combats=>{
            this.nbCombats = combats.length;
            this.combatsData = new MatTableDataSource(combats);
            this.combatsData.paginator = this.paginator;
        });
        this.urlActuel = this.router.url;
    }

    edit(combat: Combat) {
        this.router.navigate(['empereur/combats', combat._id, 'edit']);
    }

    close(combat: Combat) {
        combat.info.etat = 'Cloturé';
        this.combatService.updateCombat(combat).subscribe(combat=>{
        });
    }
}
