// ATCO personnel data
const bioData = [
  {
    bio: {
      name: "Zdeněk Picek",
      dob: "16.8.1925",
      dod: "†",
      nastup: "18.5.1959",
      odchod: "1985 důchod"
    },
    licence: {
      licences: [
        { "TWR": "28.7.1960" },
        { "APP": "28.7.1960" },
        { "radar": "14.10.1965" },
        { "PAR": "14.10.1965" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [
      { "SC": "1960 bez kvalifikační zkoušky" },
      { "BO": "1982" }
    ],
    info: "TWR LKPO, LKZA: 1984",
    image: "fotky/ATCO List/1_IMG_20250829_225144.jpg",
    imageDescription: "Zdeněk Picek"
  },
  {
    bio: {
      name: "Richard Pflegr",
      dob: "1928",
      dod: "",
      nastup: "1958",
      odchod: "1962"
    },
    licence: {
      licences: [],
      datum_ukonceni: ""
    },
    instruktor: [],
    info: "Pracoval v zácviku na Hrabůvce, pak v Mošnově, neudělal 3x zkoušky a odešel v r. 1962.",
    image: "",
    imageDescription: ""
  },
  {
    bio: {
      name: "Bruno Mieszczak",
      dob: "28.6.1928",
      dod: "1992",
      nastup: "17.8.1953",
      odchod: ""
    },
    licence: {
      licences: [
        { "TWR": "12.4.1962" },
        { "APP": "12.4.1962" },
        { "radar": "22.9.1967" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [],
    info: "TWR LKZA: 1984. Pracoval na letišti Hrabůvka na goniu, pak získal v Mošnově plnou řlp kvalifikaci, ale pracoval jen na TWR.",
    image: "",
    imageDescription: ""
  },
  {
    bio: {
      name: "Rudolf Kachel",
      dob: "17.4.1929",
      dod: "",
      nastup: "1.4.1962",
      odchod: "1989 důchod"
    },
    licence: {
      licences: [
        { "TWR": "7.12.1964" },
        { "APP": "7.12.1964" },
        { "radar": "22.9.1967" },
        { "PAR": "14.4.1975" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [
      { "SC": "1964 bez kvalifikační zkoušky" },
      { "BO": "1982" }
    ],
    info: "TWR LKPO: 1984",
    image: "fotky/ATCO List/2_IMG_20250829_224040.jpg",
    imageDescription: "Rudolf Kachel"
  },
  {
    bio: {
      name: "Janus Oldřich",
      dob: "16.10.1931",
      dod: "",
      nastup: "1957",
      odchod: "1998 důchod"
    },
    licence: {
      licences: [
        { "TWR": "1.10.1958" },
        { "APP": "1.10.1958" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [],
    info: "Pracoval jako jeden z prvních licencovaných leteckých dispečerů na Hrabůvce a v Mošnově až do r.1964 a současně od r.1960 jako provozní náměstek náčelníka letiště. V r. 1970 pracoval krátce jako ředitel letiště Mošnov, a od r. 1970 náměstek ředitele ČSSDL a ředitel letiště Praha.",
    image: "",
    imageDescription: ""
  },
  {
    bio: {
      name: "Vlastimil Hudeček",
      dob: "1.3.1932",
      dod: "duben 2009",
      nastup: "1960",
      odchod: "1965"
    },
    licence: {
      licences: [
        { "TWR": "9.2.1961" },
        { "APP": "9.2.1961" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [],
    info: "Pracoval krátce jako letecký dispečer na Mošnově, pak přešel na technický úsek a od r. 1962 byl vedoucím letecké zabezpečovací techniky na Mošnově.",
    image: "fotky/ATCO List/3_IMG_20250829_224202.jpg",
    imageDescription: "Vlastimil Hudeček"
  },
  {
    bio: {
      name: "Ladislav Sedláček",
      dob: "2.4.1932",
      dod: "21.1.2008",
      nastup: "1959",
      odchod: "1992 důchod"
    },
    licence: {
      licences: [
        { "TWR": "1960" },
        { "APP": "1960" },
        { "radar": "14.10.1965" },
        { "PAR": "14.10.1965" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [
      { "SC": "1960 bez kvalifikační zkoušky" },
      { "Instruktor": "21.12.1984" }
    ],
    info: "TWR LKPO, LKZA: 1984",
    image: "",
    imageDescription: ""
  },
  {
    bio: {
      name: "Lumír Janáček",
      dob: "19.5.1934",
      dod: "říjen 2013",
      nastup: "16.9.1959",
      odchod: "1994 důchod"
    },
    licence: {
      licences: [
        { "TWR": "9.2.1961" },
        { "APP": "9.2.1961" },
        { "radar": "14.10.1965" },
        { "PAR": "14.10.1965" },
        { "TWR/APP LKHO": "7.1.1972" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [
      { "SC": "1961 bez kvalifikační zkoušky" },
      { "BO": "1982" }
    ],
    info: "TWR LKPO, LKZA: 1984",
    image: "",
    imageDescription: ""
  },
  {
    bio: {
      name: "Jiří Pavel",
      dob: "12.3.1935",
      dod: "23.2.1997",
      nastup: "1.7.1961",
      odchod: "1995 důchod"
    },
    licence: {
      licences: [
        { "TWR": "20.11.1963" },
        { "APP": "20.11.1963" },
        { "radar": "22.9.1967" },
        { "PAR": "21.1.1969" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [
      { "SC": "30.10.1979 předtím výkon bez kvalifikační zkoušky" },
      { "BO": "1982" }
    ],
    info: "TWR LKZA: 1984",
    image: "fotky/ATCO List/4_IMG_20250829_224202.jpg",
    imageDescription: "Jiří Pavel"
  },
  {
    bio: {
      name: "Oldřich Vyvial",
      dob: "22.2.1936",
      dod: "",
      nastup: "2.1.1958",
      odchod: "2000 důchod"
    },
    licence: {
      licences: [
        { "TWR": "1.10.1958" },
        { "APP": "1.10.1958" },
        { "radar": "14.10.1965" },
        { "PAR": "14.10.1965" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [
      { "SC": "30.10.1979 předtím bez kvalifikační zkoušky" },
      { "Instruktor": "24.5.1983" },
      { "BO": "30.6.1996" }
    ],
    info: "TWR LKPO: 1984. Vedoucí stanoviště: 1960 - 1975",
    image: "",
    imageDescription: ""
  },
  {
    bio: {
      name: "František Šindler",
      dob: "17.9.1936",
      dod: "31.12.2016",
      nastup: "1.6.1962",
      odchod: "1.1.1997 důchod"
    },
    licence: {
      licences: [
        { "TWR": "12.4.1965" },
        { "APP": "12.4.1965" },
        { "radar": "22.9.1967" },
        { "PAR": "21.1.1969" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [
      { "SC": "30.10.1979 předtím výkon bez kvalifikační zkoušky" }
    ],
    info: "TWR LKPO, LKZA: 1984. Vedoucí stanoviště: 1.3.1975 – 31.3.1992",
    image: "",
    imageDescription: ""
  },
  {
    bio: {
      name: "Jan Pečenka",
      dob: "5.6.1938",
      dod: "",
      nastup: "14.9.1964",
      odchod: "1966"
    },
    licence: {
      licences: [],
      datum_ukonceni: ""
    },
    instruktor: [],
    info: "Odešel během zácviku v r. 1966 do LKPO a LKHO, kde získal kvalifikaci TWR/APP a střídavě pracoval na obou letištích. Od 1.1.1995 odešel na SAR Praha.",
    image: "fotky/ATCO List/5_IMG_20250829_224202.jpg",
    imageDescription: "Jan Pečenka"
  },
  {
    bio: {
      name: "Bohumír Trojčínský",
      dob: "23.3.1939",
      dod: "4/2021",
      nastup: "říjen 1971",
      odchod: "1977"
    },
    licence: {
      licences: [
        { "TWR": "1972" },
        { "APP": "1972" },
        { "radar": "1973" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [],
    info: "Přišel z armády jako vojenský pilot – stíhač a odešel v r. 1977 do Air Vítkovice jako pilot. Od r. 1993 Air Ostrava, 1996 IGEC, v r. 1997 důchod, ale pracoval dále v Air Ostrava a od r. 2000 Job Air, Let's Fly.",
    image: "",
    imageDescription: ""
  },
  {
    bio: {
      name: "František Jež",
      dob: "25.9.1939",
      dod: "17.6.2009",
      nastup: "1967",
      odchod: "1971"
    },
    licence: {
      licences: [
        { "TWR": "1968" },
        { "APP": "1968" },
        { "radar": "1969" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [],
    info: "Přišel z Kunovic v r. 1967. Odešel po dohodě v r. 1971 do Vodochod. Od r. 1975 náčelník letiště Aero Vodochody, od r. 1980 – 1998 radiodůstojník Československé (později České) námořní plavby.",
    image: "",
    imageDescription: ""
  },
  {
    bio: {
      name: "Jiří Ševčík",
      dob: "1941",
      dod: "",
      nastup: "září 1964",
      odchod: "1970"
    },
    licence: {
      licences: [
        { "TWR": "2.11.1965" },
        { "APP": "2.11.1965" },
        { "radar": "22.9.1967" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [],
    info: "Odešel v r. 1970 k ČSA jako navigátor na IL-62.",
    image: "fotky/ATCO List/6_IMG_20250829_224202.jpg",
    imageDescription: "Jiří Ševčík"
  },
  {
    bio: {
      name: "Josef Brázda",
      dob: "15.6.1943",
      dod: "",
      nastup: "září 1964",
      odchod: "1972"
    },
    licence: {
      licences: [
        { "TWR": "červen 1966" },
        { "APP": "červen 1966" },
        { "radar": "22.9.1967" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [],
    info: "Odešel v r. 1972 k ČSA, 1.7.1975 získal licenci dopravního pilota. Odešel do důchodu v r. 2006 jako kapitán na B-737.",
    image: "",
    imageDescription: ""
  },
  {
    bio: {
      name: "Ivan Šmíd",
      dob: "25.6.1943",
      dod: "",
      nastup: "19.1.1967",
      odchod: "1973"
    },
    licence: {
      licences: [
        { "TWR": "9.1.1969" },
        { "APP": "9.1.1969" },
        { "radar": "1970" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [],
    info: "Před odchodem pracoval jako asistent ředitele letiště Mošnov (1970-1973). Odešel v listopadu 1973 do Hradce Králové do dopravního podniku, kde později pracoval jako ředitel.",
    image: "",
    imageDescription: ""
  },
  {
    bio: {
      name: "Pavel Ksiażek",
      dob: "7.11.1943",
      dod: "10.3.2016",
      nastup: "15.10.1964",
      odchod: "2008"
    },
    licence: {
      licences: [
        { "TWR": "2.11.1965" },
        { "APP": "2.11.1965" },
        { "radar": "22.9.1967" },
        { "PAR": "12.12.1977" }
      ],
      datum_ukonceni: "11/2008"
    },
    instruktor: [
      { "SC": "13.5.1986" },
      { "Instruktor": "8.6.1993" },
      { "OJTI": "3.3.2000" },
      { "BO": "17.3.1982" }
    ],
    info: "TWR LKPO, LKZA: 1984. Vedoucí stanoviště: 1.1.1994 – 31.12.2008. V důchodu pokračoval v práci pro ŘLP NA vyhodnocování systému P3D k použití jako pozemního radaru, zaměstnán pod DPLR",
    image: "fotky/ATCO List/7_IMG_20250829_224202.jpg",
    imageDescription: "Pavel Ksiażek"
  },
  {
    bio: {
      name: "Josef Škrabálek",
      dob: "9.6.1944",
      dod: "17.10.2019",
      nastup: "19.1.1968",
      odchod: "2004"
    },
    licence: {
      licences: [
        { "TWR": "9.1.1969" },
        { "APP": "9.1.1969" },
        { "radar": "1970" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [],
    info: "Od r.1970 – 1973 asistent ředitele letiště Mošnov a od r. 1974 – 1992 vedoucí ZLS letiště Ostrava, pak od 1.12.1992 jako vojenský řídící letového provozu v Mošnově, od r. 1993 v Přerově a od r. 1994 jako vedoucí vojenského stanoviště služby řízení letového provozu v Přerově, od r. 2004 v důchodu, ale dále pracoval jako občanský zaměstnanec - instruktor na vojenské LŠ v Ruzyni. Jeho syn Roman pracuje u ŘLP Ostrava jako technik",
    image: "",
    imageDescription: ""
  },
  {
    bio: {
      name: "Jan Holenda",
      dob: "23.12.1944",
      dod: "",
      nastup: "2.10.1967",
      odchod: "2000"
    },
    licence: {
      licences: [
        { "TWR": "29.9.1971" },
        { "APP": "29.9.1971" },
        { "radar": "4.6.1973" },
        { "PAR": "12.12.1977" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [
      { "BO": "1982" }
    ],
    info: "TWR LKPO, LKZA: 1984. Dozorčí APN: 21.10.1967. Odešel po dohodě v r. 2000",
    image: "fotky/ATCO List/8_IMG_20250829_224202.jpg",
    imageDescription: "Jan Holenda"
  },
  {
    bio: {
      name: "Josef Ogurek",
      dob: "31.8.1946",
      dod: "",
      nastup: "9.10.1967",
      odchod: "2010 důchod"
    },
    licence: {
      licences: [
        { "TWR": "17.12.1970" },
        { "APP": "17.12.1970" },
        { "radar": "4.6.1973" },
        { "PAR": "18.5.1987" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [
      { "SC": "15.12.1986" },
      { "Instruktor": "1.2.1996" },
      { "OJTI": "3.3.2000" },
      { "BO": "1982" },
      { "AO": "11.6.2003" }
    ],
    info: "TWR LKPO, LKZA: 1984. Dozorčí APN: 9.10.1967",
    image: "",
    imageDescription: ""
  },
  {
    bio: {
      name: "Bohumil Knoflíček",
      dob: "10.5.1948",
      dod: "",
      nastup: "1.10.1972",
      odchod: "31.12.2013 důchod"
    },
    licence: {
      licences: [
        { "TWR": "14.7.1975" },
        { "APP": "14.7.1975" },
        { "radar": "12.12.1977" },
        { "PAR": "18.5.1987" }
      ],
      datum_ukonceni: "prosinec 2010"
    },
    instruktor: [
      { "BO": "1982" },
      { "BO": "10.6.2003" }
    ],
    info: "TWR LKPO, LKZA: 1984. Dozorčí APN: 17.1.1973. Aktivní ŘLP licence ukončena v prosinci 2010, ale poté pokračuje v práci na ARO. Od dubna 2014 nastoupil na AFIS Přerov",
    image: "",
    imageDescription: ""
  },
  {
    bio: {
      name: "Milan Dohnal",
      dob: "17.5.1949",
      dod: "17.4.2020",
      nastup: "1.10.1972",
      odchod: "1.4.2013 důchod"
    },
    licence: {
      licences: [
        { "TWR": "1.7.1974" },
        { "APP": "1.7.1974" },
        { "radar": "14.4.1975" },
        { "PAR": "24.3.1986" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [
      { "SC": "13.5.1986" },
      { "BO": "1982" }
    ],
    info: "TWR LKPO, LKZA: 1984. Dozorčí APN: 31.1.1973. Ze zdravotních důvodů přešel od 1.1.2000 na divizi DPLR, Praha. 1.4.2014 nastoupil jako pseudopilot na simulátor",
    image: "fotky/ATCO List/9_IMG_20250829_224202.jpg",
    imageDescription: "Milan Dohnal"
  },
  {
    bio: {
      name: "Rostislav Máca",
      dob: "30.11.1950",
      dod: "",
      nastup: "2.4.1973",
      odchod: "1.5.2013 důchod"
    },
    licence: {
      licences: [
        { "TWR": "11.7.1979" },
        { "APP": "11.7.1979" },
        { "radar": "18.11.1994" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [
      { "SC": "24.1.2006" }
    ],
    info: "Nástup: 2.4.1973 / 1.6.1992. Dozorčí APN: 1.11.1974. Vedoucí regionální odborové jednotky CZATCA. 1992-2000 zástupce pro regionální letiště ve výkonné radě CZATCA. Propuštěn z organizačních důvodů v r. 1982 - přešel jako řlp nejprve do Vodochod, pak do Otrokovic a v r. 1992 se vrátil zpět do Ostravy. Na letišti působí dále jako pilot u El Montex a Aeroklubu, Od 2014 pseudopilot LKMT. Taktéž kapitán pro jachty",
    image: "",
    imageDescription: ""
  },
  {
    bio: {
      name: "Radovan Kubík",
      dob: "11.9.1951",
      dod: "",
      nastup: "15.5.1978",
      odchod: "2013 důchod"
    },
    licence: {
      licences: [
        { "TWR": "29.8.1979" },
        { "APP": "17.3.1981" },
        { "radar": "17.3.1981" },
        { "PAR": "17.3.1981" },
        { "TWR Žilina": "17.3.1983" },
        { "TWR/APP LKMT": "6.9.1989" },
        { "radar LKMT": "6.9.1989" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [
      { "SC": "10.12.1982" },
      { "BO": "2.6.1982" }
    ],
    info: "Přišel ze Sliače v r. 1989 a v r. 1992 přešel do funkce jako vedoucí ZLS střediska Ostrava později vedoucí SLNS Ostrava. V roce 2010 při restrukturalizaci stanoviště DRSL se stal metodikem regionálních letišť",
    image: "fotky/ATCO List/10_IMG_20250829_224202.jpg",
    imageDescription: "Radovan Kubík"
  },
  {
    bio: {
      name: "Ivan Kocián",
      dob: "11.5.1952",
      dod: "",
      nastup: "1.9.1977",
      odchod: "1982"
    },
    licence: {
      licences: [
        { "TWR": "11.7.1979" },
        { "APP": "11.7.1979" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [],
    info: "Z organizačních důvodů propuštěn v r.1982, odešel k armádě a jako vojenský řlp pracoval nejprve v Ostravě, pak v Brně na MTWR, později pracoval v zahraničních misích armády (Afrika)",
    image: "",
    imageDescription: ""
  },
  {
    bio: {
      name: "Zdeněk Záruba",
      dob: "13.12.1953",
      dod: "",
      nastup: "1.5.1977",
      odchod: "1.1.2017 důchod"
    },
    licence: {
      licences: [
        { "TWR LKHO": "16.8.1979" },
        { "APP LKHO": "16.8.1979" },
        { "radar LKHO": "19.4.1988" },
        { "PAR LKHO": "15.2.1990" },
        { "TWR/APP LKMT": "11.12.2001" },
        { "radar LKMT": "11.12.2001" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [
      { "SC": "8.7.2003" },
      { "OJTI": "25.7.2006" }
    ],
    info: "Nástup:1.5. 1977 / 1.5.2001. Předtím jako řlp v Holešově, Otrokovicích a Kunovicích, přišel do Ostravy v r. 2001",
    image: "",
    imageDescription: ""
  },
  {
    bio: {
      name: "Jiří Sekyra",
      dob: "31.8.1960",
      dod: "",
      nastup: "1986",
      odchod: "1999"
    },
    licence: {
      licences: [
        { "TWR": "18.6.1987" },
        { "APP": "18.6.1987" },
        { "radar": "1988" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [
      { "SC": "23.4.1992" },
      { "Instruktor": "červen 1995" },
      { "BO": "29.3.1989" }
    ],
    info: "Vedoucí stanoviště: 1.4.1992 – 1993. Odešel po dohodě v r. 1999 na APP/TWR Praha",
    image: "fotky/ATCO List/11_IMG_20250829_224202.jpg",
    imageDescription: "Jiří Sekyra"
  },
  {
    bio: {
      name: "Drahomír Hanák",
      dob: "9.3.1963",
      dod: "",
      nastup: "1986",
      odchod: "1994"
    },
    licence: {
      licences: [
        { "TWR": "září 1987" },
        { "APP": "září 1987" },
        { "radar": "1988" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [
      { "BO": "25.4.1989" }
    ],
    info: "Odešel po dohodě v r. 1990 do Holešova a v r. 1994 do Prahy na TWR/APP",
    image: "",
    imageDescription: ""
  },
  {
    bio: {
      name: "Petr Jurasz",
      dob: "8.1.1964",
      dod: "",
      nastup: "1.9.1992",
      odchod: ""
    },
    licence: {
      licences: [
        { "TWR": "14.2.1994" },
        { "APP": "14.2.1994" },
        { "radar": "17.2.1995" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [
      { "SC": "14.5.2002" },
      { "OJTI": "19.8.2004" }
    ],
    info: "",
    image: "",
    imageDescription: ""
  },
  {
    bio: {
      name: "Rostislav Stoklasa",
      dob: "20.8.1964",
      dod: "",
      nastup: "1.9.1987",
      odchod: ""
    },
    licence: {
      licences: [
        { "TWR": "8.6.1993" },
        { "APP": "8.6.1993" },
        { "radar": "21.10.1994" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [
      { "SC": "21.2.2002" },
      { "OJTI": "3.3.2000" }
    ],
    info: "Nástup: 1.9.1987 / 1.3.1993. Odešel během zácviku v r. 1988 a vrátil se zpět v r. 1993",
    image: "fotky/ATCO List/12_IMG_20250829_224202.jpg",
    imageDescription: "Rostislav Stoklasa"
  },
  {
    bio: {
      name: "Zdeněk Proske",
      dob: "12.11.1965",
      dod: "",
      nastup: "1.9.1993",
      odchod: ""
    },
    licence: {
      licences: [
        { "TWR": "16.1.1995" },
        { "APP": "16.1.1995" },
        { "radar": "1.11.1995" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [
      { "SC": "15.2.2002" },
      { "OJTI": "26.1.2001" },
      { "Instruktor": "26.11.2003" }
    ],
    info: "Administrátor systému: 1997. Od ledna 2009 vedoucí stanoviště. 1.6.2016 náměstek vedoucí DRSL (Ostrava)",
    image: "",
    imageDescription: ""
  },
  {
    bio: {
      name: "Martin Kožušník",
      dob: "24.5.1968",
      dod: "",
      nastup: "1.9.1992",
      odchod: ""
    },
    licence: {
      licences: [
        { "TWR": "14.2.1994" },
        { "APP": "14.2.1994" },
        { "radar": "17.2.1995" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [
      { "SC": "16.1.2002" },
      { "OJTI": "25.4.2001" },
      { "Instruktor": "7.2.2007" }
    ],
    info: "",
    image: "",
    imageDescription: ""
  },
  {
    bio: {
      name: "Petr Friedl",
      dob: "7.6.1970",
      dod: "",
      nastup: "1.2.2000",
      odchod: ""
    },
    licence: {
      licences: [
        { "TWR": "5.6.2001" },
        { "APP": "5.6.2001" },
        { "radar": "5.6.2001" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [
      { "SC": "14.11.2007" },
      { "OJTI": "květen 2010" }
    ],
    info: "",
    image: "fotky/ATCO List/13_IMG_20250829_224202.jpg",
    imageDescription: "Petr Friedl"
  },
  {
    bio: {
      name: "Rostislav Stryk",
      dob: "8.1.1972",
      dod: "",
      nastup: "1.2.2000",
      odchod: ""
    },
    licence: {
      licences: [
        { "TWR": "5.6.2001" },
        { "APP": "5.6.2001" },
        { "radar": "5.6.2001" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [
      { "SC": "14.11.2007" },
      { "OJTI": "2008" },
      { "Instruktor": "2/2009" }
    ],
    info: "Člen výkonné rady CZATCA za regionální letiště 2010-2014. Pilot kluzáků, PPL",
    image: "",
    imageDescription: ""
  },
  {
    bio: {
      name: "Vít Novozámský",
      dob: "10.11.1973",
      dod: "",
      nastup: "1.5.2001",
      odchod: "1.10.2007"
    },
    licence: {
      licences: [
        { "TWR": "6.12.2002" },
        { "APP": "6.12.2002" },
        { "radar": "6.12.2002" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [
      { "SC LKTB": "6/2013" }
    ],
    info: "Odchod do Brna 1.10.2007. Předseda CZATCA LKTB 11/2010. Člen výkonné rady CZATCA za regionální letiště od 11/2013. Průkaz PPL, ULL, s paraglidem; MTB",
    image: "",
    imageDescription: ""
  },
  {
    bio: {
      name: "Jan Lány",
      dob: "6.8.1977",
      dod: "",
      nastup: "1.5.2003",
      odchod: "říjen 2010"
    },
    licence: {
      licences: [
        { "TWR": "24.11.2004" },
        { "APP": "24.11.2004" }
      ],
      datum_ukonceni: "říjen 2010"
    },
    instruktor: [],
    info: "Ukončený v říjnu 2010, protože odešel na stanoviště APP-TWR Praha, kde ovšem neukončil výcvik. V roce 2011 nastoupil na UCL. Poté Vodochody řídící pak DHL. Distance výuka umbo školník",
    image: "fotky/ATCO List/14_IMG_20250829_224202.jpg",
    imageDescription: "Jan Lány"
  },
  {
    bio: {
      name: "Václav Vojna",
      dob: "20.11.1977",
      dod: "",
      nastup: "1.2.2004",
      odchod: ""
    },
    licence: {
      licences: [
        { "TWR": "30.10.2008" },
        { "APP": "30.10.2008" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [],
    info: "Nástup 1.2.2004 pro ACC Praha, konec 2005, poté lektor na Letecké škole, návrat do výcviku 1.6.2007 pro TWR/APP LKMT. Vedoucí LWS LKMT, 1.6.2016 vedoucí výcviku ckmt",
    image: "",
    imageDescription: ""
  },
  {
    bio: {
      name: "Ian Koval",
      dob: "11.3.1978",
      dod: "",
      nastup: "1.2.2005",
      odchod: ""
    },
    licence: {
      licences: [
        { "TWR": "21.11.2006" },
        { "APP": "21.11.2006" },
        { "radar": "21.11.2006" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [
      { "SC": "12/2012" }
    ],
    info: "",
    image: "",
    imageDescription: ""
  },
  {
    bio: {
      name: "Martin Klumpler",
      dob: "27.3.1979",
      dod: "",
      nastup: "1.2.2005",
      odchod: ""
    },
    licence: {
      licences: [
        { "TWR": "13.10.2006" },
        { "APP": "13.10.2006" },
        { "radar": "13.10.2006" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [
      { "SC": "1.11.2012" },
      { "OJTI": "únor 2010" },
      { "Instruktor": "" },
      { "ASAE SeOC": "31.1.21" }
    ],
    info: "",
    image: "fotky/ATCO List/15_IMG_20250829_224202.jpg",
    imageDescription: "Martin Klumpler"
  },
  {
    bio: {
      name: "Ondřej Wzatek",
      dob: "24.03.1980",
      dod: "",
      nastup: "1.2.2009",
      odchod: "23.11.2018"
    },
    licence: {
      licences: [
        { "TWR": "5.10.2010" },
        { "APP": "5.10.2010" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [],
    info: "",
    image: "",
    imageDescription: ""
  },
  {
    bio: {
      name: "Jiří Náhlovský",
      dob: "25.3.1980",
      dod: "",
      nastup: "1.2.2005",
      odchod: ""
    },
    licence: {
      licences: [
        { "TWR": "31.10.2008" },
        { "APP": "31.10.2008" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [],
    info: "Nástup 1.2.2005 pro ACC Praha, konec 2006, návrat do výcviku 1.6.2007 pro TWR/APP LKMT",
    image: "",
    imageDescription: ""
  },
  {
    bio: {
      name: "Martin Břuska",
      dob: "27.3.1981",
      dod: "",
      nastup: "1.12.2007",
      odchod: "únor 2009"
    },
    licence: {
      licences: [],
      datum_ukonceni: ""
    },
    instruktor: [],
    info: "V únoru 2009 výcvik ukončen, nezískal licenci LKMT. Od 10.8.2009 nastoupil do výcviku v Kunovicích, kde získal licenci 11.2.2010. Od 1.5.2012 je vedoucím stanoviště LKKU",
    image: "fotky/ATCO List/16_IMG_20250829_224202.jpg",
    imageDescription: "Martin Břuska"
  },
  {
    bio: {
      name: "Marcel Poledník",
      dob: "26.10.1982",
      dod: "",
      nastup: "1.8.2005",
      odchod: ""
    },
    licence: {
      licences: [
        { "TWR": "30.4.2007" },
        { "APP": "30.4.2007" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [],
    info: "Od 2007 pilot ULL. 2010 se přestěhoval do samotné blízkosti letiště, Petřvaldu. Pilot ULL, PPL a školí se na IFR. 12/19 výcvik na Lou ACC 1.11.19",
    image: "",
    imageDescription: ""
  },
  {
    bio: {
      name: "Jiří Polmann",
      dob: "19.8.1985",
      dod: "",
      nastup: "1.2.2009",
      odchod: ""
    },
    licence: {
      licences: [
        { "TWR": "5.10.2010" },
        { "APP": "5.10.2010" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [],
    info: "",
    image: "",
    imageDescription: ""
  },
  {
    bio: {
      name: "Petr Lakva",
      dob: "1987",
      dod: "",
      nastup: "1.12.2012",
      odchod: ""
    },
    licence: {
      licences: [
        { "TWR": "10/2012" },
        { "APP": "10/2012" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [
      { "OP/GMDSS": "1.9.19" }
    ],
    info: "1.2.2019 CZATCA ěšot",
    image: "fotky/ATCO List/17_IMG_20250829_224202.jpg",
    imageDescription: "Petr Lakva"
  },
  {
    bio: {
      name: "Rostislav Jiříčný",
      dob: "15.4.1988",
      dod: "",
      nastup: "1.9.2012",
      odchod: ""
    },
    licence: {
      licences: [
        { "TWR": "12.8.2014" },
        { "APP": "12.8.2014" }
      ],
      datum_ukonceni: ""
    },
    instruktor: [
      { "SC": "2019" },
      { "OJTI/STDI": "1.4.2018" }
    ],
    info: "Pilot PPL, IFR pilot od 2015, ATPL",
    image: "",
    imageDescription: ""
  },
  {
    bio: {
      name: "Petr Takač",
      dob: "31.5.1987",
      dod: "",
      nastup: "1.9.2012",
      odchod: ""
    },
    licence: {
      licences: [],
      datum_ukonceni: ""
    },
    instruktor: [],
    info: "Nástup 1.9.2012 pro ACC, později APP/TWR LKMT. V zácviku na stanovišti od 1.7.2015",
    image: "fotky/ATCO List/18_IMG_20250829_224202.jpg",
    imageDescription: "Petr Takač"
  },
  {
    bio: {
      name: "Štěpán Obrovský",
      dob: "23.7.1990",
      dod: "",
      nastup: "1.9.2012",
      odchod: ""
    },
    licence: {
      licences: [],
      datum_ukonceni: ""
    },
    instruktor: [
      { "DOT/STDI": "5/2020" }
    ],
    info: "Nástup 1.9.2012 pro ACC, později APP/TWR LKMT. V zácviku na stanovišti od 1.7.2015. Pilot PPL + SE a ME endorsement. ATPL ADO/APT LKMT kkkm. SCB CJJ 29.4.2020",
    image: "",
    imageDescription: ""
  }
];