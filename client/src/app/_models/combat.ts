class Info {
  date: Date;
  lieu: string;
  etat: string;

  constructor(date: Date, lieu: string, etat: string){
    this.date = date;
    this.lieu = lieu;
    this.etat = etat;
  };
}

class Details{
  typeCombattants: string[];
  combattants: string[];
  customisation: boolean;
  constructor (typeCombattants: string[], combattants: string[], customisation: boolean){
    this.typeCombattants = typeCombattants;
    this.combattants = combattants;
    this.customisation = customisation;
  };
}

export class Combat {

    _id?: string;
    info: Info;
    details: Details;

    constructor (date: Date, lieu: string, customisation: boolean, typeCombattants: string[], etat: string = "En Attente", combattants: string[] = []) {
      this.info = new Info (date, lieu, etat);
      this.details = new Details (typeCombattants, combattants, customisation);
    }
}
