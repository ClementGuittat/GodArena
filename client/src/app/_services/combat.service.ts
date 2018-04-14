import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Combat } from '../_models/combat';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CombatService {

    constructor(private http: HttpClient){}

    getAllCombats() {
        return this.http.get<Combat[]>('/api/combat');
    }

    addCombat(combat: Combat): Observable<Combat> {
        return this.http.post<Combat>('/api/combat', combat, httpOptions);
    }

    getCombat(id: string){
        return this.http.get<Combat>('api/combat/'+ id);
    }

    updateCombat(combat: Combat): Observable<Combat> {
        const id = combat._id;
        return this.http.put<Combat>('/api/combat/'+ id, combat, httpOptions);
    }
}
