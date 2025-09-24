// Historie data - Complete history data structure for historie.html
const HISTORIE_DATA = {
  title: 'Historie řízení letového provozu v Ostravě',
  subtitle: 'ŘÍZENÍ LETOVÉHO PROVOZU V OSTRAVĚ V BĚHU ČASU',
  description: 'Přehled historie řízení letového provozu na letišti Ostrava od roku 1936 do současnosti.',

  // Navigation structure matching the HTML sidebar
  navigation: [
    { id: 'hrabuvka-1936-1959', label: '1936-1959: Hrabůvka', href: '#hrabuvka-1936-1959' },
    { id: 'gonio', label: 'GONIO na Hrabůvce', href: '#gonio' },
    { id: 'mosnov-1959-1969', label: '1959-1969: Počátky Mošnov', href: '#mosnov-1959-1969' },
    { id: 'periode-1968-1989', label: '1968-1989: Sovětská éra', href: '#periode-1968-1989' },
    { id: 'periode-1990-1999', label: '1990-1999: Transformace', href: '#periode-1990-1999' },
    { id: 'periode-2000-2009', label: '2000-2009: Modernizace', href: '#periode-2000-2009' },
    { id: 'periode-2010-2019', label: '2010-2019: Velké změny', href: '#periode-2010-2019' },
    { id: 'periode-2020-2026', label: '2020-2026: Současnost', href: '#periode-2020-2026' }
  ],

  // All historical sections in chronological order
  sections: [
    // Hrabůvka 1936-1959
    {
      id: 'hrabuvka-1936-1959',
      title: 'LETIŠTĚ HRABŮVKA, 1936 - 1959',
      period: '1936-1959',
      content: {
        description: [
          'S výstavbou letiště v katastrálním území Hrabůvky počítalo město Ostrava už od roku 1925. Samotné stavební práce se realizovaly roku 1936, v květnu téhož roku zde přistálo první letadlo. Fungoval zde Ostravský aeroklub.',
          'Za druhé světové války sloužilo letiště Hrabůvka jako základna Luftwaffe.',
          'V 50. letech zde stály čtyři hangáry, z nichž jeden se dochoval dodnes a slouží jako prodejna potravin (ulice Václava Jiřikovského). Letiště muselo na přelomu 50. a 60. let ustoupit bytové výstavbě v oblasti dnešního obvodu Ostrava-Jih. Jeho bývalá plocha je zastavěna obytnými domy. Jeho existenci připomíná název ulice U Letiště a jméno restaurace Dakota.',
          'Po druhé světové válce bylo letiště prohlášeno za státní a bylo napojeno na vnitrostátní dopravu Československých aerolinií. Roku 1946 existovala linka do Prahy a krátce nato i do Zlína, Olomouce, Brna a Piešťan.',
          'Od roku 1951 se létalo nově i do Košic. Od počátku 50. let bylo jasné, že letiště je nevhodně situováno, má malé rozměry a řadu překážek. Již od roku 1947 se počítalo s tím, že by v rozmezí 5-6 let mělo vzniknout nové letiště v Hrabové. Československé aerolinie kvůli nedostatku prostoru využívaly budovu dnešní restaurace Dakota pro účely letecké přepravy. prostor letiště začínal být čím dál více nevhodným.',
          'Aerolinie letiště opustily v roce 1959, kdy bylo zprovozněno nové letiště v Mošnově. Krajský aeroklub Svazarmu se musel na začátku podzimu 1961 přestěhovat na letiště u Dolního Benešova, jelikož v roce 1960 bylo rozhodnuto o stavbě panelového sídliště na území dosluhujícího letiště Hrabůvka.'
        ]
      },
      images: [
        {
          src: 'assets/images/historie/image1.jpeg',
          alt: 'Bývalý hangár v Hrabůvce',
          caption: 'Bývalý hangár v Hrabůvce'
        },
        {
          src: 'assets/images/historie/image2.jpeg',
          alt: 'Restaurace Dakota',
          caption: 'Restaurace Dakota, dříve využívaná jako provozní budova ČSA'
        }
      ]
    },

    // GONIO
    {
      id: 'gonio',
      title: 'GONIO na Hrabůvce',
      period: '1929+',
      content: {
        description: [
          'Od roku 1929 se začaly budovat i civilní pozemní rádiové zaměřovače (goniometrické stanice - gonia) na důležitých dopravních letištích. Síť zaměřovačů umožnila zjišťovat polohu letadel a navádět je při přiblížení na přistání, a to i za zhoršených meteorologických podmínek a v noci.',
          'Goniometrické stanice posádkám letadel nenařizovaly směr a výšku letu, ale poskytovaly pouze ty údaje, o které byly požádány. Veškerá odpovědnost za dosažení cíle a bezpečný let byla tehdy ještě na posádkách letadel. Princip zaměřování byl takový, že stanoviště zjistilo úhel, pod kterým přicházejí signály ze zaměřovaného letadla, a tento údaj se vynesl na pracovní mapu velkého měřítka. Totéž učinilo další stanoviště, a v průsečíku těchto úhlů byla vyznačena okamžitá poloha zaměřovaného letadla. Palubní radiotelegrafista dostal odpověď. Společným jazykem mezi pozemními a palubními stanicemi byl mezinárodní Q-kód, doplněný mezinárodními radiotelegrafními zkratkami.'
        ]
      },
      images: [
        {
          src: 'assets/images/historie/image3.jpeg',
          alt: 'Goniometrická stanice',
          caption: 'Historické fotografie goniometrické stanice'
        },
        {
          src: 'assets/images/historie/image4.jpeg',
          alt: 'Technické vybavení GONIO',
          caption: 'Technické vybavení GONIO'
        }
      ]
    },

    // Mošnov 1959-1969
    {
      id: 'mosnov-1959-1969',
      title: 'LETIŠTĚ MOŠNOV (LKMT, OSR) OD 1959',
      period: '1959-1969',
      content: {
        description: [
          'Historie mezinárodního letiště Ostrava-Mošnov sahá do začátku 20. století. V té době žili v v nedaleké obci Harty bratři Žurovci. Ti byli v letech 1909 až 1914 regionálními průkopníky letectví. Bohužel první světová válka zabránila dalšímu pokračování letectví na Ostravsku.',
          'Mošnovské letiště bylo poprvé využito až za druhé světové války. Po okupaci Československa v roce 1939 zde Luftwaffe postavila polní letiště v rámci svých invazních příprav na Polsko. Po válce letiště chvíli využívala československá letecká divize.',
          'Novodobá historie začíná v roce 1956, kdy byla zahájena výstavba letiště tak, jak ho známe dnes. Letiště zpočátku mělo sloužit pro armádní účely, nicméně 16.10. 1959 se na letišti zahájil i civilní letecký provoz ČSA. Létaly se převážně vnitrostátní lety, nicméně nepravidelně byly obsluhovány i zahraniční lety.'
        ],
        timeline: [
          {
            year: '1957',
            events: ['16.10. byl zahájen civilní provoz s Tu 104 A Il 14 a 18']
          },
          {
            year: '1960-1970',
            events: [
              '7.5. 1965 Zahájen provoz PAR RP2 a přehledový RL 2',
              '16.6. 1966 otevřena letištní hala, dnes příletová'
            ]
          }
        ],
        additionalInfo: [
          'V šedesátých a sedmdesátých letech bylo v provozu také aerotaxi, které se těšilo velké popularitě. Vojenská báze v Mošnově skončila v roce 1993 a od té doby se jedná pouze o civilní letiště. Od roku 2004 je provozovatelem letiště společnost Letiště Ostrava, a.s..'
        ]
      },
      images: [
        {
          src: 'assets/images/historie/image5.jpeg',
          alt: 'Raná terminálová budova',
          caption: 'Vojenská TWR, bílá věž'
        },
        {
          src: 'assets/images/historie/image6.jpeg',
          alt: 'Stanoviště APP',
          caption: 'Stanoviště APP, Książek a Janaček'
        },
        {
          src: 'assets/images/historie/image7.jpeg',
          alt: 'Interiér odletové haly',
          caption: 'Interiér odletové haly v sedmdesátých letech, kdy létání bylo luxus'
        }
      ]
    },

    // Období 1968-1989
    {
      id: 'periode-1968-1989',
      title: 'Období 1968-1989',
      period: '1968-1989',
      content: {
        timeline: [
          {
            year: '1968',
            events: [
              '20.-21.8. 1968 Obsazení letiště Sovětskou armádou letadly An 12'
            ]
          },
          {
            year: '1969',
            events: [
              '10/69 podnik koupil chalupu na Morávce, později přešla do majetku letiště Ostrava, ještě později prodána do soukromých rukou.'
            ]
          },
          {
            year: '1970-1980',
            events: [
              '1970-72 rekonstrukce TWR LKMT',
              '1977 zahájily provoz Letecká doprava Vítkovice, od roku 1995 do 2000 Air Ostrava'
            ]
          },
          {
            year: '1980',
            events: [
              '1980 RL2 a RP2 jsou nahrazeny RL41 a RP 36',
              '1981 Instalován ILS 22 LKMT',
              'Zprovozněno výcvikové středisko na staré Ruzyni'
            ]
          },
          {
            year: '1982',
            events: [
              'personální čistka na LKMT, propuštěni Máca, Kocián, Kočvara, Eva Forchtgottová/Malchárková',
              'Staňková přešla na ředitelství do Prahy'
            ]
          },
          {
            year: '1984',
            events: [
              'generální oprava RWY LKMT, provoz přesunut do LKPO (mezinárodní doprava Tu 134) a LKZA (vnitro YK40)'
            ]
          },
          {
            year: '1989',
            events: [
              'Mošnov se stává mezinárodním letištěm',
              '6/1989 na LKMT poprvé přistála An 225 Mrija, letecký den s Květy, možnost prohlídky letadla na APN central.'
            ]
          }
        ]
      },
      images: [
        {
          src: 'assets/images/historie/image8.jpeg',
          alt: 'Rudolf Kachel',
          caption: 'Rudolf Kachel, APP na staré věži'
        },
        {
          src: 'assets/images/historie/image9.jpeg',
          alt: 'An 225 Mrija',
          caption: 'An 225 Mrija - Největší dopravní letadlo na světě. Záběry jsou z jejího druhého příletu v lednu 2015. Později byla zničena ruskými výsadkáři při přepadu jejího domovského letiště Hostomel / UA za války v únoru 2022'
        }
      ]
    },

    // Období 1990-1999
    {
      id: 'periode-1990-1999',
      title: 'Období 1990-1999',
      period: '1990-1999',
      content: {
        timeline: [
          {
            year: '1991',
            events: [
              '8/1991 Otevření svobodného bezcelního pásma Free Zone Ostrava',
              '31.8.1991 Policejní razie Červená rtuť na stanovišti TWR LKMT'
            ]
          },
          {
            year: '1992',
            events: [
              '1992 Stávková pohotovost řídících letového provozu kvůli zvýšení platů, druhá příprava na stávku proběhla 2000/01, poté došlo k dramatickému zvýšení platů. A také ke změně zákona, ATCO mohou stávkovat pouze kvůli pracovním podmínkám, nikoli za platy.'
            ]
          },
          {
            year: '1993',
            events: [
              '31.12.1993 opustila letiště armáda, letiště se stalo čistě civilním.'
            ]
          },
          {
            year: '1994',
            events: [
              'TWR/APP přestěhována do nových prostor nad hasičárnou. Zajímavost, výhled pouze 270˚, východní strana je zeď.'
            ]
          },
          {
            year: '1995',
            events: [
              'Z podnikové dopravy Air vítkovice vznikla civilní dopravní společnost Air Ostrava. Operovala hlavně lety do Prahy, ale i Mnichova, Vídně a Amsterdamu'
            ]
          }
        ]
      },
      images: [
        {
          src: 'assets/images/historie/image10.jpeg',
          alt: 'Nová budova TWR/APP',
          caption: 'Nová budova TWR/APP nad hasičárnou'
        },
        {
          src: 'assets/images/historie/image11.jpeg',
          alt: 'Air Ostrava',
          caption: '90. léta, odbavovací hala APN central, letadla Air Ostrava'
        }
      ]
    },

    // Období 2000-2009
    {
      id: 'periode-2000-2009',
      title: 'Období 2000-2009',
      period: '2000-2009',
      content: {
        timeline: [
          {
            year: '2000',
            events: [
              'Zkrachovala AIR OSTRAVA.',
              'Zavedení nového zobrazovacího systému Eurocat 2000.'
            ]
          },
          {
            year: '2001',
            events: [
              'Proběhla rekonstrukce prostor TWR, takže jsme se znovu dvakrát stěhovali, zpět na starou bílou věž a zase zpátky.'
            ]
          },
          {
            year: '2002',
            events: [
              'Prudký nárůst platů dvakrát 20% na jaře a na podzim.'
            ]
          },
          {
            year: '2003',
            events: [
              'Digitalizace primárního radaru.',
              'Otevření přístavby odletové haly LKMT.',
              '8/2003 Rekonstrukce letištní haly LKMT.',
              'Koncem roku armáda opouští letiště.',
              '1. ročník dnů NATO na letišti Mošnov'
            ]
          },
          {
            year: '2004',
            events: [
              'Letiště bylo převedeno do vlastnictví Moravskoslezského kraje',
              'Zahájení provozu stacionárního radaru P3D s pokrytím sekundárního signálu už od země.',
              'Navázali jsme kontakty s polskými řídícími v Katovicích a Krakově. První setkání proběhlo právě na letišti EPKK.',
              '1.7. Letiště Mošnov se stává akciovou společností, 100% vlastník MS kraj'
            ]
          },
          {
            year: '2005-2009',
            events: [
              'Návštěva polských řídících u nás',
              'Zahájení výstavby nové odletové haly',
              'Letiště Mošnov se přejmenovalo na Letiště Leoše Janáčka',
              'Zprovozněn areál ŘLP v Jenči',
              '6/2006 První cykloakce LKMT Cup, jede se Poodří.',
              '13.12.2006 Je otevřena nová odletová hala.',
              '18.7.2009 Definitivní vyřazení radaru RL 41 z provozu, zůstává na původním místě jako muzejní exponát (do 22.2.2023)'
            ]
          }
        ]
      },
      images: [
        {
          src: 'assets/images/historie/image12.jpeg',
          alt: 'Briefing/ARO',
          caption: 'Briefing/ARO'
        },
        {
          src: 'assets/images/historie/image13.jpeg',
          alt: 'Simulátor APP',
          caption: 'Simulátor APP'
        },
        {
          src: 'assets/images/historie/image14.jpeg',
          alt: 'NATO days 2003',
          caption: '1. ročník dnů NATO na letišti Mošnov'
        }
      ]
    },

    // Období 2010-2019
    {
      id: 'periode-2010-2019',
      title: 'Období 2010-2019',
      period: '2010-2019',
      content: {
        timeline: [
          {
            year: '2010-2013',
            events: [
              '2/2010 TR8 uvedena po mnohých problémech do provozu',
              'Celý rok byl ve znamení důsledků krize z roku 2008, nastal výrazný pokles provozu.',
              '11/2012 Ukončení racionalizace APPs. Zahájení budování Supernízkých prostorů (SNS)'
            ]
          },
          {
            year: '2014',
            events: [
              'Konec AFIS na sportovních letištích, tuto službu může nově poskytovat pouze vycvičený a licencovaný personál.',
              '1.5. Zahájily provoz SNS. Jde o největší změnu poskytování služeb ATS na regionech, kdy se obsluhuje 1/3 republiky z každého regionu od země až do FL 125. Licence se nazývá TCL. Frekvence se změnila z 125,1 na 119,375 MHz.'
            ]
          },
          {
            year: '2015-2016',
            events: [
              '13.4.2015 zřízena železnice na LKMT.',
              '1.6.2016 Přestěhovali jsme se na novou TWR/APP LKMT, ještě 2 měsíce byl kontrolní provoz se staré TWR. Poté již jsme v novém.',
              '1.6. Byl zrušen místní briefing, byl přestěhován na centrální do Prahy.'
            ]
          },
          {
            year: '2017-2019',
            events: [
              '3/2017 představen projekt Harmonizace ŘLP, přestěhování SNS a APPs do Prahy',
              '5/2017 pohovory s řídícími LKMT o zájmu přechodu na TCC/TERM do PRG',
              '11/19 současným OJTI nebyly prodlouženy kvalifikace z důvodu odmítnutí podepsání dohody s podnikem o výcviku nových ATCO.'
            ]
          }
        ]
      },
      images: [
        {
          src: 'assets/images/historie/image15.jpeg',
          alt: 'Marcel Poledník',
          caption: 'Marcel Poledník řídí první lety na SNS'
        },
        {
          src: 'assets/images/historie/image16.jpeg',
          alt: 'Stavba nové věže',
          caption: 'Staví se nám nová věž - A je hotovo'
        },
        {
          src: 'assets/images/historie/image17.jpeg',
          alt: 'Nová TWR',
          caption: 'Nová TWR'
        }
      ]
    },

    // Období 2020-2026
    {
      id: 'periode-2020-2026',
      title: 'Období 2020-2026',
      period: '2020-2026',
      content: {
        timeline: [
          {
            year: '2020-2021: COVID-19',
            events: [
              'Polská společnost LOT nahrazuje ČSA na pravidelných linkách.',
              '3/2020 – 12/2021 Začíná koronavirové šílenství. Provoz spadl o 90%. ATCO byly odebrány 10% příplatky a byla technicky snížena mzda o 15% redukcí pracovního úvazku z 34 na 29 hodin týdně.',
              '27.2.2021 v LKMT končí APP, zavedeno SPO a ATCO/M.',
              'Zůstává služba TWR v CRT Mošnov do 2500 stop AMSL.'
            ]
          },
          {
            year: '2022',
            events: [
              '24.2.2022 zahájen provoz na novém zobrazovacím systému Top Sky – oblast /TR8 pro regiony. Začala válka na Ukrajině. Tím ovšem skončil covid.',
              'práce na projektu rekonstrukce RWY za cca. 2 mld. Kč',
              '29.12. jsme zrušili službu APP. Nově ji v sobě zahrnuje ACC TERM (APP+SNS ACC LOW).',
              'Volací znak Ostrava definitivně zaniká.'
            ]
          },
          {
            year: '2023-2025',
            events: [
              'Od 1/2023 platy a bonusy vráceny do původního stavu + 10% přidáno na ZMT',
              '3/2023 zahájena výstavba letištního cargoterminálu.',
              'ČSA definitivně ukončilo činnost',
              'Na tzv. Okách na severu letiště byl postaven nový hangár pro GA',
              'Po dlouhé době byl zahájen místní výcvik nového ATCO, Jana Fajkuse, poprvé pouze pro TWR. Výcvik byl úspěšně ukončen v září.',
              'V červenci 2025 byly zrušeny všechny zbývající NDB včetně našich markerů Nada a Rada'
            ]
          }
        ]
      },
      images: [
        {
          src: 'assets/images/historie/image18.png',
          alt: 'Pohled z věže na APN jih',
          caption: 'Pohled z věže na APN jih'
        },
        {
          src: 'assets/images/historie/image19.png',
          alt: 'Celkový pohled na letiště',
          caption: 'Pohled na APN central a jih, vlakové nádraží, odbavovací halu a hangár Job-Air v pozadí'
        },
        {
          src: 'assets/images/historie/image20.png',
          alt: 'Výstavba cargo terminálu',
          caption: 'Výstavba letištního cargoterminálu'
        }
      ]
    }
  ]
};