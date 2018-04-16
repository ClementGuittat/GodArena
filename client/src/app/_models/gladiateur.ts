class Identifiant {
  nom: string;
  age: Number;

  constructor(nom: string, age: Number){
    this.nom = nom;
    this.age = age;
  };
}
class InfosSpeciales {
  listeArmes: string[];
  armeChoisie: string;

  constructor(listeArmes: string[], armeChoisie: string){
    this.listeArmes = listeArmes;
    this.armeChoisie = armeChoisie;
  }
}

export class Gladiateur {

    _id?: string;
    _type?: string;
    identifiant: Identifiant;
    infosSpeciales?: InfosSpeciales;
    enCombat: boolean;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
