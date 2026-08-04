import type { Locale } from "./config";

/**
 * Single source of truth for all UI copy.
 * The Czech dictionary defines the shape; the English one must match it.
 */

export const dictionaries = {
  cs: {
    meta: {
      title: "Shaman — Nákladní taxi 25/8, stěhování a doprava | Praha a celá ČR",
      description:
        "Spolehlivé stěhování, nákladní taxi, doprava nábytku a odvoz odpadu. Praha a celá Česká republika. Rychlý odhad ceny zdarma — zavolejte +420 724 273 875.",
      ogAlt: "Shaman — nákladní taxi Praha",
      keywords: [
        "nákladní taxi Praha",
        "stěhování Praha",
        "levné stěhování Praha",
        "nákladní doprava Praha",
        "autodoprava Praha",
        "doprava nábytku Praha",
        "odvoz nábytku Praha",
        "odvoz odpadu Praha",
        "vyklízení bytů Praha",
        "vyklízení sklepů a pozůstalostí",
        "přeprava zboží Praha",
        "stěhovací služby Praha",
        "odtah vozidel Praha",
        "stěhování celá ČR",
        "nonstop nákladní taxi Praha",
        "dodávka na zavolání Praha",
      ],
    },
    brand: {
      tagline: "Nákladní taxi · 25/8",
    },
    nav: {
      services: "Služby",
      pricing: "Ceník",
      why: "Proč my",
      process: "Postup",
      coverage: "Pokrytí",
      about: "O nás",
      contact: "Kontakt",
      cta: "Nezávazná poptávka",
      menu: "Menu",
      close: "Zavřít",
    },
    hero: {
      eyebrow: "Praha · Celá Česká republika",
      titleLine1: "Vaše zásilky",
      titleLine2: "dorazí přesně,",
      titleLine3: "včas a v bezpečí.",
      lead:
        "Stěhování, nákladní taxi i odvoz odpadu s vlastními dodávkami. Jeden tým, jedno číslo — od Prahy až po každé město v republice.",
      ctaPrimary: "Získat odhad ceny",
      ctaSecondary: "Zavolat",
      dispatchLabel: "Dispečink",
      dispatchNote: "Po–Ne · rychlá odezva",
      routeFrom: "PRAHA",
      routeTo: "ČR",
      stat1Label: "Základna",
      stat1Value: "Praha",
      stat2Label: "Dojezd",
      stat2Value: "Celá ČR",
      stat3Label: "Kanály",
      stat3Value: "Tel · WhatsApp · Telegram",
    },
    services: {
      eyebrow: "Služby",
      title: "Co pro vás převezeme",
      lead:
        "Pět služeb, jedna dodávka a posádka, která ví, jak zacházet s vaším nákladem. Vyberte, co potřebujete — o zbytek se postaráme.",
      indexLabel: "Rejstřík",
      items: [
        {
          id: "stehovani",
          index: "01",
          name: "Stěhování",
          tagline: "Byty, kanceláře i jednotlivé kusy",
          description:
            "Naplánujeme trasu, zabalíme, naložíme a bezpečně vše přestěhujeme. Bez stresu, bez poškození, bez zdržení.",
          points: ["Byty a domy", "Kanceláře a provozovny", "Balení a demontáž"],
          image: "/gallery/photo-07.jpeg",
          imageAlt: "Stěhování — nábytek připravený k naložení",
        },
        {
          id: "nakladni-taxi",
          index: "02",
          name: "Nákladní taxi",
          tagline: "Dodávka na zavolání, kdy potřebujete",
          description:
            "Rychlý odvoz jedné zásilky i naléhavá jízda. Přistavíme dodávku a vyrazíme — po Praze i mimo ni.",
          points: ["Přistavení na zavolání", "Po Praze i po ČR", "Naložení i vyložení"],
          image: "/gallery/photo-10.jpeg",
          imageAlt: "Bílá dodávka připravená k odjezdu",
        },
        {
          id: "doprava-nabytku",
          index: "03",
          name: "Doprava nábytku",
          tagline: "Od e-shopu až za vaše dveře",
          description:
            "Vyzvedneme nový nábytek u prodejce nebo přepravíme ten váš. Chráníme rohy, plochy i vaše zdi.",
          points: ["Vyzvednutí u prodejce", "Ochrana při přepravě", "Vynesení do patra"],
          image: "/gallery/photo-24.jpeg",
          imageAlt: "Nábytek zabalený pro přepravu",
        },
        {
          id: "nakladni-doprava",
          index: "04",
          name: "Nákladní doprava",
          tagline: "Zásilky a materiál po celé ČR",
          description:
            "Pravidelné i jednorázové zavážky, stavební materiál, palety a firemní zásilky spolehlivě z místa na místo.",
          points: ["Palety a materiál", "Firemní zavážky", "Jednorázově i pravidelně"],
          image: "/gallery/photo-08.jpeg",
          imageAlt: "Naložený nákladní prostor dodávky",
        },
        {
          id: "odvoz-odpadu",
          index: "05",
          name: "Odvoz odpadu a likvidace",
          tagline: "Vyklidíme a odvezeme, kam patří",
          description:
            "Vyklizení bytů, sklepů a kanceláří. Starý nábytek i stavební suť naložíme a odvezeme k ekologické likvidaci.",
          points: ["Vyklízení prostor", "Starý nábytek a spotřebiče", "Ekologická likvidace"],
          image: "/gallery/photo-05.jpeg",
          imageAlt: "Odvoz a likvidace odpadu",
        },
      ],
      cardCta: "Poptat službu",
    },
    extraServices: {
      eyebrow: "Doplňkové služby",
      title: "Něco navíc, když je potřeba",
      lead:
        "Kromě samotné přepravy zvládneme i to okolo — od svalů na naložení až po odtah vozidla.",
      express: {
        badge: "Expresní výjezd",
        title: "Do 60 minut po Praze",
        text: "Spěchá to? Po Praze u vás můžeme být zpravidla do hodiny od zavolání.",
        cta: "Zavolat teď",
      },
      items: [
        {
          name: "Odtah vozidel — evakuátor",
          text: "Odtahová služba a evakuace osobních i užitkových vozidel po Praze i po ČR.",
        },
        {
          name: "Stěhováci a nakládka",
          text: "Zkušené pomocné síly na naložení, vynesení a přenášení těžkých kusů.",
        },
        {
          name: "Rekonstrukce a úpravy",
          text: "Drobné stavební práce a rekonstrukce prostor — často po vyklizení či stěhování.",
        },
      ],
    },
    pricing: {
      eyebrow: "Ceník",
      title: "Orientační ceny",
      lead:
        "Přehled základních sazeb. Konečná cena vždy vychází z rozsahu — přesný odhad dostanete zdarma po telefonu.",
      note: "Ceny jsou orientační. Konečnou cenu potvrdíme podle rozsahu zakázky.",
      ctaLabel: "Nezávazný odhad zdarma",
      items: [
        {
          name: "Doprava po Praze",
          note: "Řidič s dodávkou, účtováno po hodině",
          price: "od 799 Kč / hod",
          addon: "",
        },
        {
          name: "Doprava s pomocí řidiče",
          note: "Řidič pomůže s nakládkou i stěhováním",
          price: "od 1 099 Kč / hod",
          addon: "Každý další pracovník + 299 Kč / hod",
        },
        {
          name: "Přeprava vozidla po Praze",
          note: "Odtah a evakuace v rámci Prahy",
          price: "od 1 799 Kč",
          addon: "",
        },
        {
          name: "Výjezd mimo Prahu",
          note: "Cesty po celé České republice",
          price: "Dle dohody",
          addon: "",
        },
        {
          name: "Přeprava těžkých předmětů",
          note: "Trezory, stroje, klavíry a další",
          price: "Dle dohody",
          addon: "",
        },
      ],
    },
    why: {
      eyebrow: "Proč Shaman",
      title: "Menší firma. Větší péče.",
      lead:
        "Nejste číslo v systému. Voláte přímo lidem, kteří vaši zásilku naloží a přivezou.",
      items: [
        {
          title: "Jedno číslo, celá republika",
          text:
            "Praha je naše základna, ale jezdíme, kam potřebujete — do každého kraje ČR.",
        },
        {
          title: "Přesné časy",
          text:
            "Domluvený čas držíme. Dispečink vás informuje, kde jsme a kdy dorazíme.",
        },
        {
          title: "Bezpečně naložené",
          text:
            "Popruhy, deky a zkušené ruce. S vaším nákladem zacházíme jako s vlastním.",
        },
        {
          title: "Cena předem",
          text:
            "Odhad dostanete ještě před jízdou. Žádná překvapení na konci.",
        },
      ],
    },
    process: {
      eyebrow: "Jak to funguje",
      title: "Od telefonu k hotovu ve čtyřech krocích",
      lead: "Bez formalit navíc. Řekněte nám, co a kam — my se postaráme o zbytek.",
      steps: [
        {
          title: "Ozvěte se",
          text: "Zavolejte nebo napište přes WhatsApp či Telegram. Řeknete, co a kam.",
        },
        {
          title: "Odhad ceny",
          text: "Obratem dostanete férový odhad a navržený termín.",
        },
        {
          title: "Přistavíme dodávku",
          text: "Dorazíme v domluvený čas, naložíme a zajistíme náklad.",
        },
        {
          title: "Doručíme",
          text: "Přivezeme, vyložíme a předáme na místě. Hotovo.",
        },
      ],
    },
    coverage: {
      eyebrow: "Pokrytí",
      title: "Základna v Praze, dojezd po celé ČR",
      lead:
        "Každá jízda startuje z Prahy a míří tam, kde vás potřebujeme. Vybrané destinace, kam jezdíme nejčastěji:",
      hub: "Praha",
      hubNote: "Základna a dispečink",
      cities: [
        "Praha",
        "Brno",
        "Ostrava",
        "Plzeň",
        "Liberec",
        "Hradec Králové",
        "České Budějovice",
        "Ústí nad Labem",
        "Karlovy Vary",
      ],
      note: "Nevidíte své město? Jezdíme i tam — stačí zavolat.",
    },
    about: {
      eyebrow: "O nás",
      title: "Doprava, na kterou se dá spolehnout",
      paragraphs: [
        "Jsme dopravní tým se sídlem v Praze. Zaměřujeme se na stěhování, nákladní taxi, přepravu nábytku a odvoz odpadu — pro domácnosti i firmy.",
        "Pracujeme přímo, bez zbytečných mezičlánků. Zavoláte, domluvíme se a přijedeme. Věříme, že spolehlivost a jasná komunikace jsou důležitější než velké sliby.",
      ],
      pillars: [
        { label: "Zaměření", value: "Stěhování a nákladní doprava" },
        { label: "Působnost", value: "Praha a celá ČR" },
        { label: "Přístup", value: "Přímý kontakt, férová cena" },
      ],
    },
    gallery: {
      eyebrow: "Naše práce",
      title: "Z našich jízd",
      lead:
        "Skutečné zakázky, skutečné dodávky. Pár záběrů z běžného dne — stěhování, materiál, nábytek i kus techniky.",
      alt: "Přeprava se Shaman",
    },
    quote: {
      eyebrow: "Nezávazná poptávka",
      title: "Získejte odhad ceny",
      lead:
        "Vyplňte pár údajů a ozveme se s cenou i termínem. Nebo rovnou zavolejte — bereme telefon.",
      form: {
        name: "Jméno",
        namePlaceholder: "Jan Novák",
        phone: "Telefon",
        phonePlaceholder: "+420 …",
        email: "E-mail",
        emailPlaceholder: "vas@email.cz",
        service: "Služba",
        servicePlaceholder: "Vyberte službu",
        from: "Odkud",
        fromPlaceholder: "Ulice, město",
        to: "Kam",
        toPlaceholder: "Ulice, město",
        date: "Preferovaný termín",
        message: "Doplňující informace",
        messagePlaceholder: "Co převážíme, patro, výtah, přibližný objem…",
        submit: "Odeslat poptávku",
        submitting: "Odesílám…",
        successTitle: "Poptávka odeslána",
        successText:
          "Děkujeme! Ozveme se co nejdříve. Spěchá to? Zavolejte na +420 724 273 875.",
        errorTitle: "Něco se nepovedlo",
        errorText:
          "Formulář se teď nepodařilo odeslat. Zavolejte prosím na +420 724 273 875.",
        another: "Odeslat další poptávku",
        required: "Povinné pole",
        invalidEmail: "Zadejte platný e-mail",
        invalidPhone: "Zadejte platné telefonní číslo",
      },
      asideTitle: "Raději rovnou zavoláte?",
      asideText: "Jsme na příjmu každý den. Vyberte si svůj kanál:",
    },
    contact: {
      call: "Zavolat",
      whatsapp: "WhatsApp",
      telegram: "Telegram",
      viber: "Viber",
    },
    footer: {
      tagline: "Stěhování a nákladní doprava — Praha a celá Česká republika.",
      servicesTitle: "Služby",
      companyTitle: "Společnost",
      contactTitle: "Kontakt",
      rights: "Všechna práva vyhrazena.",
      backToTop: "Nahoru",
      madeBy: "Web vytvořil",
    },
  },

  en: {
    meta: {
      title: "Shaman — Cargo Taxi 25/8, Moving & Transport | Prague & Czechia",
      description:
        "Reliable moving, cargo taxi, furniture transport and waste removal. Prague and the whole Czech Republic. Fast free quote — call +420 724 273 875.",
      ogAlt: "Shaman — cargo taxi in Prague",
      keywords: [
        "cargo taxi Prague",
        "moving company Prague",
        "man and van Prague",
        "removals Prague",
        "freight transport Prague",
        "furniture delivery Prague",
        "furniture transport Prague",
        "waste removal Prague",
        "house clearance Prague",
        "rubbish removal Prague",
        "vehicle towing Prague",
        "transport Czech Republic",
        "English speaking movers Prague",
        "van hire with driver Prague",
      ],
    },
    brand: {
      tagline: "Cargo taxi · 25/8",
    },
    nav: {
      services: "Services",
      pricing: "Pricing",
      why: "Why us",
      process: "Process",
      coverage: "Coverage",
      about: "About",
      contact: "Contact",
      cta: "Get a quote",
      menu: "Menu",
      close: "Close",
    },
    hero: {
      eyebrow: "Prague · Whole Czech Republic",
      titleLine1: "Your cargo",
      titleLine2: "arrives exactly",
      titleLine3: "on time, intact.",
      lead:
        "Moving, cargo taxi and waste removal with our own vans. One team, one number — from Prague to every town in the country.",
      ctaPrimary: "Get a quote",
      ctaSecondary: "Call us",
      dispatchLabel: "Dispatch",
      dispatchNote: "Mon–Sun · fast response",
      routeFrom: "PRAGUE",
      routeTo: "CZ",
      stat1Label: "Base",
      stat1Value: "Prague",
      stat2Label: "Reach",
      stat2Value: "All of Czechia",
      stat3Label: "Channels",
      stat3Value: "Phone · WhatsApp · Telegram",
    },
    services: {
      eyebrow: "Services",
      title: "What we'll move for you",
      lead:
        "Five services, one van and a crew that knows how to handle your load. Pick what you need — we take care of the rest.",
      indexLabel: "Index",
      items: [
        {
          id: "stehovani",
          index: "01",
          name: "Moving",
          tagline: "Homes, offices and single items",
          description:
            "We plan the route, pack, load and move everything safely. No stress, no damage, no delays.",
          points: ["Flats and houses", "Offices and shops", "Packing and disassembly"],
          image: "/gallery/photo-07.jpeg",
          imageAlt: "Moving — furniture ready to load",
        },
        {
          id: "nakladni-taxi",
          index: "02",
          name: "Cargo taxi",
          tagline: "A van on call, whenever you need it",
          description:
            "Quick single-item runs and urgent trips. We bring the van and go — across Prague and beyond.",
          points: ["On-call pickup", "Prague and nationwide", "Loading and unloading"],
          image: "/gallery/photo-10.jpeg",
          imageAlt: "White van ready to depart",
        },
        {
          id: "doprava-nabytku",
          index: "03",
          name: "Furniture transport",
          tagline: "From the store straight to your door",
          description:
            "We collect new furniture from the seller or move yours. We protect corners, surfaces and your walls.",
          points: ["Pickup from seller", "Protected in transit", "Carried to your floor"],
          image: "/gallery/photo-24.jpeg",
          imageAlt: "Furniture wrapped for transport",
        },
        {
          id: "nakladni-doprava",
          index: "04",
          name: "Freight transport",
          tagline: "Shipments and materials across Czechia",
          description:
            "Regular or one-off deliveries, building materials, pallets and business shipments — reliably from A to B.",
          points: ["Pallets and materials", "Business deliveries", "One-off or recurring"],
          image: "/gallery/photo-08.jpeg",
          imageAlt: "Loaded cargo area of a van",
        },
        {
          id: "odvoz-odpadu",
          index: "05",
          name: "Waste removal & disposal",
          tagline: "We clear it out and haul it away",
          description:
            "Clearing flats, cellars and offices. We load old furniture and building debris and take it to proper disposal.",
          points: ["Clearing spaces", "Old furniture & appliances", "Eco-friendly disposal"],
          image: "/gallery/photo-05.jpeg",
          imageAlt: "Waste removal and disposal",
        },
      ],
      cardCta: "Request this",
    },
    extraServices: {
      eyebrow: "Additional services",
      title: "A little extra, when you need it",
      lead:
        "Beyond the transport itself we handle what's around it — from the muscle to load up to towing a vehicle.",
      express: {
        badge: "Express dispatch",
        title: "Within 60 minutes across Prague",
        text: "In a hurry? Across Prague we can usually be at your door within an hour of your call.",
        cta: "Call now",
      },
      items: [
        {
          name: "Vehicle towing — tow truck",
          text: "Tow-truck service and vehicle recovery for cars and vans, across Prague and Czechia.",
        },
        {
          name: "Loaders & handling",
          text: "Experienced hands to load, carry and move heavy items up and down the stairs.",
        },
        {
          name: "Reconstruction & fit-out",
          text: "Small building works and space renovation — often after a clear-out or a move.",
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Indicative rates",
      lead:
        "An overview of our base rates. The final price always depends on the scope — you'll get an exact quote for free over the phone.",
      note: "Rates are indicative. We'll confirm the final price based on the scope of the job.",
      ctaLabel: "Free no-obligation quote",
      items: [
        {
          name: "Transport across Prague",
          note: "Driver with a van, charged by the hour",
          price: "from 799 Kč / hr",
          addon: "",
        },
        {
          name: "Transport with the driver's help",
          note: "The driver helps with loading and moving",
          price: "from 1,099 Kč / hr",
          addon: "Each extra helper + 299 Kč / hr",
        },
        {
          name: "Vehicle transport in Prague",
          note: "Towing and recovery within Prague",
          price: "from 1,799 Kč",
          addon: "",
        },
        {
          name: "Trips outside Prague",
          note: "Journeys across the Czech Republic",
          price: "By agreement",
          addon: "",
        },
        {
          name: "Heavy item transport",
          note: "Safes, machines, pianos and more",
          price: "By agreement",
          addon: "",
        },
      ],
    },
    why: {
      eyebrow: "Why Shaman",
      title: "Smaller company. Greater care.",
      lead:
        "You're not a number in a system. You call the people who load and deliver your cargo.",
      items: [
        {
          title: "One number, whole country",
          text:
            "Prague is our base, but we drive wherever you need — to every region in Czechia.",
        },
        {
          title: "Precise timing",
          text:
            "We keep the agreed time. Dispatch tells you where we are and when we'll arrive.",
        },
        {
          title: "Safely secured",
          text:
            "Straps, blankets and experienced hands. We treat your load like our own.",
        },
        {
          title: "Price upfront",
          text:
            "You get an estimate before the trip. No surprises at the end.",
        },
      ],
    },
    process: {
      eyebrow: "How it works",
      title: "From call to done in four steps",
      lead: "No extra formalities. Tell us what and where — we handle the rest.",
      steps: [
        {
          title: "Get in touch",
          text: "Call or message us on WhatsApp or Telegram. Tell us what and where.",
        },
        {
          title: "Price estimate",
          text: "You'll get a fair estimate and a suggested time right away.",
        },
        {
          title: "We bring the van",
          text: "We arrive on time, load up and secure your cargo.",
        },
        {
          title: "We deliver",
          text: "We bring it, unload and hand it over on the spot. Done.",
        },
      ],
    },
    coverage: {
      eyebrow: "Coverage",
      title: "Based in Prague, reaching all of Czechia",
      lead:
        "Every trip starts in Prague and heads to where you need us. Some of the places we drive to most:",
      hub: "Prague",
      hubNote: "Base and dispatch",
      cities: [
        "Prague",
        "Brno",
        "Ostrava",
        "Pilsen",
        "Liberec",
        "Hradec Králové",
        "České Budějovice",
        "Ústí nad Labem",
        "Karlovy Vary",
      ],
      note: "Don't see your town? We drive there too — just call.",
    },
    about: {
      eyebrow: "About us",
      title: "Transport you can rely on",
      paragraphs: [
        "We're a transport crew based in Prague. We focus on moving, cargo taxi, furniture transport and waste removal — for households and businesses alike.",
        "We work directly, without needless middlemen. You call, we agree, we show up. We believe reliability and clear communication matter more than big promises.",
      ],
      pillars: [
        { label: "Focus", value: "Moving & freight transport" },
        { label: "Area", value: "Prague & all of Czechia" },
        { label: "Approach", value: "Direct contact, fair price" },
      ],
    },
    gallery: {
      eyebrow: "Our work",
      title: "From our runs",
      lead:
        "Real jobs, real vans. A few shots from an ordinary day — moving, materials, furniture and the odd heavy machine.",
      alt: "Transport with Shaman",
    },
    quote: {
      eyebrow: "Free quote",
      title: "Get a price estimate",
      lead:
        "Fill in a few details and we'll get back with a price and a date. Or just call — we pick up.",
      form: {
        name: "Name",
        namePlaceholder: "John Smith",
        phone: "Phone",
        phonePlaceholder: "+420 …",
        email: "Email",
        emailPlaceholder: "you@email.com",
        service: "Service",
        servicePlaceholder: "Choose a service",
        from: "From",
        fromPlaceholder: "Street, city",
        to: "To",
        toPlaceholder: "Street, city",
        date: "Preferred date",
        message: "Additional details",
        messagePlaceholder: "What we're moving, floor, elevator, rough volume…",
        submit: "Send request",
        submitting: "Sending…",
        successTitle: "Request sent",
        successText:
          "Thank you! We'll be in touch shortly. In a hurry? Call +420 724 273 875.",
        errorTitle: "Something went wrong",
        errorText:
          "We couldn't send the form right now. Please call +420 724 273 875.",
        another: "Send another request",
        required: "Required field",
        invalidEmail: "Enter a valid email",
        invalidPhone: "Enter a valid phone number",
      },
      asideTitle: "Prefer to just call?",
      asideText: "We're available every day. Pick your channel:",
    },
    contact: {
      call: "Call",
      whatsapp: "WhatsApp",
      telegram: "Telegram",
      viber: "Viber",
    },
    footer: {
      tagline: "Moving and freight transport — Prague and the whole Czech Republic.",
      servicesTitle: "Services",
      companyTitle: "Company",
      contactTitle: "Contact",
      rights: "All rights reserved.",
      backToTop: "Back to top",
      madeBy: "Website by",
    },
  },

  ru: {
    meta: {
      title: "Shaman — Грузовое такси 25/8, переезды и доставка | Прага и вся Чехия",
      description:
        "Надёжные переезды, грузовое такси, перевозка мебели и вывоз мусора. Прага и вся Чехия. Быстрый расчёт стоимости бесплатно — звоните +420 724 273 875.",
      ogAlt: "Shaman — грузовое такси в Праге",
      keywords: [
        "грузовое такси Прага",
        "грузоперевозки Прага",
        "переезд Прага",
        "квартирный переезд Прага",
        "перевозка мебели Прага",
        "доставка мебели Прага",
        "вывоз мусора Прага",
        "вывоз старой мебели Прага",
        "грузчики Прага",
        "газель Прага",
        "эвакуатор Прага",
        "грузоперевозки по Чехии",
        "русские грузчики Прага",
        "перевозки Прага недорого",
      ],
    },
    brand: {
      tagline: "Грузовое такси · 25/8",
    },
    nav: {
      services: "Услуги",
      pricing: "Прайс",
      why: "Почему мы",
      process: "Как это работает",
      coverage: "Покрытие",
      about: "О нас",
      contact: "Контакты",
      cta: "Заказать расчёт",
      menu: "Меню",
      close: "Закрыть",
    },
    hero: {
      eyebrow: "Прага · Вся Чехия",
      titleLine1: "Ваш груз",
      titleLine2: "прибудет точно",
      titleLine3: "вовремя и целым.",
      lead:
        "Переезды, грузовое такси и вывоз мусора на собственных фургонах. Одна команда, один номер — от Праги до любого города страны.",
      ctaPrimary: "Рассчитать стоимость",
      ctaSecondary: "Позвонить",
      dispatchLabel: "Диспетчер",
      dispatchNote: "Пн–Вс · быстрый ответ",
      routeFrom: "ПРАГА",
      routeTo: "ЧР",
      stat1Label: "База",
      stat1Value: "Прага",
      stat2Label: "Охват",
      stat2Value: "Вся Чехия",
      stat3Label: "Каналы",
      stat3Value: "Тел · WhatsApp · Telegram",
    },
    services: {
      eyebrow: "Услуги",
      title: "Что мы перевезём для вас",
      lead:
        "Пять услуг, один фургон и команда, которая умеет обращаться с вашим грузом. Выберите нужное — остальное сделаем мы.",
      indexLabel: "Индекс",
      items: [
        {
          id: "stehovani",
          index: "01",
          name: "Переезды",
          tagline: "Квартиры, офисы и отдельные вещи",
          description:
            "Спланируем маршрут, упакуем, погрузим и безопасно перевезём. Без стресса, повреждений и задержек.",
          points: ["Квартиры и дома", "Офисы и магазины", "Упаковка и разборка"],
          image: "/gallery/photo-07.jpeg",
          imageAlt: "Переезд — мебель готова к погрузке",
        },
        {
          id: "nakladni-taxi",
          index: "02",
          name: "Грузовое такси",
          tagline: "Фургон по вызову, когда нужно",
          description:
            "Быстрая доставка одной вещи и срочные поездки. Подаём фургон и выезжаем — по Праге и за её пределы.",
          points: ["Подача по вызову", "По Праге и по стране", "Погрузка и разгрузка"],
          image: "/gallery/photo-10.jpeg",
          imageAlt: "Белый фургон готов к выезду",
        },
        {
          id: "doprava-nabytku",
          index: "03",
          name: "Перевозка мебели",
          tagline: "Из магазина прямо к вашей двери",
          description:
            "Заберём новую мебель у продавца или перевезём вашу. Защищаем углы, поверхности и ваши стены.",
          points: ["Забор у продавца", "Защита при перевозке", "Подъём на этаж"],
          image: "/gallery/photo-24.jpeg",
          imageAlt: "Мебель, упакованная для перевозки",
        },
        {
          id: "nakladni-doprava",
          index: "04",
          name: "Грузоперевозки",
          tagline: "Грузы и материалы по всей Чехии",
          description:
            "Регулярные и разовые доставки, стройматериалы, паллеты и корпоративные грузы — надёжно из точки А в точку Б.",
          points: ["Паллеты и материалы", "Корпоративные доставки", "Разово и регулярно"],
          image: "/gallery/photo-08.jpeg",
          imageAlt: "Загруженный грузовой отсек фургона",
        },
        {
          id: "odvoz-odpadu",
          index: "05",
          name: "Вывоз мусора и утилизация",
          tagline: "Освободим и вывезем куда следует",
          description:
            "Освобождение квартир, подвалов и офисов. Старую мебель и строительный мусор погрузим и отвезём на утилизацию.",
          points: ["Освобождение помещений", "Старая мебель и техника", "Экологичная утилизация"],
          image: "/gallery/photo-05.jpeg",
          imageAlt: "Вывоз и утилизация мусора",
        },
      ],
      cardCta: "Заказать услугу",
    },
    extraServices: {
      eyebrow: "Дополнительные услуги",
      title: "Немного больше, когда нужно",
      lead:
        "Кроме самой перевозки берём на себя и всё вокруг — от рабочих рук для погрузки до эвакуации автомобиля.",
      express: {
        badge: "Экспресс-выезд",
        title: "За 60 минут по Праге",
        text: "Срочно? По Праге обычно можем быть у вас в течение часа после звонка.",
        cta: "Позвонить сейчас",
      },
      items: [
        {
          name: "Эвакуатор",
          text: "Услуги эвакуатора для легковых и грузовых авто — по Праге и по всей Чехии.",
        },
        {
          name: "Грузчики и погрузка",
          text: "Опытные помощники для погрузки, выноса и переноски тяжёлых вещей.",
        },
        {
          name: "Реконструкция и ремонт",
          text: "Небольшие строительные работы и ремонт помещений — часто после освобождения или переезда.",
        },
      ],
    },
    pricing: {
      eyebrow: "Прайс-лист",
      title: "Ориентировочные цены",
      lead:
        "Обзор базовых тарифов. Итоговая цена всегда зависит от объёма — точный расчёт бесплатно по телефону.",
      note: "Цены ориентировочные. Окончательную стоимость подтвердим по объёму работ.",
      ctaLabel: "Бесплатный расчёт без обязательств",
      items: [
        {
          name: "Транспорт по Праге",
          note: "Водитель с фургоном, почасовая оплата",
          price: "от 799 Kč / час",
          addon: "",
        },
        {
          name: "Транспорт с помощью водителя",
          note: "Водитель помогает с погрузкой и переноской",
          price: "от 1 099 Kč / час",
          addon: "Каждый доп. работник + 299 Kč / час",
        },
        {
          name: "Перевозка авто по Праге",
          note: "Эвакуация в пределах Праги",
          price: "от 1 799 Kč",
          addon: "",
        },
        {
          name: "Выезд за пределы Праги",
          note: "Поездки по всей Чехии",
          price: "По договорённости",
          addon: "",
        },
        {
          name: "Перевозка тяжёлых предметов",
          note: "Сейфы, станки, пианино и другое",
          price: "По договорённости",
          addon: "",
        },
      ],
    },
    why: {
      eyebrow: "Почему Shaman",
      title: "Меньше компания. Больше заботы.",
      lead:
        "Вы не номер в системе. Вы звоните напрямую людям, которые погрузят и привезут ваш груз.",
      items: [
        {
          title: "Один номер, вся страна",
          text: "Прага — наша база, но мы едем куда нужно — в любой регион Чехии.",
        },
        {
          title: "Точное время",
          text: "Держим договорённое время. Диспетчер сообщит, где мы и когда прибудем.",
        },
        {
          title: "Надёжно закреплено",
          text: "Ремни, пледы и опытные руки. С вашим грузом обращаемся как со своим.",
        },
        {
          title: "Цена заранее",
          text: "Оценку получаете до выезда. Никаких сюрпризов в конце.",
        },
      ],
    },
    process: {
      eyebrow: "Как это работает",
      title: "От звонка до готово за четыре шага",
      lead: "Без лишних формальностей. Скажите, что и куда — остальное сделаем мы.",
      steps: [
        {
          title: "Свяжитесь с нами",
          text: "Позвоните или напишите в WhatsApp либо Telegram. Скажите, что и куда.",
        },
        {
          title: "Расчёт стоимости",
          text: "Сразу получите честную оценку и предложенную дату.",
        },
        {
          title: "Подаём фургон",
          text: "Приезжаем вовремя, грузим и закрепляем ваш груз.",
        },
        {
          title: "Доставляем",
          text: "Привозим, разгружаем и передаём на месте. Готово.",
        },
      ],
    },
    coverage: {
      eyebrow: "Покрытие",
      title: "База в Праге, выезд по всей Чехии",
      lead:
        "Каждая поездка начинается в Праге и идёт туда, где мы нужны. Некоторые из городов, куда мы ездим чаще всего:",
      hub: "Прага",
      hubNote: "База и диспетчерская",
      cities: [
        "Прага",
        "Брно",
        "Острава",
        "Пльзень",
        "Либерец",
        "Градец-Кралове",
        "Ческе-Будеёвице",
        "Усти-над-Лабем",
        "Карловы Вары",
      ],
      note: "Не видите свой город? Мы едем и туда — просто позвоните.",
    },
    about: {
      eyebrow: "О нас",
      title: "Перевозки, на которые можно положиться",
      paragraphs: [
        "Мы — транспортная команда из Праги. Занимаемся переездами, грузовым такси, перевозкой мебели и вывозом мусора — для частных лиц и компаний.",
        "Работаем напрямую, без лишних посредников. Вы звоните, мы договариваемся и приезжаем. Считаем, что надёжность и понятное общение важнее громких обещаний.",
      ],
      pillars: [
        { label: "Направление", value: "Переезды и грузоперевозки" },
        { label: "Территория", value: "Прага и вся Чехия" },
        { label: "Подход", value: "Прямой контакт, честная цена" },
      ],
    },
    gallery: {
      eyebrow: "Наши работы",
      title: "Из наших поездок",
      lead:
        "Реальные заказы, реальные фургоны. Несколько кадров обычного дня — переезды, материалы, мебель и тяжёлая техника.",
      alt: "Перевозка со Shaman",
    },
    quote: {
      eyebrow: "Бесплатный расчёт",
      title: "Получите оценку стоимости",
      lead:
        "Заполните пару полей — и мы вернёмся с ценой и датой. Или просто позвоните — мы берём трубку.",
      form: {
        name: "Имя",
        namePlaceholder: "Иван Иванов",
        phone: "Телефон",
        phonePlaceholder: "+420 …",
        email: "E-mail",
        emailPlaceholder: "you@email.com",
        service: "Услуга",
        servicePlaceholder: "Выберите услугу",
        from: "Откуда",
        fromPlaceholder: "Улица, город",
        to: "Куда",
        toPlaceholder: "Улица, город",
        date: "Желаемая дата",
        message: "Дополнительная информация",
        messagePlaceholder: "Что перевозим, этаж, лифт, примерный объём…",
        submit: "Отправить заявку",
        submitting: "Отправляем…",
        successTitle: "Заявка отправлена",
        successText:
          "Спасибо! Свяжемся с вами в ближайшее время. Срочно? Звоните +420 724 273 875.",
        errorTitle: "Что-то пошло не так",
        errorText:
          "Не удалось отправить форму. Пожалуйста, позвоните +420 724 273 875.",
        another: "Отправить ещё одну заявку",
        required: "Обязательное поле",
        invalidEmail: "Введите корректный e-mail",
        invalidPhone: "Введите корректный номер телефона",
      },
      asideTitle: "Проще позвонить?",
      asideText: "Мы на связи каждый день. Выберите свой канал:",
    },
    contact: {
      call: "Позвонить",
      whatsapp: "WhatsApp",
      telegram: "Telegram",
      viber: "Viber",
    },
    footer: {
      tagline: "Переезды и грузоперевозки — Прага и вся Чехия.",
      servicesTitle: "Услуги",
      companyTitle: "Компания",
      contactTitle: "Контакты",
      rights: "Все права защищены.",
      backToTop: "Наверх",
      madeBy: "Сайт создан —",
    },
  },
};

export type Dictionary = (typeof dictionaries)["cs"];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
