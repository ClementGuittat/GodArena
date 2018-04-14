import { Component, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

import { CombatService } from '../../_services/combat.service';
import { Combat } from '../../_models/combat';

@Component({
    selector: 'combats-list',
    templateUrl: './combats-list.component.html'
})
export class CombatsListComponent implements OnInit {

    displayedColumns = ['Date', 'Lieu', 'TypeCombattants','Customisation', 'Etat', 'Actions'];
    combatsData: MatTableDataSource<Combat>;

    //@ViewChild(MatSort) sort: MatSort;
    //@ViewChild(MatPaginator) paginator: MatPaginator;

    constructor (private combatService: CombatService, private router: Router){ }

    ngOnInit () {
        this.combatService.getAllCombats().subscribe(combats=>{
            this.combatsData = new MatTableDataSource(combats);
        });
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.combatsData.filter = filterValue;
    }

    edit(combat: Combat) {
        this.router.navigate(['empereur/combats', combat._id, 'edit']);
    }
}
