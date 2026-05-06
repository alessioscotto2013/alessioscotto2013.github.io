/* Croatia Showcase – i18n.js */

(function () {
  const STORAGE_KEY = 'croatia_lang';

  function collectEnglishBase() {
    const base = {};
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      base[el.dataset.i18n] = el.innerHTML;
    });
    return base;
  }

  function getPreferredLanguage() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'it' || saved === 'hr') return saved;
    const browser = (navigator.language || 'en').toLowerCase();
    if (browser.startsWith('it')) return 'it';
    if (browser.startsWith('hr')) return 'hr';
    return 'en';
  }

  function updateLanguageButtons(lang) {
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  function updateMeta(lang) {
    document.documentElement.lang = lang;
    const titles = {
      en: 'Croatia – Discover the Pearl of the Adriatic',
      it: "Croazia – Scopri la Perla dell'Adriatico",
      hr: 'Hrvatska – Otkrijte biser Jadrana'
    };
    document.title = titles[lang] || titles.en;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const en = collectEnglishBase();

    /* ================================================================
       ITALIAN
    ================================================================ */
    const it = {
      nav_home: 'Home',
      nav_geography: 'Geografia',
      nav_politics: 'Politica',
      nav_nature: 'Natura',
      nav_famous: 'Persone Famose',
      nav_food: 'Cucina',
      nav_curiosities: 'Curiosita',

      hero_title: 'Benvenuti in Croazia',
      hero_subtitle: "Perla dell'Adriatico – dove storia e bellezza naturale si incontrano",
      hero_cta: 'Scopri di più',

      badge_islands: 'Isole',
      badge_parks: 'Parchi Nazionali',
      badge_coast: 'Costa',
      badge_pop: 'Popolazione',

      // Geography
      geo_title: 'Geografia',
      geo_sub: 'Una terra modellata da mare, montagne e fiumi',
      geo_c1_h: 'Territorio',
      geo_c1_p: 'La Croazia si estende su 56.594 km² con tre zone distinte: la Pianura Pannonica a est, le Alpi Dinariche al centro e la spettacolare costa adriatica a ovest e a sud.',
      geo_c2_h: 'Costa Adriatica',
      geo_c2_p: 'La costa croata si estende per 1.777 km lungo il Mar Adriatico (5.835 km incluse le isole). La visibilita supera spesso i 30 metri, tra le più limpide d\'Europa.',
      geo_c3_h: 'Isole',
      geo_c3_p: 'La Croazia conta 1.244 isole, isolotti e scogli. Le più grandi sono Krk e Cres (~400 km²). Isole famose: Hvar, Brac, Korcula e Vis, ognuna con un carattere unico.',
      geo_c4_h: 'Fiumi e Laghi',
      geo_c4_p: 'Sava, Drava e Kupa sono i principali fiumi. I Laghi di Plitvice, 16 laghi a terrazza collegati da cascate, sono Patrimonio UNESCO e la meta più visitata della Croazia.',
      geo_c5_h: 'Vetta più alta',
      geo_c5_p: 'La Dinara (1.831 m) è la montagna più alta della Croazia, vicino al confine bosniaco. Il massiccio del Velebit è Riserva UNESCO Uomo e Biosfera.',
      geo_c6_h: 'Clima',
      geo_c6_p: 'Convivono tre climi: mediterraneo lungo la costa (estati calde e asciutte, inverni miti), continentale nell\'entroterra (inverni freddi, estati calde) e montano sulle alture.',
      geo_tab_mountains: 'Montagne',
      geo_tab_hills: 'Colline',
      geo_tab_plains: 'Pianure',
      geo_tab_lakes: 'Laghi',
      geo_tab_rivers: 'Fiumi',
      geo_tab_islands: 'Isole',
      geo_tab_climate: 'Clima',
      geo_mountains_h: 'Montagne',
      geo_mountains_p: 'La colonna vertebrale della Croazia è costituita dalle Alpi Dinariche, con cime come la Dinara (1.831 m), il Velebit e l altopiano del Gorski Kotar. Montagne carsiche aspre definiscono l\'entroterra e proteggono la costa dai venti freddi.',
      geo_hills_h: 'Colline',
      geo_hills_p: 'Dolci colline calcaree modellano l\'Istria e la Dalmazia interna, dove vigneti, uliveti e borghi collinari sono comuni. Queste alture gentili contrastano le cime più nette della catena dinarica.',
      geo_plains_h: 'Pianure',
      geo_plains_p: 'La pianura pannonica copre la Croazia orientale con campi fertili, praterie e zone umide. Questo entroterra continentale è il cuore agricolo del paese, estendendosi verso Ungheria e Serbia.',
      geo_lakes_h: 'Laghi',
      geo_lakes_p: 'I laghi croati vanno dalle famose terrazze di Plitvice ai pozzi carsici nascosti e bacini glaciali. I laghi di Plitvice includono 16 bacini turchesi alimentati da cascate e corsi sotterranei.',
      geo_rivers_h: 'Fiumi',
      geo_rivers_p: 'Sava, Drava e Kupa sono i fiumi principali della Croazia, che drenano le pianure interne verso il bacino del Danubio. Hanno plasmato vie commerciali storiche, zone umide e una ricca rete di habitat fluviali. Le cascate del fiume Krka rimangono una delle sue attrazioni naturali più famose.',
      geo_islands_h: 'Isole',
      geo_islands_p: 'La Croazia conta 1.244 isole, isolotti e scogli. Inclusi gli arcipelaghi, la vera lunghezza della costa è di circa 5.835 km, molto più dei 1.777 km della sola terraferma.',
      geo_climate_h: 'Clima',
      geo_climate_p: 'Coesistono tre climi: mediterraneo sulla costa, continentale nell\'entroterra e di montagna in quota. Questa varietà sostiene località costiere, pianure interne e foreste alpine.',

      // Politics
      pol_title: 'Politica e Governo',
      pol_sub: "Una giovane democrazia nel cuore dell'Europa",
      pol_l1_k: 'Nome ufficiale',
      pol_l1_v: 'Repubblica di Croazia (Republika Hrvatska)',
      pol_l2_k: 'Governo',
      pol_l2_v: 'Repubblica parlamentare costituzionale unitaria',
      pol_l3_k: 'Indipendenza',
      pol_l3_v: 'Dichiarata il 25 giugno 1991 dalla Jugoslavia; riconosciuta il 15 gennaio 1992',
      pol_l4_k: 'Capitale',
      pol_l4_v: 'Zagabria (popolazione ~800.000)',
      pol_l5_k: 'Membro UE',
      pol_l5_v: "Adesione all'UE il 1° luglio 2013; adozione dell'Euro il 1° gennaio 2023",
      pol_l6_k: 'Membro NATO',
      pol_l6_v: 'Adesione alla NATO il 1° aprile 2009',
      pol_l7_k: 'Parlamento',
      pol_l7_v: 'Hrvatski sabor – unicamerale, 151 seggi',
      pol_l8_k: 'Divisioni amministrative',
      pol_l8_v: '20 contee (zupanije) + la Citta di Zagabria',
      pol_flag_caption: "Bandiera della Croazia<br><small>Tricolore rosso-bianco-blu con lo storico stemma (sahovnica), uno dei simboli araldici più antichi d'Europa.</small>",

      // Nature
      nat_title: 'Natura, Flora e Fauna',
      nat_sub: "Uno degli angoli più biodiversi d'Europa",
      nat_tab_parks: 'Parchi Nazionali',
      nat_tab_flora: 'Flora',
      nat_tab_fauna: 'Fauna',
      nat_tab_sea: 'Vita Marina',

      nat_p1_h: 'Laghi di Plitvice',
      nat_p1_p: 'Patrimonio UNESCO, 16 laghi turchesi a terrazza collegati da 92 cascate. Nelle foreste circostanti vivono orsi, lupi e linci.',
      nat_p2_h: 'Kornati',
      nat_p2_p: 'Arcipelago di 89 isole disabitate, un labirinto di canali marini, barriere coralline incontaminate e falesie di calcare che precipitano nell\'azzurro profondo.',
      nat_p3_h: 'Risnjak',
      nat_p3_p: 'Dense foreste di faggi e abeti nel Gorski Kotar, il cui nome deriva dalla lince eurasiatica. Uno degli ultimi ambienti montani veramente selvaggi d\'Europa.',
      nat_p4_h: 'Paklenica',
      nat_p4_p: 'Profondi canyon che tagliano il Velebit, famosi per l\'arrampicata e come habitat di aquile reali, falchi pellegrini e camosci.',
      nat_p5_h: 'Krka',
      nat_p5_p: 'Sette spettacolari cascate sul fiume Krka, circondate da macchia mediterranea. Le pozze di travertino ospitano rari pesci d\'acqua dolce e lontre.',
      nat_p6_h: 'Mljet',
      nat_p6_p: 'L\'isola più verde due laghi di acqua salata in un parco nazionale, dense pinete e un monastero benedettino del XII secolo su un\'isoletta nel lago.',

      nat_f1_h: 'Degenia velebitica',
      nat_f1_p: 'Pianta endemica trovata solo sul Velebit. Produce vivaci fiori gialli ed è uno dei più grandi gioielli botanici della Croazia.',
      nat_f2_h: 'Iris adriatica',
      nat_f2_p: 'Un raro iris che cresce esclusivamente lungo la costa dalmata. I suoi fiori viola compaiono in primavera su terreni rocciosi di calcare.',
      nat_f3_h: 'Ulivi e Fichi',
      nat_f3_p: 'La costa dalmata è costellata di antichi uliveti, alcuni di oltre 1.500 anni sull\'isola di Brac, e di fichi selvatici aggrappati ai vecchi muri di pietra.',
      nat_f4_h: 'Terra dei Tartufi',
      nat_f4_p: 'La foresta di Motovun in Istria ospita i più grandi tartufi bianchi al mondo. Un esemplare da 1,31 kg trovato a Buje nel 1999 ha stabilito un record Guinness.',
      nat_f5_h: 'Lavanda di Hvar',
      nat_f5_p: 'L\'isola di Hvar coltiva la lavanda da secoli. Vasti campi viola fioriscono a giugno producendo oli essenziali esportati in tutto il mondo.',
      nat_f6_h: 'Agave e Fico d\'India',
      nat_f6_p: 'Introdotti secoli fa, questi esotici caratterizzano ora il paesaggio dalmata, crescendo lungo i muri di pietra e i bordi delle scogliere sul mare.',

      nat_a1_h: 'Orso Bruno',
      nat_a1_p: 'La Croazia ospita circa 1.000 orsi bruni, una delle popolazioni più dense d\'Europa. Vivono nelle foreste dinariche del Gorski Kotar e della Lika.',
      nat_a2_h: 'Lupo Grigio',
      nat_a2_p: 'Circa 200 lupi vivono in Croazia, protetti dal 1995. Svolgono un ruolo chiave nel regolare le popolazioni di cervi e cinghiali lungo la catena dinarica.',
      nat_a3_h: 'Lince Eurasiatica',
      nat_a3_p: 'Reintrodotta nel 1974 dopo l\'estinzione per caccia. La popolazione dinarica rimane criticamente ridotta (~40 individui) e richiede urgente tutela.',
      nat_a4_h: 'Grifone',
      nat_a4_p: 'Le scogliere dell\'isola di Cres ospitano una delle ultime colonie di grifoni del Mediterraneo. Un centro di recupero protegge la colonia di circa 70 coppie.',
      nat_a5_h: 'Tartaruga Caretta',
      nat_a5_p: 'L\'Adriatico e un\'area cruciale di alimentazione per le tartarughe caretta. L\'isola di Lastovo ha un\'area marina protetta fondamentale per la loro sopravvivenza.',
      nat_a6_h: 'Proteo (Olm)',
      nat_a6_p: 'Questa salamandra cieca, vive nelle grotte e abita fiumi sotterranei. Puo sopravvivere 10 anni senza cibo e vivere oltre 100 anni.',

      nat_m1_h: 'Delfino Tursiope',
      nat_m1_p: 'Circa 220 delfini tursiopi abitano le acque intorno a Losinj, oggetto del programma di ricerca sui cetacei più longevo d\'Europa, attivo dal 1987.',
      nat_m2_h: 'Squalo Azzurro e Volpe di Mare',
      nat_m2_p: 'Le acque aperte dell\'Adriatico ospitano squali azzurri e mako. I pescatori croati hanno storicamente registrato incontri spettacolari.',
      nat_m3_h: 'Praterie di Posidonia',
      nat_m3_p: 'Dense praterie di Posidonia oceanica ricoprono il fondale attorno a Kornati e Peljesac, vivai per pesci, cavallucci marini e polpi.',
      nat_m4_h: 'Calamaro e Polpo Adriatici',
      nat_m4_p: 'L\'Adriatico e rinomato in tutto il mondo per calamari e polpi, centrali nella cucina costiera croata e nelle pratiche di pesca tradizionale.',

      // Famous People
      fam_title: 'Croati Famosi',
      fam_sub: 'Inventori, scienziati, atleti e artisti che hanno segnato il mondo',
      fam_p1_t: 'Inventore e Ingegnere Elettrico',
      fam_p1_p: 'Nato il 10 luglio 1856 a Smiljan. Pioniere della corrente alternata, del motore a induzione e della trasmissione wireless. Il suo lavoro e alla base dei sistemi elettrici moderni.',
      fam_p2_t: 'Polimata – Fisica, Astronomia, Matematica',
      fam_p2_p: 'Nato nel 1711 a Dubrovnik. Sviluppo la prima teoria atomica coerente, anticipando la meccanica quantistica di 200 anni. Il suo ritratto appariva sulla banconota croata da 10 kune.',
      fam_p3_t: 'Calciatore',
      fam_p3_p: 'Nato nel 1985 a Zara. Leggenda del Real Madrid e della Croazia, vincitore del Pallone d\'Oro 2018. Ha guidato la Croazia alla finale del Mondiale 2018 e al terzo posto nel 2022.',
      fam_p4_t: 'Sciatrice Alpina',
      fam_p4_p: 'Nata nel 1982 a Zagabria. La sciatrice alpina più decorata di sempre: 4 ori olimpici, 3 titoli mondiali e 5 Coppe del Mondo generali.',
      fam_p5_t: 'Tennista',
      fam_p5_p: 'Nato nel 1971 a Spalato. Ha vinto Wimbledon 2001 come wildcard in una delle finali più drammatiche del tennis. Celebre per il suo servizio devastante.',
      fam_p6_t: 'Chimico – Premio Nobel 1939',
      fam_p6_p: 'Nato nel 1887 a Vukovar. Premio Nobel per la Chimica per il lavoro sui polimetileni e i terpeni superiori, gettando le basi della moderna chimica degli steroidi.',
      fam_p7_t: 'Scrittore e Drammaturgo',
      fam_p7_p: 'Nato nel 1893 a Zagabria. Il più grande scrittore croato del XX secolo, romanziere, drammaturgo ed enciclopedista. Le sue opere svelano le assurdità della guerra e del nazionalismo.',
      fam_p8_t: 'Saltatrice in Alto',
      fam_p8_p: 'Nata nel 1983 a Spalato. Doppia campionessa mondiale (2007, 2009) e medaglia d\'argento olimpica. Considerata una delle più grandi saltatrici in alto della storia.',

      // Food
      food_title: 'Cucina Croata',
      food_sub: "Una tavola in cui il Mediterraneo incontra l'Europa Centrale",
      food_tab_dal: '🌊 Dalmazia',
      food_tab_ist: '🍄 Istria',
      food_tab_sla: '🌶️ Slavonia',
      food_tab_zag: '🏙️ Zagabria',

      food_d1_h: 'Peka',
      food_d1_p: 'Agnello o polpo cotti lentamente sotto un coperchio di ferro ricoperto di brace. Lo slow-food dalmata per eccellenza, succoso, affumicato e dal sapore intenso.',
      food_d2_h: 'Ostriche di Ston',
      food_d2_p: 'Le ostriche della baia di Ston sono tra le migliori d\'Europa, coltivate in acque incontaminate dai tempi romani in uno degli allevamenti più antichi al mondo.',
      food_d3_h: 'Pasticada',
      food_d3_p: 'Manzo marinato per 24 ore in aceto e spezie, poi brasato a fuoco lento con prugne, vino e verdure. Il piatto della domenica per eccellenza di Spalato.',
      food_d4_h: 'Vino Plavac Mali',
      food_d4_p: 'L\'uva da vino rosso della Peljesac e Hvar. Dingac e Postup sono le due denominazioni premium-dense, con note di fichi secchi, cuoio e aria di mare.',

      food_i1_h: 'Tartufo Istriano',
      food_i1_p: 'La foresta di Motovun produce tartufi bianchi che rivalizzano con i migliori di Alba. Grattugiati su pasta fresca, uova e risotto, il gioiello culinario dell\'Istria.',
      food_i2_h: 'Fuzi e Pljukanci',
      food_i2_p: 'Formati di pasta lavorata a mano tipici dell\'Istria, i fuzi sono rotolini a forma di penna, i pljukanci sono tagliolini attorcigliati, serviti con ragu di tartufo o cinghiale.',
      food_i3_h: "Olio d'Oliva Istriano",
      food_i3_p: 'Gli oli extravergini istriani hanno battuto Toscana e Provenza nelle competizioni internazionali. Le varieta Buza e Carbonazza sono apprezzate per la loro intensa nota erbacea.',
      food_i4_h: 'Vino Malvazija',
      food_i4_p: 'Il vino bianco dell\'Istria, prodotto dall\'autoctono Malvazija Istarska. Fresco, floreale e minerale; abbinamento ideale con frutti di mare e tartufi.',

      food_s1_h: 'Kulen',
      food_s1_p: 'Un salume speziato aromatizzato con paprika dolce e piccante. Lo Slavonski kulen ha la Denominazione di Origine Protetta dell\'UE.',
      food_s2_h: 'Cobanac',
      food_s2_p: 'Uno stufato speziato di pastore preparato con vari tipi di carne con abbondante paprika, cotto a fuoco lento in una pentola di rame sul fuoco vivo.',
      food_s3_h: 'Fis Paprikas',
      food_s3_p: 'Un ricco stufato di pesce di fiume alla paprika, tradizionalmente con carpa, pesce gatto e luccio pescati nella Drava e nella Sava.',
      food_s4_h: 'Vino Grasevina',
      food_s4_p: 'La varieta bianca più coltivata in Croazia, dominante nella regione vinicola di Kutjevo in Slavonia. Va da secco e fresco a ricco e tardivo.',

      food_z1_h: 'Strukli',
      food_z1_p: 'Pasta ripiena di formaggio fresco, al forno o lessata, il piatto iconico dello Zagorje e di Zagabria. Dal 2007 gli strukli sono nel Patrimonio Culturale Immateriale UNESCO della Croazia.',
      food_z2_h: 'Zagrebacki Odrezak',
      food_z2_p: 'La cotoletta di Zagabria, una piccata di vitello farcita con prosciutto e formaggio, impanata e fritta. La risposta di Zagabria al Cordon Bleu.',
      food_z3_h: 'Kremsnita',
      food_z3_p: 'Il dolce iconico di Samobor, vicino a Zagabria. Strati di sfoglia croccante che racchiudono una densa crema pasticcera alla vaniglia, cosparsa di zucchero a velo.',
      food_z4_h: 'Cultura del Caffe',
      food_z4_p: 'La Spica, il rituale del caffe del sabato mattina di Zagabria in via Tkalciceva, e una cara istituzione sociale. Zagabria vanta una delle tradizioni dei caffe più ricche d\'Europa.',

      // Curiosities
      cur_title: 'Curiosita e Fatti Interessanti',
      cur_sub: 'Cose che probabilmente non sai sulla Croazia',
      cur_c1_h: 'La cravatta è croata',
      cur_c1_p: 'La cravatta moderna ha origine in Croazia. I soldati croati nella Guerra dei Trent\'anni portavano sciarpe caratteristiche al collo. I Francesi le adottarono chiamandole "cravate", da Croate (Croato). Il Giorno della Cravatta si celebra ogni 18 ottobre.',
      cur_c2_h: 'Inventore della penna meccanica',
      cur_c2_p: 'Slavoljub Penkala brevetto il primo lapis meccanico nel 1906 e la prima penna stilografica con cappuccio nel 1907. La sua azienda TOZ Penkala e ancora tra i principali produttori di penne in Europa.',
      cur_c3_h: 'Game of Thrones – Dubrovnik',
      cur_c3_p: 'Il centro storico di Dubrovnik ha fatto da sfondo a Approdo del Re in Game of Thrones. La Croazia e stata filmata anche a Spalato, Sibenik e la Fortezza di Klis. Il turismo e aumentato di oltre il 50% negli anni delle riprese.',
      cur_c4_h: 'La citta più piccola del mondo',
      cur_c4_p: 'Hum, in Istria, si vanta di essere la citta più piccola al mondo con appena 17–30 abitanti. Ha un sindaco, una chiesa, una taverna e mura risalenti all\'XI secolo.',
      cur_c5_h: 'Primo progetto di paracadute',
      cur_c5_p: 'Il croato Faust Vrancic progetto e testo quello che e forse il primo paracadute (Homo Volans) nel 1617, saltando presumibilmente da una torre veneziana all\'eta di 65 anni.',
      cur_c6_h: 'Il cane dalmata',
      cur_c6_p: 'La razza dalmata prende il nome dalla costa dalmata della Croazia, dove e stata storicamente raffigurata in affreschi di chiese. La FCI riconosce ufficialmente la Croazia come paese d\'origine.',
      cur_c7_h: 'Il primo siluro al mondo',
      cur_c7_p: 'Ivan Lupis invento il siluro autopropulso nel 1860, sviluppato con l\'ingegnere inglese Robert Whitehead a Fiume. Il siluro moderno naque in terra croata.',
      cur_c8_h: 'Marco Polo da Korcula?',
      cur_c8_p: 'Molti storici sostengono che Marco Polo sia nato sull\'isola di Korcula intorno al 1254. Una casa nella citta di Korcula e tradizionalmente indicata come il suo luogo di nascita.',
      cur_c9_h: "Il teatro attivo più antico d'Europa",
      cur_c9_p: 'Il teatro di Hvar, inaugurato nel 1612, e considerato il teatro municipale con attivita continuativa più antico d\'Europa, precedendo di decenni molte famose sale del continente.',
      cur_c10_h: 'Saluto al Sole – arte solare',
      cur_c10_p: 'Pozdrav Suncu (2008) dell\'architetto Nikola Basic e un cerchio di 22 metri di pannelli solari nel selciato di Zara. Di notte produce uno spettacolo luminoso straordinario, alimentato interamente dal sole adriatico.',

      footer_tagline: "Una vetrina della Perla dell'Adriatico · Realizzato con ❤️ da Alessio Scotto e Copilot AI"
    };

    /* ================================================================
       CROATIAN
    ================================================================ */
    const hr = {
      nav_home: 'Pocetna',
      nav_geography: 'Geografija',
      nav_politics: 'Politika',
      nav_nature: 'Priroda',
      nav_famous: 'Poznate osobe',
      nav_food: 'Hrana',
      nav_curiosities: 'Zanimljivosti',

      hero_title: 'Dobrodosli u Hrvatsku',
      hero_subtitle: 'Biser Jadrana – gdje se susrecu povijest i prirodna ljepota',
      hero_cta: 'Saznaj vise',

      badge_islands: 'Otoci',
      badge_parks: 'Nacionalni parkovi',
      badge_coast: 'Obala',
      badge_pop: 'Stanovnistvo',

      // Geografija
      geo_title: 'Geografija',
      geo_sub: 'Zemlja koju oblikuju more, planine i rijeke',
      geo_c1_h: 'Reljef',
      geo_c1_p: 'Hrvatska se proteze na 56.594 km² s tri razlicite zone: Panonska nizina na istoku, Dinaridi u sredistu i velicasnstvena jadranska obala na zapadu i jugu.',
      geo_c2_h: 'Jadranska obala',
      geo_c2_p: 'Hrvatska obala proteze se 1.777 km uz Jadransko more (5.835 km ukljucujuci otoke). Vidljivost cesto prelazi 30 metara, medu najcistijima u Europi.',
      geo_c3_h: 'Otoci',
      geo_c3_p: 'Hrvatska ima 1.244 otoka, otocica i hridi. Najveci su Krk i Cres (~400 km²). Poznati otoci su Hvar, Brac, Korcula i Vis, svaki s posebnim karakterom.',
      geo_c4_h: 'Rijeke i jezera',
      geo_c4_p: 'Sava, Drava i Kupa su glavne rijeke. Plitvicka jezera, 16 terasastih jezera povezanih slapovima, UNESCO su svjetska bastina i najposjecenija atrakcija Hrvatske.',
      geo_c5_h: 'Najvisi vrh',
      geo_c5_p: 'Dinara (1.831 m) je najvisa planina Hrvatske, blizu bosanske granice. Masiv Velebita je UNESCO rezervat covjeka i biosfere.',
      geo_c6_h: 'Klima',
      geo_c6_p: 'Postoje tri klimatska pojasa: mediteranska uz obalu (vrela suha ljeta, blage zime), kontinentalna u unutrasnjosti (hladne zime, topla ljeta) i planinska klima u gorju.',
      geo_tab_mountains: 'Planine',
      geo_tab_hills: 'Brda',
      geo_tab_plains: 'Ravnine',
      geo_tab_lakes: 'Jezera',
      geo_tab_rivers: 'Rijeke',
      geo_tab_islands: 'Otoči',
      geo_tab_climate: 'Klima',
      geo_mountains_h: 'Planine',
      geo_mountains_p: 'Kralježnica Hrvatske su Dinaridi, s vrhovima poput Dinare (1.831 m), Velebita i Gorskog kotara. Oštri krški planinski lanac definira unutrašnjost i štiti obalu od hladnijih kopnenih zračnih masa.',
      geo_hills_h: 'Brda',
      geo_hills_p: 'Valovita krška brda oblikuju Istru i unutarnju Dalmaciju, gdje su česti vinogradi, maslinici i sela na brežuljcima. Ove blage visine kontrastiraju oštrijim vrhovima Dinarida.',
      geo_plains_h: 'Ravnine',
      geo_plains_p: 'Panonska nizina prekriva istočnu Hrvatsku plodnim poljima, livadama i močvarama. Ovo kontinentalno unutrašnje područje je poljoprivredno srce zemlje, koje se proteže prema Mađarskoj i Srbiji.',
      geo_lakes_h: 'Jezera',
      geo_lakes_p: 'Hrvatska jezera variraju od poznatih plitvičkih terasa do skrivenih krških lokava i ledenjačkih bazena. Plitvička jezera sama uključuju 16 tirkiznih bazena napajanih slapovima i podzemnim tokovima.',
      geo_rivers_h: 'Rijeke',
      geo_rivers_p: 'Sava, Drava i Kupa glavne su hrvatske rijeke koje odvodnjavaju unutrašnje ravnice prema dunavskom slivu. Oblikovale su povijesne trgovačke puteve, močvare i bogatu mrežu poplavnih staništa, a slapovi rijeke Krke jedna su od najpoznatijih prirodnih atrakcija.',
      geo_islands_h: 'Otoči',
      geo_islands_p: 'Hrvatska broji 1.244 otoka, otočića i grebena. Uključujući otoke, stvarna duljina obale iznosi otprilike 5.835 km, daleko više od 1.777 km kopnene obale.',
      geo_climate_h: 'Klima',
      geo_climate_p: 'Ovdje koegzistiraju tri klime: mediteranska na obali, kontinentalna u unutrašnjosti i planinska na višim nadmorskim visinama. Ta raznolikost podržava obalna odmarališta, unutrašnje ravnice i planinske šume.',

      // Politika
      pol_title: 'Politika i vlast',
      pol_sub: 'Mlada demokracija u srcu Europe',
      pol_l1_k: 'Sluzbeni naziv',
      pol_l1_v: 'Republika Hrvatska',
      pol_l2_k: 'Uredenje',
      pol_l2_v: 'Unitarna parlamentarna ustavna republika',
      pol_l3_k: 'Neovisnost',
      pol_l3_v: 'Proglasena 25. lipnja 1991. od Jugoslavije; medunarodna priznata 15. sijecnja 1992.',
      pol_l4_k: 'Glavni grad',
      pol_l4_v: 'Zagreb (stanovnistvo ~800.000)',
      pol_l5_k: 'Clanica EU',
      pol_l5_v: 'Pristupila EU 1. srpnja 2013.; uvela Euro 1. sijecnja 2023.',
      pol_l6_k: 'Clanica NATO-a',
      pol_l6_v: 'Pristupila NATO-u 1. travnja 2009.',
      pol_l7_k: 'Sabor',
      pol_l7_v: 'Hrvatski sabor – jednodomni, 151 zastupnik',
      pol_l8_k: 'Administrativna podjela',
      pol_l8_v: '20 zupanija + Grad Zagreb',
      pol_flag_caption: 'Zastava Hrvatske<br><small>Crveno-bijelo-plava trobojnica s povijesnim grbom (sahovnica), jednim od najstarijih heraldickh simbola u Europi.</small>',

      // Priroda
      nat_title: 'Priroda, flora i fauna',
      nat_sub: 'Jedan od bioloski najraznolikijih kutaka Europe',
      nat_tab_parks: 'Nacionalni parkovi',
      nat_tab_flora: 'Flora',
      nat_tab_fauna: 'Fauna',
      nat_tab_sea: 'Morski svijet',

      nat_p1_h: 'Plitvicka jezera',
      nat_p1_p: 'UNESCO-va svjetska bastina, 16 terasastih tirkiznih jezera povezanih s 92 slapa. U okolnim sumama zive medvjedi, vukovi i risovi.',
      nat_p2_h: 'Kornati',
      nat_p2_p: 'Arhipelag od 89 nenaseljenih otoka, labirint morskih kanala, netaknutih grebena i dramaticcnih vapnenackih litica koje se spustaju u duboko plavo more.',
      nat_p3_h: 'Risnjak',
      nat_p3_p: 'Guste bukovo-jelove sume gorskog kotarskog gorja, nazvane po euroazijskom risu. Jedno od posljednjih istinski divljih planinskih prostora u Europi.',
      nat_p4_h: 'Paklenica',
      nat_p4_p: 'Duboki kanjoni koji sijeku Velebit, poznati po alpinizmu i kao staniste planinskih orla, sokolova i divokoza.',
      nat_p5_h: 'Krka',
      nat_p5_p: 'Sedam velicansstvenih slapova na rijeci Krki, okruzenih mediteranskom makijom. U sedrenim bazenima skrivaju se rijetke slatkovodne ribe i vidre.',
      nat_p6_h: 'Mljet',
      nat_p6_p: 'Najzeleniji otok, dva slatkovodna jezera unutar nacionalnog parka, guste sume alepskog bora i benediktinski samostan iz 12. stoljeca na otocicu u jezeru.',

      nat_f1_h: 'Degenia velebitica',
      nat_f1_p: 'Kriticno endemska biljka pronadena samo na pojedinim velebitskim vapnencima. Cvjeta zivim zutim cvjetovima i jedan je od najvecih botanickih blaga Hrvatske.',
      nat_f2_h: 'Iris adriatica',
      nat_f2_p: 'Rijetka perunika koja raste iskljucivo duz dalmatinske obale. Ljubicasti cvjetovi pojavljuju se proljecem na kamenitom vapnenackom tlu.',
      nat_f3_h: 'Masline i smokve',
      nat_f3_p: 'Dalmatinska obala prepuna je starih maslinika, neki stariji od 1.500 godina na Bracu, te divljih smokava koje se drze uz stare kamene zidove.',
      nat_f4_h: 'Zemlja tartufa',
      nat_f4_p: 'Motovunska suma u Istri staniste je najvecih bijelih tartufa na svijetu. Primjerak tezak 1,31 kg naden u Bujama 1999. oborio je Guinnessov rekord.',
      nat_f5_h: 'Lavanda Hvara',
      nat_f5_p: 'Otok Hvar uzgaja lavandu vec stoljecima. Golema ljubicasta polja cvjetaju u lipnju i daju eterina ulja koja se izvoze diljem svijeta.',
      nat_f6_h: 'Agava i smokvin kaktus',
      nat_f6_p: 'Uvedeni prije stoljeca, ovi egzoti danas krase dalmatinski krajobraz rastuci uz kamene zidove i rubove litica iznad mora.',

      nat_a1_h: 'Smedi medvjed',
      nat_a1_p: 'Hrvatska ima oko 1.000 smedih medvjeda, jednu od najguscih populacija u Europi. Lutaju dinarskim sumama Gorskog kotara i Like.',
      nat_a2_h: 'Sivi vuk',
      nat_a2_p: 'Oko 200 vukova zivi u Hrvatskoj, zasticenih od 1995. Imaju kljucnu ulogu u reguliranju populacija jelena i divljih svinja duz Dinarida.',
      nat_a3_h: 'Euroazijski ris',
      nat_a3_p: 'Reintroduciran 1974. nakon izlova, dinarska populacija risa ostaje kriticno mala (~40 jedinki) i hitno treba zastitu.',
      nat_a4_h: 'Bjeloglavi sup',
      nat_a4_p: 'Litice otoka Cresa dom su jedne od posljednjih kolonija bjeloglavih supova u Mediteranu. Centar za oporavak stiti koloniju od oko 70 parova.',
      nat_a5_h: 'Glavata kareta',
      nat_a5_p: 'Jadran je kljucno hraniliste za glavate karete. Otok Lastovo ima morski zasticeni areal vazan za njihovo prezivljavanje.',
      nat_a6_h: 'Covjecja ribica (Proteus)',
      nat_a6_p: 'Ova slijepa spiljska dvozivcka zivi u podzemnim rijekama. Moze prezivjeti 10 godina bez hrane i dozivjeti vise od 100 godina.',

      nat_m1_h: 'Dobri dupin',
      nat_m1_p: 'Oko 220 dobrih dupina nastanjuje vode oko Losinja, predmet najdugovjecnijeg programa istrazivanja kitova u Europi, od 1987.',
      nat_m2_h: 'Modri morski pas i lisica',
      nat_m2_p: 'Otvorene jadranske vode staniste su modrih morskih pasa i mako ajkula. Ribari su kroz povijest billjezili dramticna susretanja.',
      nat_m3_h: 'Livade posidonije',
      nat_m3_p: 'Guste livade morske cvjetnice Posidonia oceanica prekrivaju morsko dno oko Kornata i Peljesaca, rasadnici riba, morskih konjica i hobotnica.',
      nat_m4_h: 'Jadranska lignja i hobotnica',
      nat_m4_p: 'Jadran je svjetski poznat po lignjama i hobotnicama, sredistu jadranske obalne kuhinje i odrzivom tradicionalnom ribolovu.',

      // Poznate osobe
      fam_title: 'Poznati Hrvati',
      fam_sub: 'Izumitelji, znanstvenici, sportasi i umjetnici koji su oblikovali svijet',
      fam_p1_t: 'Izumitelj i elektrotehnicki inzenjer',
      fam_p1_p: 'Roden 10. srpnja 1856. u Smiljanu. Pionir izmjenicne struje, indukcijskog motora i bezicnog prijenosa. Njegov rad temelj je modernih elektricnih sustava diljem svijeta.',
      fam_p2_t: 'Polihistor – fizika, astronomija, matematika',
      fam_p2_p: 'Roden 1711. u Dubrovniku. Razvio prvu koherentnu atomsku teoriju, anticipirajuci kvantnu mehaniku 200 godina unaprijed. Njegov portret bio je na hrvatskoj novcanici od 10 kuna.',
      fam_p3_t: 'Nogometaš',
      fam_p3_p: 'Roden 1985. u Zadru. Legenda Real Madrida i hrvatske reprezentacije, dobitnik Zlatne lopte 2018. Vodio je Hrvatsku do finala SP-a 2018. i treceg mjesta 2022.',
      fam_p4_t: 'Alpska skijasica',
      fam_p4_p: 'Rodena 1982. u Zagrebu. Najdekoriranija zenska alpska skijasica svih vremena: 4 olimpijska zlata, 3 naslova svjetske prvakinje i 5 naslova u ukupnom poretku Svjetskog kupa.',
      fam_p5_t: 'Tenisac',
      fam_p5_p: 'Roden 1971. u Splitu. Osvojio Wimbledon 2001. kao wildcard u jednom od najdramaticnijih finala tenisa. Poznat po razornom servisu.',
      fam_p6_t: 'Kemicar – Nobelova nagrada 1939.',
      fam_p6_p: 'Roden 1887. u Vukovaru. Dobio Nobelovu nagradu za kemiju za rad na polimetilensima i visim terpenima, postavivsi temelje moderne kemije steroida.',
      fam_p7_t: 'Pisac i dramaticcar',
      fam_p7_p: 'Roden 1893. u Zagrebu. Najveci hrvatski knjizevnik 20. stoljeca, romanopisac, dramaticar i enciklopedist. Njegova djela razotkrivaju apsurd rata i nacionalizma.',
      fam_p8_t: 'Skakacica u vis',
      fam_p8_p: 'Rodena 1983. u Splitu. Dvostruka svjetska prvakinja (2007., 2009.) i olimpijska srebrna medalja. Smatra se jednom od najvecih skakacica u vis u povijesti.',

      // Hrana
      food_title: 'Hrvatska kuhinja',
      food_sub: 'Stol na kojem se susrecu Mediteran i Srednja Europa',
      food_tab_dal: '🌊 Dalmacija',
      food_tab_ist: '🍄 Istra',
      food_tab_sla: '🌶️ Slavonija',
      food_tab_zag: '🏙️ Zagreb',

      food_d1_h: 'Peka',
      food_d1_p: 'Janjetina ili hobotnica polako pecena pod pekom prekrivenom zeravom. Vrhunac dalmatinske spore hrane—socna, dimljena i duboka u ukusu.',
      food_d2_h: 'Stonske kamenice',
      food_d2_p: 'Kamenice iz Malostonskog zaljeva medu najboljima su u Europi, uzgajaju se u cistim vodama od rimskih vremena, u jednom od najstarijih uzgajalistu kamenica na svijetu.',
      food_d3_h: 'Pasticada',
      food_d3_p: 'Govedina marinirana 24 sata u octu i zaccinima, zatim pirjana sa sljivaama, vinom i povrcem. Nedjeljna jelo Splita i srednje Dalmacije.',
      food_d4_h: 'Plavac Mali vino',
      food_d4_p: 'Crna sorta grozda s Peljesaca i Hvara. Dingac i Postup su dvije premium oznake, gusta vina s notama suhih smokava, koze i morskog zraka.',

      food_i1_h: 'Istarski tartuf',
      food_i1_p: 'Motovunska suma producira bijele tartufe koji se mogu mjeriti s najboljima iz Albe. Ribani na svjezu tjesteninu, jaja i rizoto, kulinarska kruna Istre.',
      food_i2_h: 'Fuzi i pljukanci',
      food_i2_p: 'Rucno radeni oblici tjestenine tipicni za Istru, fuzi su uvijeni cjevicasti oblici, pljukanci su uvijeni rezanci, posluzuju se s tartufima ili raguom od divlje svinje.',
      food_i3_h: 'Istarsko maslinovo ulje',
      food_i3_p: 'Istarska maslinova ulja s zlatnim medaljama pobijedila su Toskanu i Provence na medunarodnim natjecanjima. Sorte Buza i Carbonazza cijenjene su po intenzivnoj svjezoj noti.',
      food_i4_h: 'Malvazija vino',
      food_i4_p: 'Bijelo vino Istre, napravljeno od autohtone sorte Malvazija Istarska. Svjeze, cvjetno i mineralno; idealan pratitelj plodova mora i tartufa.',

      food_s1_h: 'Kulen',
      food_s1_p: 'Jako zaccinjena suhomesnata kobasica aromatizirana slatkom i ljutom paprikom. Slavonski kulen ima europsku zasticenu oznaku izvornosti.',
      food_s2_h: 'Cobanac',
      food_s2_p: 'Vatreni pastirski gulas od vise vrsta mesa s obiljem paprike i ljutih papricica, polako kuhan u bakrenom kotlu na vatri na otvorenom.',
      food_s3_h: 'Fis paprikas',
      food_s3_p: 'Bogati rijecni riblji gulas s paprikom, tradicionalno od sarana, soma i stuke ulovljenih u Dravi i Savi. Najlsje ga je jesti vani uz svjezi kruh.',
      food_s4_h: 'Grasevina vino',
      food_s4_p: 'Najzastupljenija bijela sorta u Hrvatskoj, dominantna u vinorodnome Kutjevu u Slavoniji. Od suho i svjeze do bogatog kasne berbe s prepoznatljivim kontinentalnim stilom.',

      food_z1_h: 'Strukli',
      food_z1_p: 'Tijesto punjeno svjezim sirom, peceno ili kuhano, ikonsko jelo Zagorja i Zagreba. Od 2007. strukli su na UNESCO-vom popisu nematerijalne kulturne bastine Hrvatske.',
      food_z2_h: 'Zagrebacki odrezak',
      food_z2_p: 'Teleca snicla punjena sunkom i sirom, pohana i przena. Zagrebacki odgovor na Cordon Bleu, moguce i stariji od svicarske verzije.',
      food_z3_h: 'Kremsnita',
      food_z3_p: 'Ikonski desert Samobora kraj Zagreba. Slojevi hrskavog lisnatog tijesta koji obavijaju gustu kremu od vanilije, posuti secerom u prahu.',
      food_z4_h: 'Kultura kave',
      food_z4_p: 'Spica, subotnjojutarnji ritual kavopijenja na Tkalcicevoj ulici, draga je drustvena institucija. Zagreb ima jednu od najbogatijih tradicija kavana u Europi.',

      // Zanimljivosti
      cur_title: 'Zanimljivosti i cinjenice',
      cur_sub: 'Stvari koje vjerojatno niste znali o Hrvatskoj',
      cur_c1_h: 'Kravata je hrvatski izum',
      cur_c1_p: 'Moderna kravata potjece iz Hrvatske. Hrvatski vojnici u Tridesetogodisjem ratu nosili su karakteristicne marame oko vrata. Francuzi su je preuzeli nazvavsi je "cravate", od Croate (Hrvat). Dan kravate slavi se svake godine 18. listopada.',
      cur_c2_h: 'Izumitelj mehanicke olovke',
      cur_c2_p: 'Slavoljub Penkala patentirao je prvu mehhaniku olovku sa solidnom tintom 1906. i prvu nalivpero s kapom 1907. Tvrtka TOZ Penkala i danas je jedan od vodecih proizvodaca olovaka u Europi.',
      cur_c3_h: 'Game of Thrones – Dubrovnik',
      cur_c3_p: 'Stara gradska jezgra Dubrovnika posluzila je kao King\'s Landing u HBO-ovoj seriji Igra prijestolja. Hrvatska je snimana i u Splitu, Sibeniku i tvrdavi Klis. Turizam je porastao vise od 50% za godina snimanja.',
      cur_c4_h: 'Najmanji grad na svijetu',
      cur_c4_p: 'Hum u Istri tvrdi da je najmanji grad na svijetu s tek 17–30 stanovnika. Ima gradonacelnika, crkvu, gostionu i zidine iz 11. stoljeca.',
      cur_c5_h: 'Prvi dizajn padobrana',
      cur_c5_p: 'Faust Vrancic osmislio je i testirao ono sto je mozda prvi padobran (Homo Volans) 1617. Navodno skocivsi s venecijanskog tornja s 65 godina. Njegov dizajn nalikuje suvremenim padobranima.',
      cur_c6_h: 'Dalmatinski pas',
      cur_c6_p: 'Dalmatinska pasmina ime je dobila prema dalmatinskoj obali Hrvatske, gdje je povijesno prikazivana u crkvenim freskama. FCI sluzbeno priznaje Hrvatsku kao zemlju podrijetla.',
      cur_c7_h: 'Prvi torpedo na svijetu',
      cur_c7_p: 'Ivan Lupis izumio je samopogonski torpedo 1860. Nazvijen dalje s engleskim inzenjerom Robertom Whiteheadom u Rijeci. Moderni torpedo roden je na hrvatskom tlu.',
      cur_c8_h: 'Marco Polo s Korcula?',
      cur_c8_p: 'Mnogi povjesnicari tvrde da je Marko Polo roden na otoku Korculi oko 1254., prije nego sto se njegova obitelj preselila u Veneciju. Jedna kuca u gradu Korculi tradicijski se smatra njegovim rodnim mjestom.',
      cur_c9_h: 'Najstarije aktivno kazaliste u Europi',
      cur_c9_p: 'Hvarsko kazaliste, otvoreno 1612., smatra se najstarije neprekidno aktivno gradsko kazaliste u Europi, starije je od mnogi slavnih dvorana na kontinentu za desetke godina.',
      cur_c10_h: 'Pozdrav Suncu – solarna umjetnost',
      cur_c10_p: 'Pozdrav Suncu (2008.) arhitekta Nikole Basica krug je promjera 22 metra sas olarnih ploca u zadarskom plocniku. Nocu stvara zadivljujuci svjetlosni spektakl, napajan iskljucivo jadranskim suncem.',

      footer_tagline: 'Predstavljanje bisera Jadrana · Izradeno s ❤️'
    };

    const dictionaries = { en, it, hr };

    function applyLanguage(lang) {
      const selected = dictionaries[lang] ? lang : 'en';
      const merged = { ...en, ...(dictionaries[selected] || {}) };

      document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.dataset.i18n;
        if (merged[key]) el.innerHTML = merged[key];
      });

      updateLanguageButtons(selected);
      updateMeta(selected);
      localStorage.setItem(STORAGE_KEY, selected);
    }

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        applyLanguage(btn.dataset.lang);
      });
    });

    applyLanguage(getPreferredLanguage());

    window.setLanguage = applyLanguage;
  });
})();