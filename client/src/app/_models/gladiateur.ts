class Identifiant {
  nom: string;
  age: Number;

  constructor(nom: string, age: Number){
    this.nom = nom;
    this.age = age;
  };
}

class CV{
  nbVictoires: Number;
  enCombat: boolean;
  constructor (nbVictoires: Number, enCombat: boolean){
    this.nbVictoires = nbVictoires;
    this.enCombat = enCombat;
  };
}

export class Gladiateur {

    _id?: string;
    _type?: string;
    identifiant: Identifiant;
    CV: CV;

    /*constructor (nom: string, age: Number, nbVictoires: Number = 0, enCombat: boolean = false) {
      this.identifiant = new Identifiant (nom, age);
      this.CV = new CV (nbVictoires, enCombat);
    }*/
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
