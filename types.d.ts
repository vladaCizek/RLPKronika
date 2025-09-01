// Type definitions for RLP Ostrava project

interface Licence {
  [key: string]: string;
}

interface Bio {
  bio: {
    name: string;
    dob: string;
    dod: string;
    nastup: string;
    odchod: string;
  };
  licence: {
    licences: Licence[];
    datum_ukonceni: string;
  };
  instruktor: Licence[];
  info: string;
  image: string;
  imageDescription: string;
}