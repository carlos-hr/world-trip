type TopCities = {
  city: string;
  country: string;
  image: string;
  flag: string;
};

type ContinentInfo = {
  title: string;
  subtitle: string;
  src: string;
  pageAddress: string;
  info: string;
  banner: string;
  countries: number;
  languages: number;
  cities: number;
  topCities: TopCities[];
};

export const continentInfo: ContinentInfo[] = [
  {
    title: "América do norte",
    subtitle: "O continente mais antigo.",
    src: "/images/north-america.svg",
    pageAddress: "/continent/north-america",
    info: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
    banner: "/images/londom.svg",
    countries: 50,
    languages: 60,
    cities: 27,
    topCities: [
      {
        city: "Amsterda",
        country: "Holanda",
        image: "/images/cities/amsterda.svg",
        flag: "/images/flags/hl.svg",
      },
      {
        city: "Londom",
        country: "Reino Unido",
        image: "/images/cities/londom.svg",
        flag: "/images/flags/uk.svg",
      },
      {
        city: "Paris",
        country: "França",
        image: "/images/cities/paris.svg",
        flag: "/images/flags/fr.svg",
      },
      {
        city: "Praga",
        country: "República Tcheca",
        image: "/images/cities/praga.svg",
        flag: "/images/flags/rt.svg",
      },
      {
        city: "Roma",
        country: "Itália",
        image: "/images/cities/roma.svg",
        flag: "/images/flags/it.svg",
      },
    ],
  },
  {
    title: "América do sul",
    subtitle: "O continente mais antigo.",
    src: "/images/south-america.svg",
    pageAddress: "/continent/south-america",
    info: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
    banner: "/images/londom.svg",
    countries: 50,
    languages: 60,
    cities: 27,
    topCities: [
      {
        city: "Amsterda",
        country: "Holanda",
        image: "/images/cities/amsterda.svg",
        flag: "/images/flags/hl.svg",
      },
      {
        city: "Londom",
        country: "Reino Unido",
        image: "/images/cities/londom.svg",
        flag: "/images/flags/uk.svg",
      },
      {
        city: "Paris",
        country: "França",
        image: "/images/cities/paris.svg",
        flag: "/images/flags/fr.svg",
      },
      {
        city: "Praga",
        country: "República Tcheca",
        image: "/images/cities/praga.svg",
        flag: "/images/flags/rt.svg",
      },
      {
        city: "Roma",
        country: "Itália",
        image: "/images/cities/roma.svg",
        flag: "/images/flags/it.svg",
      },
    ],
  },
  {
    title: "Ásia",
    subtitle: "O continente mais antigo.",
    src: "/images/asia.svg",
    pageAddress: "/continent/asia",
    info: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
    banner: "/images/londom.svg",
    countries: 50,
    languages: 60,
    cities: 27,
    topCities: [
      {
        city: "Amsterda",
        country: "Holanda",
        image: "/images/cities/amsterda.svg",
        flag: "/images/flags/hl.svg",
      },
      {
        city: "Londom",
        country: "Reino Unido",
        image: "/images/cities/londom.svg",
        flag: "/images/flags/uk.svg",
      },
      {
        city: "Paris",
        country: "França",
        image: "/images/cities/paris.svg",
        flag: "/images/flags/fr.svg",
      },
      {
        city: "Praga",
        country: "República Tcheca",
        image: "/images/cities/praga.svg",
        flag: "/images/flags/rt.svg",
      },
      {
        city: "Roma",
        country: "Itália",
        image: "/images/cities/roma.svg",
        flag: "/images/flags/it.svg",
      },
    ],
  },
  {
    title: "África",
    subtitle: "O continente mais antigo.",
    src: "/images/africa.svg",
    pageAddress: "/continent/africa",
    info: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
    banner: "/images/londom.svg",
    countries: 50,
    languages: 60,
    cities: 27,
    topCities: [
      {
        city: "Amsterda",
        country: "Holanda",
        image: "/images/cities/amsterda.svg",
        flag: "/images/flags/hl.svg",
      },
      {
        city: "Londom",
        country: "Reino Unido",
        image: "/images/cities/londom.svg",
        flag: "/images/flags/uk.svg",
      },
      {
        city: "Paris",
        country: "França",
        image: "/images/cities/paris.svg",
        flag: "/images/flags/fr.svg",
      },
      {
        city: "Praga",
        country: "República Tcheca",
        image: "/images/cities/praga.svg",
        flag: "/images/flags/rt.svg",
      },
      {
        city: "Roma",
        country: "Itália",
        image: "/images/cities/roma.svg",
        flag: "/images/flags/it.svg",
      },
    ],
  },
  {
    title: "Europa",
    subtitle: "O continente mais antigo.",
    src: "/images/europe.svg",
    pageAddress: "/continent/europe",
    info: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
    banner: "/images/londom.svg",
    countries: 50,
    languages: 60,
    cities: 27,
    topCities: [
      {
        city: "Amsterda",
        country: "Holanda",
        image: "/images/cities/amsterda.svg",
        flag: "/images/flags/hl.svg",
      },
      {
        city: "Londom",
        country: "Reino Unido",
        image: "/images/cities/londom.svg",
        flag: "/images/flags/uk.svg",
      },
      {
        city: "Paris",
        country: "França",
        image: "/images/cities/paris.svg",
        flag: "/images/flags/fr.svg",
      },
      {
        city: "Praga",
        country: "República Tcheca",
        image: "/images/cities/praga.svg",
        flag: "/images/flags/rt.svg",
      },
      {
        city: "Roma",
        country: "Itália",
        image: "/images/cities/roma.svg",
        flag: "/images/flags/it.svg",
      },
    ],
  },
  {
    title: "Oceania",
    subtitle: "O continente mais antigo.",
    src: "/images/oceania.svg",
    pageAddress: "/continent/oceania",
    info: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
    banner: "/images/londom.svg",
    countries: 50,
    languages: 60,
    cities: 27,
    topCities: [
      {
        city: "Amsterda",
        country: "Holanda",
        image: "/images/cities/amsterda.svg",
        flag: "/images/flags/hl.svg",
      },
      {
        city: "Londom",
        country: "Reino Unido",
        image: "/images/cities/londom.svg",
        flag: "/images/flags/uk.svg",
      },
      {
        city: "Paris",
        country: "França",
        image: "/images/cities/paris.svg",
        flag: "/images/flags/fr.svg",
      },
      {
        city: "Praga",
        country: "República Tcheca",
        image: "/images/cities/praga.svg",
        flag: "/images/flags/rt.svg",
      },
      {
        city: "Roma",
        country: "Itália",
        image: "/images/cities/roma.svg",
        flag: "/images/flags/it.svg",
      },
    ],
  },
];
