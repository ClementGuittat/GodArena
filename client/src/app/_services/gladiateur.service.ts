import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Gladiateur } from '../_models/gladiateur';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class GladiateurService {

  body: Gladiateur[];

  constructor(private http: HttpClient){
    this.initBody();
  }

  getGladiateursByType(type: string[]){
      return this.http.get<Gladiateur[]>('/api/gladiateur/type?array='+ JSON.stringify(type));
  }

  initBase(): Observable<Gladiateur[]> {
      return this.http.post<Gladiateur[]>('/api/gladiateur/init', this.body, httpOptions);
  }

  initBody(){
    this.body = [
      new Gladiateur({
          "identifiant": {
              "nom": "Mouton Noir",
              "age": 11
          },
          "_type": "Animal"
      }),
      new Gladiateur({
          "identifiant":{
            "nom": "Tigre",
            "age": 9
          },
          "_type": "Animal"
      }),
      new Gladiateur({
          "identifiant":{
            "nom": "Lion",
            "age": 14
          },
          "_type": "Animal"
      }),
      new Gladiateur({
          "identifiant":{
            "nom": "Commodus",
            "age": 25
          },
          "_type": "Archer"
      }),
      new Gladiateur({
          "identifiant":{
            "nom": "Flamma",
            "age": 19
          },
          "_type": "Archer"
      }),
      new Gladiateur({
          "identifiant":{
            "nom": "Jeanclaudedus",
            "age": 47
          },
          "_type": "Cavalier"
      }),
      new Gladiateur({
          "identifiant":{
            "nom": "Spiculus",
            "age": 69
          },
          "_type": "Cavalier"
      }),
      new Gladiateur({
          "identifiant":{
            "nom": "Ganicus",
            "age": 38
          },
          "_type": "Lancier"
      }),
      new Gladiateur({
          "identifiant":{
            "nom": "Crixus",
            "age": 14
          },
          "_type": "Lancier"
      }),
      new Gladiateur({
          "identifiant":{
            "nom": "Maximus",
            "age": 18
          },
          "_type": "Epeiste"
      }),
      new Gladiateur({
          "identifiant":{
            "nom": "Spartacus",
            "age": 78
          },
          "_type": "Epeiste"
      }),
      new Gladiateur({
          "identifiant":{
            "nom": "Priscus",
            "age": 21
          },
          "_type": "Epeiste"
      }),
      new Gladiateur({
          "identifiant":{
            "nom": "Pollux",
            "age": 31
          },
          "_type": "Epeiste"
      })
    ]
  }

}
