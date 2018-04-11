class Info {
  date: string;
  lieu: string;
  etat: string;

  constructor(date: string, lieu: string, etat: string){
    this.date = date;
    this.lieu = lieu;
    this.etat = etat;
  };
}

class Details{
  combattants: string[];
  customisation: boolean;
  constructor (combattants: string[], customisation: boolean){
    this.combattants = combattants;
    this.customisation = customisation;
  };
}

export class Combat {

    _id?: string;
    info: Info;
    details: Details;

    constructor (date: string, lieu: string, etat: string = 'En Attente', combattants: string[] = [], customisation: boolean = false) {
      this.info = new Info (date, lieu, etat);
      this.details = new Details (combattants, customisation);
    }
}
