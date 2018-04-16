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

    /**
     *
     * Récupère tous les combats de la base de données
     */
    getAllCombats() {
        return this.http.get<Combat[]>('/api/combat');
    }

    /**
     *
     * Envoie les informations d'un combat donné par l'utilisateur au serveur
     */
    addCombat(combat: Combat): Observable<Combat> {
        return this.http.post<Combat>('/api/combat', combat, httpOptions);
    }

    /**
     *
     * Récupère les informations d'un combat précisé par l'utilisateur
     */
    getCombat(id: string){
        return this.http.get<Combat>('api/combat/'+ id);
    }

    /**
     *
     * Modifie un combat à partir des nouvelles informations données par l'utilisateur
     */
    updateCombat(combat: Combat): Observable<Combat> {
        const id = combat._id;
        return this.http.put<Combat>('/api/combat/'+ id, combat, httpOptions);
    }
}
