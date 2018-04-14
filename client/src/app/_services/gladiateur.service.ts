import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Gladiateur } from '../_models/gladiateur';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class GladiateurService {

  constructor(private http: HttpClient){}

  getGladiateursByType(type: string[]){
      return this.http.get<Gladiateur[]>('api/gladiateur/type?array='+ JSON.stringify(type));
  }

}
