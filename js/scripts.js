//Use pokedex.org site to get all pokemon information
let pokemonList = [
    {
      name: "Bulbasaur",
      national_id: 1,
      descriptions: [
        {
          name: "bulbasaur_gen_5",
          resource_uri: "/api/v1/description/15/",
        },
      ],
      types: [{ name: "poison" }, { name: "grass" }],
    },
    {
      name: "Ivysaur",
      national_id: 2,
      descriptions: [
        {
          name: "ivysaur_gen_5",
          resource_uri: "/api/v1/description/29/",
        },
      ],
      types: [{ name: "poison" }, { name: "grass" }],
    },
    {
      name: "Venusaur",
      national_id: 3,
      descriptions: [
        {
          name: "venusaur_gen_5",
          resource_uri: "/api/v1/description/45/",
        },
      ],
      types: [{ name: "poison" }, { name: "grass" }],
    },
    {
      name: "Charmander",
      national_id: 4,
      descriptions: [
        {
          name: "charmander_gen_5",
          resource_uri: "/api/v1/description/61/",
        },
      ],
      types: [{ name: "fire" }],
    },
    {
      name: "Charmeleon",
      national_id: 5,
      descriptions: [
        {
          name: "charmeleon_gen_5",
          resource_uri: "/api/v1/description/77/",
        },
      ],
      types: [{ name: "fire" }],
    },
    {
      name: "Charizard",
      national_id: 6,
      descriptions: [
        {
          name: "charizard_gen_5",
          resource_uri: "/api/v1/description/93/",
        },
      ],
      types: [{ name: "flying" }, { name: "fire" }],
    },
    {
      name: "Squirtle",
      national_id: 7,
      descriptions: [
        {
          name: "squirtle_gen_5",
          resource_uri: "/api/v1/description/109/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Wartortle",
      national_id: 8,
      descriptions: [
        {
          name: "wartortle_gen_5",
          resource_uri: "/api/v1/description/125/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Blastoise",
      national_id: 9,
      descriptions: [
        {
          name: "blastoise_gen_5",
          resource_uri: "/api/v1/description/141/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Caterpie",
      national_id: 10,
      descriptions: [
        {
          name: "caterpie_gen_5",
          resource_uri: "/api/v1/description/157/",
        },
      ],
      types: [{ name: "bug" }],
    },
    {
      name: "Metapod",
      national_id: 11,
      descriptions: [
        {
          name: "metapod_gen_5",
          resource_uri: "/api/v1/description/173/",
        },
      ],
      types: [{ name: "bug" }],
    },
    {
      name: "Butterfree",
      national_id: 12,
      descriptions: [
        {
          name: "butterfree_gen_5",
          resource_uri: "/api/v1/description/189/",
        },
      ],
      types: [{ name: "flying" }, { name: "bug" }],
    },
    {
      name: "Weedle",
      national_id: 13,
      descriptions: [
        {
          name: "weedle_gen_5",
          resource_uri: "/api/v1/description/205/",
        },
      ],
      types: [{ name: "poison" }, { name: "bug" }],
    },
    {
      name: "Kakuna",
      national_id: 14,
      descriptions: [
        {
          name: "kakuna_gen_5",
          resource_uri: "/api/v1/description/221/",
        },
      ],
      types: [{ name: "poison" }, { name: "bug" }],
    },
    {
      name: "Beedrill",
      national_id: 15,
      descriptions: [
        {
          name: "beedrill_gen_5",
          resource_uri: "/api/v1/description/237/",
        },
      ],
      types: [{ name: "poison" }, { name: "bug" }],
    },
    {
      name: "Pidgey",
      national_id: 16,
      descriptions: [
        {
          name: "pidgey_gen_5",
          resource_uri: "/api/v1/description/253/",
        },
      ],
      types: [{ name: "normal" }, { name: "flying" }],
    },
    {
      name: "Pidgeotto",
      national_id: 17,
      descriptions: [
        {
          name: "pidgeotto_gen_5",
          resource_uri: "/api/v1/description/269/",
        },
      ],
      types: [{ name: "normal" }, { name: "flying" }],
    },
    {
      name: "Pidgeot",
      national_id: 18,
      descriptions: [
        {
          name: "pidgeotto_gen_5",
          resource_uri: "/api/v1/description/269/",
        },
        {
          name: "pidgeot_gen_5",
          resource_uri: "/api/v1/description/285/",
        },
      ],
      types: [{ name: "normal" }, { name: "flying" }],
    },
    {
      name: "Rattata",
      national_id: 19,
      descriptions: [
        {
          name: "rattata_gen_5",
          resource_uri: "/api/v1/description/301/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Raticate",
      national_id: 20,
      descriptions: [
        {
          name: "raticate_gen_5",
          resource_uri: "/api/v1/description/315/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Spearow",
      national_id: 21,
      descriptions: [
        {
          name: "spearow_gen_5",
          resource_uri: "/api/v1/description/329/",
        },
      ],
      types: [{ name: "normal" }, { name: "flying" }],
    },
    {
      name: "Fearow",
      national_id: 22,
      descriptions: [
        {
          name: "fearow_gen_5",
          resource_uri: "/api/v1/description/346/",
        },
      ],
      types: [{ name: "normal" }, { name: "flying" }],
    },
    {
      name: "Ekans",
      national_id: 23,
      descriptions: [
        { name: "ekans_gen_5", resource_uri: "/api/v1/description/362/" },
      ],
      types: [{ name: "poison" }],
    },
    {
      name: "Arbok",
      national_id: 24,
      descriptions: [
        { name: "arbok_gen_5", resource_uri: "/api/v1/description/377/" },
      ],
      types: [{ name: "poison" }],
    },
    {
      name: "Pikachu",
      national_id: 25,
      descriptions: [
        {
          name: "pikachu_gen_5",
          resource_uri: "/api/v1/description/395/",
        },
      ],
      types: [{ name: "electric" }],
    },
    {
      name: "Raichu",
      national_id: 26,
      descriptions: [
        {
          name: "raichu_gen_5",
          resource_uri: "/api/v1/description/414/",
        },
      ],
      types: [{ name: "electric" }],
    },
    {
      name: "Sandshrew",
      national_id: 27,
      descriptions: [
        {
          name: "sandshrew_gen_5",
          resource_uri: "/api/v1/description/431/",
        },
      ],
      types: [{ name: "ground" }],
    },
    {
      name: "Sandslash",
      national_id: 28,
      descriptions: [
        {
          name: "sandslash_gen_5",
          resource_uri: "/api/v1/description/447/",
        },
      ],
      types: [{ name: "ground" }],
    },
    {
      name: "Nidoran-f",
      national_id: 29,
      descriptions: [
        {
          name: "nidoran-f_gen_5",
          resource_uri: "/api/v1/description/463/",
        },
      ],
      types: [{ name: "poison" }],
    },
    {
      name: "Nidorina",
      national_id: 30,
      descriptions: [
        {
          name: "nidorina_gen_5",
          resource_uri: "/api/v1/description/479/",
        },
      ],
      types: [{ name: "poison" }],
    },
    {
      name: "Nidoqueen",
      national_id: 31,
      descriptions: [
        {
          name: "nidoqueen_gen_5",
          resource_uri: "/api/v1/description/495/",
        },
      ],
      types: [{ name: "poison" }, { name: "ground" }],
    },
    {
      name: "Nidoran-m",
      national_id: 32,
      descriptions: [
        {
          name: "nidoran-m_gen_5",
          resource_uri: "/api/v1/description/510/",
        },
      ],
      types: [{ name: "poison" }],
    },
    {
      name: "Nidorino",
      national_id: 33,
      descriptions: [
        {
          name: "nidorino_gen_5",
          resource_uri: "/api/v1/description/525/",
        },
      ],
      types: [{ name: "poison" }],
    },
    {
      name: "Nidoking",
      national_id: 34,
      descriptions: [
        {
          name: "nidoking_gen_5",
          resource_uri: "/api/v1/description/541/",
        },
      ],
      types: [{ name: "poison" }, { name: "ground" }],
    },
    {
      name: "Clefairy",
      national_id: 35,
      descriptions: [
        {
          name: "clefairy_gen_5",
          resource_uri: "/api/v1/description/558/",
        },
      ],
      types: [{ name: "fairy" }],
    },
    {
      name: "Clefable",
      national_id: 36,
      descriptions: [
        {
          name: "clefable_gen_5",
          resource_uri: "/api/v1/description/575/",
        },
      ],
      types: [{ name: "fairy" }],
    },
    {
      name: "Vulpix",
      national_id: 37,
      descriptions: [
        {
          name: "vulpix_gen_5",
          resource_uri: "/api/v1/description/591/",
        },
      ],
      types: [{ name: "fire" }],
    },
    {
      name: "Ninetales",
      national_id: 38,
      descriptions: [
        {
          name: "ninetales_gen_5",
          resource_uri: "/api/v1/description/607/",
        },
      ],
      types: [{ name: "fire" }],
    },
    {
      name: "Jigglypuff",
      national_id: 39,
      descriptions: [
        {
          name: "jigglypuff_gen_5",
          resource_uri: "/api/v1/description/624/",
        },
      ],
      types: [{ name: "normal" }, { name: "fairy" }],
    },
    {
      name: "Wigglytuff",
      national_id: 40,
      descriptions: [
        {
          name: "wigglytuff_gen_5",
          resource_uri: "/api/v1/description/641/",
        },
      ],
      types: [{ name: "normal" }, { name: "fairy" }],
    },
    {
      name: "Zubat",
      national_id: 41,
      descriptions: [
        { name: "zubat_gen_5", resource_uri: "/api/v1/description/660/" },
      ],
      types: [{ name: "flying" }, { name: "poison" }],
    },
    {
      name: "Golbat",
      national_id: 42,
      descriptions: [
        {
          name: "golbat_gen_5",
          resource_uri: "/api/v1/description/679/",
        },
      ],
      types: [{ name: "flying" }, { name: "poison" }],
    },
    {
      name: "Oddish",
      national_id: 43,
      descriptions: [
        {
          name: "oddish_gen_5",
          resource_uri: "/api/v1/description/696/",
        },
      ],
      types: [{ name: "poison" }, { name: "grass" }],
    },
    {
      name: "Gloom",
      national_id: 44,
      descriptions: [
        { name: "gloom_gen_5", resource_uri: "/api/v1/description/713/" },
      ],
      types: [{ name: "poison" }, { name: "grass" }],
    },
    {
      name: "Vileplume",
      national_id: 45,
      descriptions: [
        {
          name: "vileplume_gen_5",
          resource_uri: "/api/v1/description/730/",
        },
      ],
      types: [{ name: "poison" }, { name: "grass" }],
    },
    {
      name: "Paras",
      national_id: 46,
      descriptions: [
        { name: "paras_gen_5", resource_uri: "/api/v1/description/747/" },
        {
          name: "parasect_gen_5",
          resource_uri: "/api/v1/description/764/",
        },
      ],
      types: [{ name: "bug" }, { name: "grass" }],
    },
    {
      name: "Parasect",
      national_id: 47,
      descriptions: [
        {
          name: "parasect_gen_5",
          resource_uri: "/api/v1/description/764/",
        },
      ],
      types: [{ name: "bug" }, { name: "grass" }],
    },
    {
      name: "Venonat",
      national_id: 48,
      descriptions: [
        {
          name: "venonat_gen_5",
          resource_uri: "/api/v1/description/780/",
        },
      ],
      types: [{ name: "poison" }, { name: "bug" }],
    },
    {
      name: "Venomoth",
      national_id: 49,
      descriptions: [
        {
          name: "venomoth_gen_5",
          resource_uri: "/api/v1/description/795/",
        },
      ],
      types: [{ name: "poison" }, { name: "bug" }],
    },
    {
      name: "Diglett",
      national_id: 50,
      descriptions: [
        {
          name: "diglett_gen_5",
          resource_uri: "/api/v1/description/811/",
        },
      ],
      types: [{ name: "ground" }],
    },
    {
      name: "Dugtrio",
      national_id: 51,
      descriptions: [
        {
          name: "dugtrio_gen_5",
          resource_uri: "/api/v1/description/827/",
        },
      ],
      types: [{ name: "ground" }],
    },
    {
      name: "Meowth",
      national_id: 52,
      descriptions: [
        {
          name: "meowth_gen_5",
          resource_uri: "/api/v1/description/843/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Persian",
      national_id: 53,
      descriptions: [
        {
          name: "persian_gen_5",
          resource_uri: "/api/v1/description/857/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Psyduck",
      national_id: 54,
      descriptions: [
        {
          name: "psyduck_gen_5",
          resource_uri: "/api/v1/description/874/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Golduck",
      national_id: 55,
      descriptions: [
        {
          name: "golduck_gen_5",
          resource_uri: "/api/v1/description/892/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Mankey",
      national_id: 56,
      descriptions: [
        {
          name: "mankey_gen_5",
          resource_uri: "/api/v1/description/907/",
        },
      ],
      types: [{ name: "fighting" }],
    },
    {
      name: "Primeape",
      national_id: 57,
      descriptions: [
        {
          name: "primeape_gen_5",
          resource_uri: "/api/v1/description/923/",
        },
      ],
      types: [{ name: "fighting" }],
    },
    {
      name: "Growlithe",
      national_id: 58,
      descriptions: [
        {
          name: "growlithe_gen_5",
          resource_uri: "/api/v1/description/938/",
        },
      ],
      types: [{ name: "fire" }],
    },
    {
      name: "Arcanine",
      national_id: 59,
      descriptions: [
        {
          name: "arcanine_gen_5",
          resource_uri: "/api/v1/description/954/",
        },
      ],
      types: [{ name: "fire" }],
    },
    {
      name: "Poliwag",
      national_id: 60,
      descriptions: [
        {
          name: "poliwag_gen_5",
          resource_uri: "/api/v1/description/969/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Poliwhirl",
      national_id: 61,
      descriptions: [
        {
          name: "poliwhirl_gen_5",
          resource_uri: "/api/v1/description/985/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Poliwrath",
      national_id: 62,
      descriptions: [
        {
          name: "poliwrath_gen_5",
          resource_uri: "/api/v1/description/1001/",
        },
      ],
      types: [{ name: "fighting" }, { name: "water" }],
    },
    {
      name: "Abra",
      national_id: 63,
      descriptions: [
        { name: "abra_gen_5", resource_uri: "/api/v1/description/1020/" },
        {
          name: "kadabra_gen_5",
          resource_uri: "/api/v1/description/1039/",
        },
      ],
      types: [{ name: "psychic" }],
    },
    {
      name: "Kadabra",
      national_id: 64,
      descriptions: [
        {
          name: "kadabra_gen_5",
          resource_uri: "/api/v1/description/1039/",
        },
      ],
      types: [{ name: "psychic" }],
    },
    {
      name: "Alakazam",
      national_id: 65,
      descriptions: [
        {
          name: "alakazam_gen_5",
          resource_uri: "/api/v1/description/1058/",
        },
      ],
      types: [{ name: "psychic" }],
    },
    {
      name: "Machop",
      national_id: 66,
      descriptions: [
        {
          name: "machop_gen_5",
          resource_uri: "/api/v1/description/1077/",
        },
      ],
      types: [{ name: "fighting" }],
    },
    {
      name: "Machoke",
      national_id: 67,
      descriptions: [
        {
          name: "machoke_gen_5",
          resource_uri: "/api/v1/description/1096/",
        },
      ],
      types: [{ name: "fighting" }],
    },
    {
      name: "Machamp",
      national_id: 68,
      descriptions: [
        {
          name: "machamp_gen_5",
          resource_uri: "/api/v1/description/1115/",
        },
      ],
      types: [{ name: "fighting" }],
    },
    {
      name: "Bellsprout",
      national_id: 69,
      descriptions: [
        {
          name: "bellsprout_gen_5",
          resource_uri: "/api/v1/description/1131/",
        },
      ],
      types: [{ name: "poison" }, { name: "grass" }],
    },
    {
      name: "Weepinbell",
      national_id: 70,
      descriptions: [
        {
          name: "weepinbell_gen_5",
          resource_uri: "/api/v1/description/1146/",
        },
      ],
      types: [{ name: "poison" }, { name: "grass" }],
    },
    {
      name: "Victreebel",
      national_id: 71,
      descriptions: [
        {
          name: "victreebel_gen_5",
          resource_uri: "/api/v1/description/1162/",
        },
      ],
      types: [{ name: "poison" }, { name: "grass" }],
    },
    {
      name: "Tentacool",
      national_id: 72,
      descriptions: [
        {
          name: "tentacool_gen_5",
          resource_uri: "/api/v1/description/1181/",
        },
      ],
      types: [{ name: "poison" }, { name: "water" }],
    },
    {
      name: "Tentacruel",
      national_id: 73,
      descriptions: [
        {
          name: "tentacruel_gen_5",
          resource_uri: "/api/v1/description/1200/",
        },
      ],
      types: [{ name: "poison" }, { name: "water" }],
    },
    {
      name: "Geodude",
      national_id: 74,
      descriptions: [
        {
          name: "geodude_gen_5",
          resource_uri: "/api/v1/description/1218/",
        },
      ],
      types: [{ name: "ground" }, { name: "rock" }],
    },
    {
      name: "Graveler",
      national_id: 75,
      descriptions: [
        {
          name: "graveler_gen_5",
          resource_uri: "/api/v1/description/1237/",
        },
      ],
      types: [{ name: "ground" }, { name: "rock" }],
    },
    {
      name: "Golem",
      national_id: 76,
      descriptions: [
        {
          name: "golem_gen_5",
          resource_uri: "/api/v1/description/1256/",
        },
      ],
      types: [{ name: "ground" }, { name: "rock" }],
    },
    {
      name: "Ponyta",
      national_id: 77,
      descriptions: [
        {
          name: "ponyta_gen_5",
          resource_uri: "/api/v1/description/1274/",
        },
      ],
      types: [{ name: "fire" }],
    },
    {
      name: "Rapidash",
      national_id: 78,
      descriptions: [
        {
          name: "rapidash_gen_5",
          resource_uri: "/api/v1/description/1292/",
        },
      ],
      types: [{ name: "fire" }],
    },
    {
      name: "Slowpoke",
      national_id: 79,
      descriptions: [
        {
          name: "slowpoke_gen_5",
          resource_uri: "/api/v1/description/1307/",
        },
      ],
      types: [{ name: "water" }, { name: "psychic" }],
    },
    {
      name: "Slowbro",
      national_id: 80,
      descriptions: [
        {
          name: "slowbro_gen_5",
          resource_uri: "/api/v1/description/1323/",
        },
      ],
      types: [{ name: "water" }, { name: "psychic" }],
    },
    {
      name: "Magnemite",
      national_id: 81,
      descriptions: [
        {
          name: "magnemite_gen_5",
          resource_uri: "/api/v1/description/1340/",
        },
      ],
      types: [{ name: "steel" }, { name: "electric" }],
    },
    {
      name: "Magneton",
      national_id: 82,
      descriptions: [
        {
          name: "magneton_gen_5",
          resource_uri: "/api/v1/description/1357/",
        },
      ],
      types: [{ name: "steel" }, { name: "electric" }],
    },
    {
      name: "Farfetchd",
      national_id: 83,
      descriptions: [
        {
          name: "farfetchd_gen_5",
          resource_uri: "/api/v1/description/1373/",
        },
      ],
      types: [{ name: "normal" }, { name: "flying" }],
    },
    {
      name: "Doduo",
      national_id: 84,
      descriptions: [
        {
          name: "doduo_gen_5",
          resource_uri: "/api/v1/description/1390/",
        },
      ],
      types: [{ name: "normal" }, { name: "flying" }],
    },
    {
      name: "Dodrio",
      national_id: 85,
      descriptions: [
        {
          name: "dodrio_gen_5",
          resource_uri: "/api/v1/description/1407/",
        },
      ],
      types: [{ name: "normal" }, { name: "flying" }],
    },
    {
      name: "Seel",
      national_id: 86,
      descriptions: [
        { name: "seel_gen_5", resource_uri: "/api/v1/description/1423/" },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Dewgong",
      national_id: 87,
      descriptions: [
        {
          name: "dewgong_gen_5",
          resource_uri: "/api/v1/description/1437/",
        },
      ],
      types: [{ name: "water" }, { name: "ice" }],
    },
    {
      name: "Grimer",
      national_id: 88,
      descriptions: [
        {
          name: "grimer_gen_5",
          resource_uri: "/api/v1/description/1452/",
        },
      ],
      types: [{ name: "poison" }],
    },
    {
      name: "Muk",
      national_id: 89,
      descriptions: [
        { name: "muk_gen_5", resource_uri: "/api/v1/description/1467/" },
      ],
      types: [{ name: "poison" }],
    },
    {
      name: "Shellder",
      national_id: 90,
      descriptions: [
        {
          name: "shellder_gen_5",
          resource_uri: "/api/v1/description/1482/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Cloyster",
      national_id: 91,
      descriptions: [
        {
          name: "cloyster_gen_5",
          resource_uri: "/api/v1/description/1497/",
        },
      ],
      types: [{ name: "water" }, { name: "ice" }],
    },
    {
      name: "Gastly",
      national_id: 92,
      descriptions: [
        {
          name: "gastly_gen_5",
          resource_uri: "/api/v1/description/1515/",
        },
      ],
      types: [{ name: "poison" }, { name: "ghost" }],
    },
    {
      name: "Haunter",
      national_id: 93,
      descriptions: [
        {
          name: "haunter_gen_5",
          resource_uri: "/api/v1/description/1532/",
        },
      ],
      types: [{ name: "poison" }, { name: "ghost" }],
    },
    {
      name: "Gengar",
      national_id: 94,
      descriptions: [
        {
          name: "gengar_gen_5",
          resource_uri: "/api/v1/description/1550/",
        },
      ],
      types: [{ name: "poison" }, { name: "ghost" }],
    },
    {
      name: "Onix",
      national_id: 95,
      descriptions: [
        { name: "onix_gen_5", resource_uri: "/api/v1/description/1568/" },
      ],
      types: [{ name: "ground" }, { name: "rock" }],
    },
    {
      name: "Drowzee",
      national_id: 96,
      descriptions: [
        {
          name: "drowzee_gen_5",
          resource_uri: "/api/v1/description/1584/",
        },
      ],
      types: [{ name: "psychic" }],
    },
    {
      name: "Hypno",
      national_id: 97,
      descriptions: [
        {
          name: "hypno_gen_5",
          resource_uri: "/api/v1/description/1600/",
        },
      ],
      types: [{ name: "psychic" }],
    },
    {
      name: "Krabby",
      national_id: 98,
      descriptions: [
        {
          name: "krabby_gen_5",
          resource_uri: "/api/v1/description/1615/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Kingler",
      national_id: 99,
      descriptions: [
        {
          name: "kingler_gen_5",
          resource_uri: "/api/v1/description/1631/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Voltorb",
      national_id: 100,
      descriptions: [
        {
          name: "voltorb_gen_5",
          resource_uri: "/api/v1/description/1647/",
        },
      ],
      types: [{ name: "electric" }],
    },
    {
      name: "Electrode",
      national_id: 101,
      descriptions: [
        {
          name: "electrode_gen_5",
          resource_uri: "/api/v1/description/1663/",
        },
      ],
      types: [{ name: "electric" }],
    },
    {
      name: "Exeggcute",
      national_id: 102,
      descriptions: [
        {
          name: "exeggcute_gen_5",
          resource_uri: "/api/v1/description/1679/",
        },
      ],
      types: [{ name: "grass" }, { name: "psychic" }],
    },
    {
      name: "Exeggutor",
      national_id: 103,
      descriptions: [
        {
          name: "exeggutor_gen_5",
          resource_uri: "/api/v1/description/1695/",
        },
      ],
      types: [{ name: "grass" }, { name: "psychic" }],
    },
    {
      name: "Cubone",
      national_id: 104,
      descriptions: [
        {
          name: "cubone_gen_5",
          resource_uri: "/api/v1/description/1710/",
        },
      ],
      types: [{ name: "ground" }],
    },
    {
      name: "Marowak",
      national_id: 105,
      descriptions: [
        {
          name: "marowak_gen_5",
          resource_uri: "/api/v1/description/1726/",
        },
      ],
      types: [{ name: "ground" }],
    },
    {
      name: "Hitmonlee",
      national_id: 106,
      descriptions: [
        {
          name: "hitmonlee_gen_5",
          resource_uri: "/api/v1/description/1742/",
        },
      ],
      types: [{ name: "fighting" }],
    },
    {
      name: "Hitmonchan",
      national_id: 107,
      descriptions: [
        {
          name: "hitmonchan_gen_5",
          resource_uri: "/api/v1/description/1757/",
        },
      ],
      types: [{ name: "fighting" }],
    },
    {
      name: "Lickitung",
      national_id: 108,
      descriptions: [
        {
          name: "lickitung_gen_5",
          resource_uri: "/api/v1/description/1772/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Koffing",
      national_id: 109,
      descriptions: [
        {
          name: "koffing_gen_5",
          resource_uri: "/api/v1/description/1789/",
        },
      ],
      types: [{ name: "poison" }],
    },
    {
      name: "Weezing",
      national_id: 110,
      descriptions: [
        {
          name: "weezing_gen_5",
          resource_uri: "/api/v1/description/1804/",
        },
      ],
      types: [{ name: "poison" }],
    },
    {
      name: "Rhyhorn",
      national_id: 111,
      descriptions: [
        {
          name: "rhyhorn_gen_5",
          resource_uri: "/api/v1/description/1820/",
        },
      ],
      types: [{ name: "ground" }, { name: "rock" }],
    },
    {
      name: "Rhydon",
      national_id: 112,
      descriptions: [
        {
          name: "rhydon_gen_5",
          resource_uri: "/api/v1/description/1838/",
        },
      ],
      types: [{ name: "ground" }, { name: "rock" }],
    },
    {
      name: "Chansey",
      national_id: 113,
      descriptions: [
        {
          name: "chansey_gen_5",
          resource_uri: "/api/v1/description/1856/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Tangela",
      national_id: 114,
      descriptions: [
        {
          name: "tangela_gen_5",
          resource_uri: "/api/v1/description/1872/",
        },
      ],
      types: [{ name: "grass" }],
    },
    {
      name: "Kangaskhan",
      national_id: 115,
      descriptions: [
        {
          name: "kangaskhan_gen_5",
          resource_uri: "/api/v1/description/1888/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Horsea",
      national_id: 116,
      descriptions: [
        {
          name: "horsea_gen_5",
          resource_uri: "/api/v1/description/1905/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Seadra",
      national_id: 117,
      descriptions: [
        {
          name: "seadra_gen_5",
          resource_uri: "/api/v1/description/1921/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Goldeen",
      national_id: 118,
      descriptions: [
        {
          name: "goldeen_gen_5",
          resource_uri: "/api/v1/description/1939/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Seaking",
      national_id: 119,
      descriptions: [
        {
          name: "seaking_gen_5",
          resource_uri: "/api/v1/description/1958/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Staryu",
      national_id: 120,
      descriptions: [
        {
          name: "staryu_gen_5",
          resource_uri: "/api/v1/description/1975/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Starmie",
      national_id: 121,
      descriptions: [
        {
          name: "starmie_gen_5",
          resource_uri: "/api/v1/description/1991/",
        },
      ],
      types: [{ name: "water" }, { name: "psychic" }],
    },
    {
      name: "Mr-mime",
      national_id: 122,
      descriptions: [
        {
          name: "mr-mime_gen_5",
          resource_uri: "/api/v1/description/2008/",
        },
      ],
      types: [{ name: "fairy" }, { name: "psychic" }],
    },
    {
      name: "Scyther",
      national_id: 123,
      descriptions: [
        {
          name: "scyther_gen_5",
          resource_uri: "/api/v1/description/2025/",
        },
      ],
      types: [{ name: "flying" }, { name: "bug" }],
    },
    {
      name: "Jynx",
      national_id: 124,
      descriptions: [
        { name: "jynx_gen_5", resource_uri: "/api/v1/description/2041/" },
      ],
      types: [{ name: "ice" }, { name: "psychic" }],
    },
    {
      name: "Electabuzz",
      national_id: 125,
      descriptions: [
        {
          name: "electabuzz_gen_5",
          resource_uri: "/api/v1/description/2058/",
        },
      ],
      types: [{ name: "electric" }],
    },
    {
      name: "Magmar",
      national_id: 126,
      descriptions: [
        {
          name: "magmar_gen_5",
          resource_uri: "/api/v1/description/2074/",
        },
      ],
      types: [{ name: "fire" }],
    },
    {
      name: "Pinsir",
      national_id: 127,
      descriptions: [
        {
          name: "pinsir_gen_5",
          resource_uri: "/api/v1/description/2090/",
        },
      ],
      types: [{ name: "bug" }],
    },
    {
      name: "Tauros",
      national_id: 128,
      descriptions: [
        {
          name: "tauros_gen_5",
          resource_uri: "/api/v1/description/2105/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Magikarp",
      national_id: 129,
      descriptions: [
        {
          name: "magikarp_gen_5",
          resource_uri: "/api/v1/description/2124/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Gyarados",
      national_id: 130,
      descriptions: [
        {
          name: "gyarados_gen_5",
          resource_uri: "/api/v1/description/2143/",
        },
      ],
      types: [{ name: "flying" }, { name: "water" }],
    },
    {
      name: "Lapras",
      national_id: 131,
      descriptions: [
        {
          name: "lapras_gen_5",
          resource_uri: "/api/v1/description/2159/",
        },
      ],
      types: [{ name: "water" }, { name: "ice" }],
    },
    {
      name: "Ditto",
      national_id: 132,
      descriptions: [
        {
          name: "ditto_gen_5",
          resource_uri: "/api/v1/description/2175/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Eevee",
      national_id: 133,
      descriptions: [
        {
          name: "eevee_gen_5",
          resource_uri: "/api/v1/description/2192/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Vaporeon",
      national_id: 134,
      descriptions: [
        {
          name: "vaporeon_gen_5",
          resource_uri: "/api/v1/description/2209/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Jolteon",
      national_id: 135,
      descriptions: [
        {
          name: "jolteon_gen_5",
          resource_uri: "/api/v1/description/2226/",
        },
      ],
      types: [{ name: "electric" }],
    },
    {
      name: "Flareon",
      national_id: 136,
      descriptions: [
        {
          name: "flareon_gen_5",
          resource_uri: "/api/v1/description/2243/",
        },
      ],
      types: [{ name: "fire" }],
    },
    {
      name: "Porygon",
      national_id: 137,
      descriptions: [
        {
          name: "porygon_gen_5",
          resource_uri: "/api/v1/description/2260/",
        },
        {
          name: "porygon2_gen_5",
          resource_uri: "/api/v1/description/3643/",
        },
        {
          name: "porygon-z_gen_5",
          resource_uri: "/api/v1/description/5754/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Omanyte",
      national_id: 138,
      descriptions: [
        {
          name: "omanyte_gen_5",
          resource_uri: "/api/v1/description/2274/",
        },
      ],
      types: [{ name: "rock" }, { name: "water" }],
    },
    {
      name: "Omastar",
      national_id: 139,
      descriptions: [
        {
          name: "omastar_gen_5",
          resource_uri: "/api/v1/description/2290/",
        },
      ],
      types: [{ name: "rock" }, { name: "water" }],
    },
    {
      name: "Kabuto",
      national_id: 140,
      descriptions: [
        {
          name: "kabuto_gen_5",
          resource_uri: "/api/v1/description/2305/",
        },
        {
          name: "kabutops_gen_5",
          resource_uri: "/api/v1/description/2321/",
        },
      ],
      types: [{ name: "rock" }, { name: "water" }],
    },
    {
      name: "Kabutops",
      national_id: 141,
      descriptions: [
        {
          name: "kabutops_gen_5",
          resource_uri: "/api/v1/description/2321/",
        },
      ],
      types: [{ name: "rock" }, { name: "water" }],
    },
    {
      name: "Aerodactyl",
      national_id: 142,
      descriptions: [
        {
          name: "aerodactyl_gen_5",
          resource_uri: "/api/v1/description/2336/",
        },
      ],
      types: [{ name: "flying" }, { name: "rock" }],
    },
    {
      name: "Snorlax",
      national_id: 143,
      descriptions: [
        {
          name: "snorlax_gen_5",
          resource_uri: "/api/v1/description/2354/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Articuno",
      national_id: 144,
      descriptions: [
        {
          name: "articuno_gen_5",
          resource_uri: "/api/v1/description/2370/",
        },
      ],
      types: [{ name: "flying" }, { name: "ice" }],
    },
    {
      name: "Zapdos",
      national_id: 145,
      descriptions: [
        {
          name: "zapdos_gen_5",
          resource_uri: "/api/v1/description/2384/",
        },
      ],
      types: [{ name: "flying" }, { name: "electric" }],
    },
    {
      name: "Moltres",
      national_id: 146,
      descriptions: [
        {
          name: "moltres_gen_5",
          resource_uri: "/api/v1/description/2399/",
        },
      ],
      types: [{ name: "flying" }, { name: "fire" }],
    },
    {
      name: "Dratini",
      national_id: 147,
      descriptions: [
        {
          name: "dratini_gen_5",
          resource_uri: "/api/v1/description/2413/",
        },
      ],
      types: [{ name: "dragon" }],
    },
    {
      name: "Dragonair",
      national_id: 148,
      descriptions: [
        {
          name: "dragonair_gen_5",
          resource_uri: "/api/v1/description/2428/",
        },
      ],
      types: [{ name: "dragon" }],
    },
    {
      name: "Dragonite",
      national_id: 149,
      descriptions: [
        {
          name: "dragonite_gen_5",
          resource_uri: "/api/v1/description/2444/",
        },
      ],
      types: [{ name: "flying" }, { name: "dragon" }],
    },
    {
      name: "Mewtwo",
      national_id: 150,
      descriptions: [
        {
          name: "mewtwo_gen_5",
          resource_uri: "/api/v1/description/2459/",
        },
      ],
      types: [{ name: "psychic" }],
    },
    {
      name: "Mew",
      national_id: 151,
      descriptions: [
        {
          name: "mewtwo_gen_5",
          resource_uri: "/api/v1/description/2459/",
        },
        { name: "mew_gen_5", resource_uri: "/api/v1/description/2475/" },
      ],
      types: [{ name: "psychic" }],
    },
    {
      name: "Chikorita",
      national_id: 152,
      descriptions: [
        {
          name: "chikorita_gen_5",
          resource_uri: "/api/v1/description/2487/",
        },
      ],
      types: [{ name: "grass" }],
    },
    {
      name: "Bayleef",
      national_id: 153,
      descriptions: [
        {
          name: "bayleef_gen_5",
          resource_uri: "/api/v1/description/2499/",
        },
      ],
      types: [{ name: "grass" }],
    },
    {
      name: "Meganium",
      national_id: 154,
      descriptions: [
        {
          name: "meganium_gen_5",
          resource_uri: "/api/v1/description/2511/",
        },
      ],
      types: [{ name: "grass" }],
    },
    {
      name: "Cyndaquil",
      national_id: 155,
      descriptions: [
        {
          name: "cyndaquil_gen_5",
          resource_uri: "/api/v1/description/2523/",
        },
      ],
      types: [{ name: "fire" }],
    },
    {
      name: "Quilava",
      national_id: 156,
      descriptions: [
        {
          name: "quilava_gen_5",
          resource_uri: "/api/v1/description/2535/",
        },
      ],
      types: [{ name: "fire" }],
    },
    {
      name: "Typhlosion",
      national_id: 157,
      descriptions: [
        {
          name: "typhlosion_gen_5",
          resource_uri: "/api/v1/description/2547/",
        },
      ],
      types: [{ name: "fire" }],
    },
    {
      name: "Totodile",
      national_id: 158,
      descriptions: [
        {
          name: "totodile_gen_5",
          resource_uri: "/api/v1/description/2559/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Croconaw",
      national_id: 159,
      descriptions: [
        {
          name: "croconaw_gen_5",
          resource_uri: "/api/v1/description/2571/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Feraligatr",
      national_id: 160,
      descriptions: [
        {
          name: "feraligatr_gen_5",
          resource_uri: "/api/v1/description/2583/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Sentret",
      national_id: 161,
      descriptions: [
        {
          name: "sentret_gen_5",
          resource_uri: "/api/v1/description/2595/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Furret",
      national_id: 162,
      descriptions: [
        {
          name: "furret_gen_5",
          resource_uri: "/api/v1/description/2609/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Hoothoot",
      national_id: 163,
      descriptions: [
        {
          name: "hoothoot_gen_5",
          resource_uri: "/api/v1/description/2625/",
        },
      ],
      types: [{ name: "normal" }, { name: "flying" }],
    },
    {
      name: "Noctowl",
      national_id: 164,
      descriptions: [
        {
          name: "noctowl_gen_5",
          resource_uri: "/api/v1/description/2641/",
        },
      ],
      types: [{ name: "normal" }, { name: "flying" }],
    },
    {
      name: "Ledyba",
      national_id: 165,
      descriptions: [
        {
          name: "ledyba_gen_5",
          resource_uri: "/api/v1/description/2655/",
        },
      ],
      types: [{ name: "flying" }, { name: "bug" }],
    },
    {
      name: "Ledian",
      national_id: 166,
      descriptions: [
        {
          name: "ledian_gen_5",
          resource_uri: "/api/v1/description/2669/",
        },
      ],
      types: [{ name: "flying" }, { name: "bug" }],
    },
    {
      name: "Spinarak",
      national_id: 167,
      descriptions: [
        {
          name: "spinarak_gen_5",
          resource_uri: "/api/v1/description/2683/",
        },
      ],
      types: [{ name: "poison" }, { name: "bug" }],
    },
    {
      name: "Ariados",
      national_id: 168,
      descriptions: [
        {
          name: "ariados_gen_5",
          resource_uri: "/api/v1/description/2697/",
        },
      ],
      types: [{ name: "poison" }, { name: "bug" }],
    },
    {
      name: "Crobat",
      national_id: 169,
      descriptions: [
        {
          name: "crobat_gen_5",
          resource_uri: "/api/v1/description/2714/",
        },
      ],
      types: [{ name: "flying" }, { name: "poison" }],
    },
    {
      name: "Chinchou",
      national_id: 170,
      descriptions: [
        {
          name: "chinchou_gen_5",
          resource_uri: "/api/v1/description/2728/",
        },
      ],
      types: [{ name: "water" }, { name: "electric" }],
    },
    {
      name: "Lanturn",
      national_id: 171,
      descriptions: [
        {
          name: "lanturn_gen_5",
          resource_uri: "/api/v1/description/2743/",
        },
      ],
      types: [{ name: "water" }, { name: "electric" }],
    },
    {
      name: "Pichu",
      national_id: 172,
      descriptions: [
        {
          name: "pichu_gen_5",
          resource_uri: "/api/v1/description/2760/",
        },
      ],
      types: [{ name: "electric" }],
    },
    {
      name: "Cleffa",
      national_id: 173,
      descriptions: [
        {
          name: "cleffa_gen_5",
          resource_uri: "/api/v1/description/2775/",
        },
      ],
      types: [{ name: "fairy" }],
    },
    {
      name: "Igglybuff",
      national_id: 174,
      descriptions: [
        {
          name: "igglybuff_gen_5",
          resource_uri: "/api/v1/description/2788/",
        },
      ],
      types: [{ name: "normal" }, { name: "fairy" }],
    },
    {
      name: "Togepi",
      national_id: 175,
      descriptions: [
        {
          name: "togepi_gen_5",
          resource_uri: "/api/v1/description/2803/",
        },
      ],
      types: [{ name: "fairy" }],
    },
    {
      name: "Togetic",
      national_id: 176,
      descriptions: [
        {
          name: "togetic_gen_5",
          resource_uri: "/api/v1/description/2816/",
        },
      ],
      types: [{ name: "flying" }, { name: "fairy" }],
    },
    {
      name: "Natu",
      national_id: 177,
      descriptions: [
        { name: "natu_gen_5", resource_uri: "/api/v1/description/2829/" },
      ],
      types: [{ name: "flying" }, { name: "psychic" }],
    },
    {
      name: "Xatu",
      national_id: 178,
      descriptions: [
        { name: "xatu_gen_5", resource_uri: "/api/v1/description/2843/" },
      ],
      types: [{ name: "flying" }, { name: "psychic" }],
    },
    {
      name: "Mareep",
      national_id: 179,
      descriptions: [
        {
          name: "mareep_gen_5",
          resource_uri: "/api/v1/description/2856/",
        },
      ],
      types: [{ name: "electric" }],
    },
    {
      name: "Flaaffy",
      national_id: 180,
      descriptions: [
        {
          name: "flaaffy_gen_5",
          resource_uri: "/api/v1/description/2870/",
        },
      ],
      types: [{ name: "electric" }],
    },
    {
      name: "Ampharos",
      national_id: 181,
      descriptions: [
        {
          name: "ampharos_gen_5",
          resource_uri: "/api/v1/description/2884/",
        },
      ],
      types: [{ name: "electric" }],
    },
    {
      name: "Bellossom",
      national_id: 182,
      descriptions: [
        {
          name: "bellossom_gen_5",
          resource_uri: "/api/v1/description/2899/",
        },
      ],
      types: [{ name: "grass" }],
    },
    {
      name: "Marill",
      national_id: 183,
      descriptions: [
        {
          name: "marill_gen_5",
          resource_uri: "/api/v1/description/2916/",
        },
        {
          name: "azumarill_gen_5",
          resource_uri: "/api/v1/description/2933/",
        },
      ],
      types: [{ name: "water" }, { name: "fairy" }],
    },
    {
      name: "Azumarill",
      national_id: 184,
      descriptions: [
        {
          name: "azumarill_gen_5",
          resource_uri: "/api/v1/description/2933/",
        },
      ],
      types: [{ name: "water" }, { name: "fairy" }],
    },
    {
      name: "Sudowoodo",
      national_id: 185,
      descriptions: [
        {
          name: "sudowoodo_gen_5",
          resource_uri: "/api/v1/description/2949/",
        },
      ],
      types: [{ name: "rock" }],
    },
    {
      name: "Politoed",
      national_id: 186,
      descriptions: [
        {
          name: "politoed_gen_5",
          resource_uri: "/api/v1/description/2962/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Hoppip",
      national_id: 187,
      descriptions: [
        {
          name: "hoppip_gen_5",
          resource_uri: "/api/v1/description/2975/",
        },
      ],
      types: [{ name: "flying" }, { name: "grass" }],
    },
    {
      name: "Skiploom",
      national_id: 188,
      descriptions: [
        {
          name: "skiploom_gen_5",
          resource_uri: "/api/v1/description/2989/",
        },
      ],
      types: [{ name: "flying" }, { name: "grass" }],
    },
    {
      name: "Jumpluff",
      national_id: 189,
      descriptions: [
        {
          name: "jumpluff_gen_5",
          resource_uri: "/api/v1/description/3002/",
        },
      ],
      types: [{ name: "flying" }, { name: "grass" }],
    },
    {
      name: "Aipom",
      national_id: 190,
      descriptions: [
        {
          name: "aipom_gen_5",
          resource_uri: "/api/v1/description/3017/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Sunkern",
      national_id: 191,
      descriptions: [
        {
          name: "sunkern_gen_5",
          resource_uri: "/api/v1/description/3030/",
        },
      ],
      types: [{ name: "grass" }],
    },
    {
      name: "Sunflora",
      national_id: 192,
      descriptions: [
        {
          name: "sunflora_gen_5",
          resource_uri: "/api/v1/description/3044/",
        },
      ],
      types: [{ name: "grass" }],
    },
    {
      name: "Yanma",
      national_id: 193,
      descriptions: [
        {
          name: "yanma_gen_5",
          resource_uri: "/api/v1/description/3057/",
        },
      ],
      types: [{ name: "flying" }, { name: "bug" }],
    },
    {
      name: "Wooper",
      national_id: 194,
      descriptions: [
        {
          name: "wooper_gen_5",
          resource_uri: "/api/v1/description/3073/",
        },
      ],
      types: [{ name: "ground" }, { name: "water" }],
    },
    {
      name: "Quagsire",
      national_id: 195,
      descriptions: [
        {
          name: "quagsire_gen_5",
          resource_uri: "/api/v1/description/3089/",
        },
      ],
      types: [{ name: "ground" }, { name: "water" }],
    },
    {
      name: "Espeon",
      national_id: 196,
      descriptions: [
        {
          name: "espeon_gen_5",
          resource_uri: "/api/v1/description/3104/",
        },
      ],
      types: [{ name: "psychic" }],
    },
    {
      name: "Umbreon",
      national_id: 197,
      descriptions: [
        {
          name: "umbreon_gen_5",
          resource_uri: "/api/v1/description/3119/",
        },
      ],
      types: [{ name: "dark" }],
    },
    {
      name: "Murkrow",
      national_id: 198,
      descriptions: [
        {
          name: "murkrow_gen_5",
          resource_uri: "/api/v1/description/3135/",
        },
      ],
      types: [{ name: "flying" }, { name: "dark" }],
    },
    {
      name: "Slowking",
      national_id: 199,
      descriptions: [
        {
          name: "slowking_gen_5",
          resource_uri: "/api/v1/description/3149/",
        },
      ],
      types: [{ name: "water" }, { name: "psychic" }],
    },
    {
      name: "Misdreavus",
      national_id: 200,
      descriptions: [
        {
          name: "misdreavus_gen_5",
          resource_uri: "/api/v1/description/3165/",
        },
      ],
      types: [{ name: "ghost" }],
    },
    {
      name: "Unown",
      national_id: 201,
      descriptions: [
        {
          name: "unown_gen_5",
          resource_uri: "/api/v1/description/3179/",
        },
      ],
      types: [{ name: "psychic" }],
    },
    {
      name: "Wobbuffet",
      national_id: 202,
      descriptions: [
        {
          name: "wobbuffet_gen_5",
          resource_uri: "/api/v1/description/3192/",
        },
      ],
      types: [{ name: "psychic" }],
    },
    {
      name: "Girafarig",
      national_id: 203,
      descriptions: [
        {
          name: "girafarig_gen_5",
          resource_uri: "/api/v1/description/3209/",
        },
      ],
      types: [{ name: "normal" }, { name: "psychic" }],
    },
    {
      name: "Pineco",
      national_id: 204,
      descriptions: [
        {
          name: "pineco_gen_5",
          resource_uri: "/api/v1/description/3223/",
        },
      ],
      types: [{ name: "bug" }],
    },
    {
      name: "Forretress",
      national_id: 205,
      descriptions: [
        {
          name: "forretress_gen_5",
          resource_uri: "/api/v1/description/3235/",
        },
      ],
      types: [{ name: "bug" }, { name: "steel" }],
    },
    {
      name: "Dunsparce",
      national_id: 206,
      descriptions: [
        {
          name: "dunsparce_gen_5",
          resource_uri: "/api/v1/description/3247/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Gligar",
      national_id: 207,
      descriptions: [
        {
          name: "gligar_gen_5",
          resource_uri: "/api/v1/description/3262/",
        },
      ],
      types: [{ name: "flying" }, { name: "ground" }],
    },
    {
      name: "Steelix",
      national_id: 208,
      descriptions: [
        {
          name: "steelix_gen_5",
          resource_uri: "/api/v1/description/3277/",
        },
      ],
      types: [{ name: "ground" }, { name: "steel" }],
    },
    {
      name: "Snubbull",
      national_id: 209,
      descriptions: [
        {
          name: "snubbull_gen_5",
          resource_uri: "/api/v1/description/3291/",
        },
      ],
      types: [{ name: "fairy" }],
    },
    {
      name: "Granbull",
      national_id: 210,
      descriptions: [
        {
          name: "granbull_gen_5",
          resource_uri: "/api/v1/description/3305/",
        },
      ],
      types: [{ name: "fairy" }],
    },
    {
      name: "Qwilfish",
      national_id: 211,
      descriptions: [
        {
          name: "qwilfish_gen_5",
          resource_uri: "/api/v1/description/3318/",
        },
      ],
      types: [{ name: "poison" }, { name: "water" }],
    },
    {
      name: "Scizor",
      national_id: 212,
      descriptions: [
        {
          name: "scizor_gen_5",
          resource_uri: "/api/v1/description/3333/",
        },
      ],
      types: [{ name: "bug" }, { name: "steel" }],
    },
    {
      name: "Shuckle",
      national_id: 213,
      descriptions: [
        {
          name: "shuckle_gen_5",
          resource_uri: "/api/v1/description/3347/",
        },
      ],
      types: [{ name: "rock" }, { name: "bug" }],
    },
    {
      name: "Heracross",
      national_id: 214,
      descriptions: [
        {
          name: "heracross_gen_5",
          resource_uri: "/api/v1/description/3364/",
        },
      ],
      types: [{ name: "fighting" }, { name: "bug" }],
    },
    {
      name: "Sneasel",
      national_id: 215,
      descriptions: [
        {
          name: "sneasel_gen_5",
          resource_uri: "/api/v1/description/3380/",
        },
      ],
      types: [{ name: "ice" }, { name: "dark" }],
    },
    {
      name: "Teddiursa",
      national_id: 216,
      descriptions: [
        {
          name: "teddiursa_gen_5",
          resource_uri: "/api/v1/description/3394/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Ursaring",
      national_id: 217,
      descriptions: [
        {
          name: "ursaring_gen_5",
          resource_uri: "/api/v1/description/3408/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Slugma",
      national_id: 218,
      descriptions: [
        {
          name: "slugma_gen_5",
          resource_uri: "/api/v1/description/3423/",
        },
      ],
      types: [{ name: "fire" }],
    },
    {
      name: "Magcargo",
      national_id: 219,
      descriptions: [
        {
          name: "magcargo_gen_5",
          resource_uri: "/api/v1/description/3437/",
        },
      ],
      types: [{ name: "rock" }, { name: "fire" }],
    },
    {
      name: "Swinub",
      national_id: 220,
      descriptions: [
        {
          name: "swinub_gen_5",
          resource_uri: "/api/v1/description/3452/",
        },
      ],
      types: [{ name: "ground" }, { name: "ice" }],
    },
    {
      name: "Piloswine",
      national_id: 221,
      descriptions: [
        {
          name: "piloswine_gen_5",
          resource_uri: "/api/v1/description/3466/",
        },
      ],
      types: [{ name: "ground" }, { name: "ice" }],
    },
    {
      name: "Corsola",
      national_id: 222,
      descriptions: [
        {
          name: "corsola_gen_5",
          resource_uri: "/api/v1/description/3481/",
        },
      ],
      types: [{ name: "rock" }, { name: "water" }],
    },
    {
      name: "Remoraid",
      national_id: 223,
      descriptions: [
        {
          name: "remoraid_gen_5",
          resource_uri: "/api/v1/description/3497/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Octillery",
      national_id: 224,
      descriptions: [
        {
          name: "octillery_gen_5",
          resource_uri: "/api/v1/description/3513/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Delibird",
      national_id: 225,
      descriptions: [
        {
          name: "delibird_gen_5",
          resource_uri: "/api/v1/description/3527/",
        },
      ],
      types: [{ name: "flying" }, { name: "ice" }],
    },
    {
      name: "Mantine",
      national_id: 226,
      descriptions: [
        {
          name: "mantine_gen_5",
          resource_uri: "/api/v1/description/3542/",
        },
      ],
      types: [{ name: "flying" }, { name: "water" }],
    },
    {
      name: "Skarmory",
      national_id: 227,
      descriptions: [
        {
          name: "skarmory_gen_5",
          resource_uri: "/api/v1/description/3556/",
        },
      ],
      types: [{ name: "flying" }, { name: "steel" }],
    },
    {
      name: "Houndour",
      national_id: 228,
      descriptions: [
        {
          name: "houndour_gen_5",
          resource_uri: "/api/v1/description/3570/",
        },
      ],
      types: [{ name: "fire" }, { name: "dark" }],
    },
    {
      name: "Houndoom",
      national_id: 229,
      descriptions: [
        {
          name: "houndoom_gen_5",
          resource_uri: "/api/v1/description/3585/",
        },
      ],
      types: [{ name: "fire" }, { name: "dark" }],
    },
    {
      name: "Kingdra",
      national_id: 230,
      descriptions: [
        {
          name: "kingdra_gen_5",
          resource_uri: "/api/v1/description/3599/",
        },
      ],
      types: [{ name: "water" }, { name: "dragon" }],
    },
    {
      name: "Phanpy",
      national_id: 231,
      descriptions: [
        {
          name: "phanpy_gen_5",
          resource_uri: "/api/v1/description/3613/",
        },
      ],
      types: [{ name: "ground" }],
    },
    {
      name: "Donphan",
      national_id: 232,
      descriptions: [
        {
          name: "donphan_gen_5",
          resource_uri: "/api/v1/description/3628/",
        },
      ],
      types: [{ name: "ground" }],
    },
    {
      name: "Porygon2",
      national_id: 233,
      descriptions: [
        {
          name: "porygon2_gen_5",
          resource_uri: "/api/v1/description/3643/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Stantler",
      national_id: 234,
      descriptions: [
        {
          name: "stantler_gen_5",
          resource_uri: "/api/v1/description/3655/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Smeargle",
      national_id: 235,
      descriptions: [
        {
          name: "smeargle_gen_5",
          resource_uri: "/api/v1/description/3667/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Tyrogue",
      national_id: 236,
      descriptions: [
        {
          name: "tyrogue_gen_5",
          resource_uri: "/api/v1/description/3681/",
        },
      ],
      types: [{ name: "fighting" }],
    },
    {
      name: "Hitmontop",
      national_id: 237,
      descriptions: [
        {
          name: "hitmontop_gen_5",
          resource_uri: "/api/v1/description/3694/",
        },
      ],
      types: [{ name: "fighting" }],
    },
    {
      name: "Smoochum",
      national_id: 238,
      descriptions: [
        {
          name: "smoochum_gen_5",
          resource_uri: "/api/v1/description/3706/",
        },
      ],
      types: [{ name: "ice" }, { name: "psychic" }],
    },
    {
      name: "Elekid",
      national_id: 239,
      descriptions: [
        {
          name: "elekid_gen_5",
          resource_uri: "/api/v1/description/3721/",
        },
      ],
      types: [{ name: "electric" }],
    },
    {
      name: "Magby",
      national_id: 240,
      descriptions: [
        {
          name: "magby_gen_5",
          resource_uri: "/api/v1/description/3735/",
        },
      ],
      types: [{ name: "fire" }],
    },
    {
      name: "Miltank",
      national_id: 241,
      descriptions: [
        {
          name: "miltank_gen_5",
          resource_uri: "/api/v1/description/3747/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Blissey",
      national_id: 242,
      descriptions: [
        {
          name: "blissey_gen_5",
          resource_uri: "/api/v1/description/3763/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Raikou",
      national_id: 243,
      descriptions: [
        {
          name: "raikou_gen_5",
          resource_uri: "/api/v1/description/3775/",
        },
      ],
      types: [{ name: "electric" }],
    },
    {
      name: "Entei",
      national_id: 244,
      descriptions: [
        {
          name: "entei_gen_5",
          resource_uri: "/api/v1/description/3787/",
        },
      ],
      types: [{ name: "fire" }],
    },
    {
      name: "Suicune",
      national_id: 245,
      descriptions: [
        {
          name: "suicune_gen_5",
          resource_uri: "/api/v1/description/3799/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Larvitar",
      national_id: 246,
      descriptions: [
        {
          name: "larvitar_gen_5",
          resource_uri: "/api/v1/description/3811/",
        },
      ],
      types: [{ name: "ground" }, { name: "rock" }],
    },
    {
      name: "Pupitar",
      national_id: 247,
      descriptions: [
        {
          name: "pupitar_gen_5",
          resource_uri: "/api/v1/description/3825/",
        },
      ],
      types: [{ name: "ground" }, { name: "rock" }],
    },
    {
      name: "Tyranitar",
      national_id: 248,
      descriptions: [
        {
          name: "tyranitar_gen_5",
          resource_uri: "/api/v1/description/3838/",
        },
      ],
      types: [{ name: "rock" }, { name: "dark" }],
    },
    {
      name: "Lugia",
      national_id: 249,
      descriptions: [
        {
          name: "lugia_gen_5",
          resource_uri: "/api/v1/description/3852/",
        },
      ],
      types: [{ name: "flying" }, { name: "psychic" }],
    },
    {
      name: "Ho-oh",
      national_id: 250,
      descriptions: [
        {
          name: "ho-oh_gen_5",
          resource_uri: "/api/v1/description/3864/",
        },
      ],
      types: [{ name: "flying" }, { name: "fire" }],
    },
    {
      name: "Celebi",
      national_id: 251,
      descriptions: [
        {
          name: "celebi_gen_5",
          resource_uri: "/api/v1/description/3876/",
        },
      ],
      types: [{ name: "grass" }, { name: "psychic" }],
    },
    {
      name: "Treecko",
      national_id: 252,
      descriptions: [
        {
          name: "treecko_gen_5",
          resource_uri: "/api/v1/description/3884/",
        },
      ],
      types: [{ name: "grass" }],
    },
    {
      name: "Grovyle",
      national_id: 253,
      descriptions: [
        {
          name: "grovyle_gen_5",
          resource_uri: "/api/v1/description/3892/",
        },
      ],
      types: [{ name: "grass" }],
    },
    {
      name: "Sceptile",
      national_id: 254,
      descriptions: [
        {
          name: "sceptile_gen_5",
          resource_uri: "/api/v1/description/3900/",
        },
      ],
      types: [{ name: "grass" }],
    },
    {
      name: "Torchic",
      national_id: 255,
      descriptions: [
        {
          name: "torchic_gen_5",
          resource_uri: "/api/v1/description/3908/",
        },
      ],
      types: [{ name: "fire" }],
    },
    {
      name: "Combusken",
      national_id: 256,
      descriptions: [
        {
          name: "combusken_gen_5",
          resource_uri: "/api/v1/description/3917/",
        },
      ],
      types: [{ name: "fighting" }, { name: "fire" }],
    },
    {
      name: "Blaziken",
      national_id: 257,
      descriptions: [
        {
          name: "blaziken_gen_5",
          resource_uri: "/api/v1/description/3926/",
        },
      ],
      types: [{ name: "fighting" }, { name: "fire" }],
    },
    {
      name: "Mudkip",
      national_id: 258,
      descriptions: [
        {
          name: "mudkip_gen_5",
          resource_uri: "/api/v1/description/3935/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Marshtomp",
      national_id: 259,
      descriptions: [
        {
          name: "marshtomp_gen_5",
          resource_uri: "/api/v1/description/3943/",
        },
      ],
      types: [{ name: "ground" }, { name: "water" }],
    },
    {
      name: "Swampert",
      national_id: 260,
      descriptions: [
        {
          name: "swampert_gen_5",
          resource_uri: "/api/v1/description/3951/",
        },
      ],
      types: [{ name: "ground" }, { name: "water" }],
    },
    {
      name: "Poochyena",
      national_id: 261,
      descriptions: [
        {
          name: "poochyena_gen_5",
          resource_uri: "/api/v1/description/3959/",
        },
      ],
      types: [{ name: "dark" }],
    },
    {
      name: "Mightyena",
      national_id: 262,
      descriptions: [
        {
          name: "mightyena_gen_5",
          resource_uri: "/api/v1/description/3968/",
        },
      ],
      types: [{ name: "dark" }],
    },
    {
      name: "Zigzagoon",
      national_id: 263,
      descriptions: [
        {
          name: "zigzagoon_gen_5",
          resource_uri: "/api/v1/description/3978/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Linoone",
      national_id: 264,
      descriptions: [
        {
          name: "linoone_gen_5",
          resource_uri: "/api/v1/description/3988/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Wurmple",
      national_id: 265,
      descriptions: [
        {
          name: "wurmple_gen_5",
          resource_uri: "/api/v1/description/4000/",
        },
      ],
      types: [{ name: "bug" }],
    },
    {
      name: "Silcoon",
      national_id: 266,
      descriptions: [
        {
          name: "silcoon_gen_5",
          resource_uri: "/api/v1/description/4011/",
        },
      ],
      types: [{ name: "bug" }],
    },
    {
      name: "Beautifly",
      national_id: 267,
      descriptions: [
        {
          name: "beautifly_gen_5",
          resource_uri: "/api/v1/description/4021/",
        },
      ],
      types: [{ name: "flying" }, { name: "bug" }],
    },
    {
      name: "Cascoon",
      national_id: 268,
      descriptions: [
        {
          name: "cascoon_gen_5",
          resource_uri: "/api/v1/description/4033/",
        },
      ],
      types: [{ name: "bug" }],
    },
    {
      name: "Dustox",
      national_id: 269,
      descriptions: [
        {
          name: "dustox_gen_5",
          resource_uri: "/api/v1/description/4044/",
        },
      ],
      types: [{ name: "poison" }, { name: "bug" }],
    },
    {
      name: "Lotad",
      national_id: 270,
      descriptions: [
        {
          name: "lotad_gen_5",
          resource_uri: "/api/v1/description/4053/",
        },
      ],
      types: [{ name: "water" }, { name: "grass" }],
    },
    {
      name: "Lombre",
      national_id: 271,
      descriptions: [
        {
          name: "lombre_gen_5",
          resource_uri: "/api/v1/description/4062/",
        },
      ],
      types: [{ name: "water" }, { name: "grass" }],
    },
    {
      name: "Ludicolo",
      national_id: 272,
      descriptions: [
        {
          name: "ludicolo_gen_5",
          resource_uri: "/api/v1/description/4072/",
        },
      ],
      types: [{ name: "water" }, { name: "grass" }],
    },
    {
      name: "Seedot",
      national_id: 273,
      descriptions: [
        {
          name: "seedot_gen_5",
          resource_uri: "/api/v1/description/4081/",
        },
      ],
      types: [{ name: "grass" }],
    },
    {
      name: "Nuzleaf",
      national_id: 274,
      descriptions: [
        {
          name: "nuzleaf_gen_5",
          resource_uri: "/api/v1/description/4089/",
        },
      ],
      types: [{ name: "grass" }, { name: "dark" }],
    },
    {
      name: "Shiftry",
      national_id: 275,
      descriptions: [
        {
          name: "shiftry_gen_5",
          resource_uri: "/api/v1/description/4097/",
        },
      ],
      types: [{ name: "grass" }, { name: "dark" }],
    },
    {
      name: "Taillow",
      national_id: 276,
      descriptions: [
        {
          name: "taillow_gen_5",
          resource_uri: "/api/v1/description/4105/",
        },
      ],
      types: [{ name: "normal" }, { name: "flying" }],
    },
    {
      name: "Swellow",
      national_id: 277,
      descriptions: [
        {
          name: "swellow_gen_5",
          resource_uri: "/api/v1/description/4114/",
        },
      ],
      types: [{ name: "normal" }, { name: "flying" }],
    },
    {
      name: "Wingull",
      national_id: 278,
      descriptions: [
        {
          name: "wingull_gen_5",
          resource_uri: "/api/v1/description/4125/",
        },
      ],
      types: [{ name: "flying" }, { name: "water" }],
    },
    {
      name: "Pelipper",
      national_id: 279,
      descriptions: [
        {
          name: "pelipper_gen_5",
          resource_uri: "/api/v1/description/4136/",
        },
      ],
      types: [{ name: "flying" }, { name: "water" }],
    },
    {
      name: "Ralts",
      national_id: 280,
      descriptions: [
        {
          name: "ralts_gen_5",
          resource_uri: "/api/v1/description/4147/",
        },
      ],
      types: [{ name: "fairy" }, { name: "psychic" }],
    },
    {
      name: "Kirlia",
      national_id: 281,
      descriptions: [
        {
          name: "kirlia_gen_5",
          resource_uri: "/api/v1/description/4158/",
        },
      ],
      types: [{ name: "fairy" }, { name: "psychic" }],
    },
    {
      name: "Gardevoir",
      national_id: 282,
      descriptions: [
        {
          name: "gardevoir_gen_5",
          resource_uri: "/api/v1/description/4169/",
        },
      ],
      types: [{ name: "fairy" }, { name: "psychic" }],
    },
    {
      name: "Surskit",
      national_id: 283,
      descriptions: [
        {
          name: "surskit_gen_5",
          resource_uri: "/api/v1/description/4179/",
        },
      ],
      types: [{ name: "bug" }, { name: "water" }],
    },
    {
      name: "Masquerain",
      national_id: 284,
      descriptions: [
        {
          name: "masquerain_gen_5",
          resource_uri: "/api/v1/description/4188/",
        },
      ],
      types: [{ name: "flying" }, { name: "bug" }],
    },
    {
      name: "Shroomish",
      national_id: 285,
      descriptions: [
        {
          name: "shroomish_gen_5",
          resource_uri: "/api/v1/description/4198/",
        },
      ],
      types: [{ name: "grass" }],
    },
    {
      name: "Breloom",
      national_id: 286,
      descriptions: [
        {
          name: "breloom_gen_5",
          resource_uri: "/api/v1/description/4206/",
        },
      ],
      types: [{ name: "fighting" }, { name: "grass" }],
    },
    {
      name: "Slakoth",
      national_id: 287,
      descriptions: [
        {
          name: "slakoth_gen_5",
          resource_uri: "/api/v1/description/4214/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Vigoroth",
      national_id: 288,
      descriptions: [
        {
          name: "vigoroth_gen_5",
          resource_uri: "/api/v1/description/4222/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Slaking",
      national_id: 289,
      descriptions: [
        {
          name: "slaking_gen_5",
          resource_uri: "/api/v1/description/4230/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Nincada",
      national_id: 290,
      descriptions: [
        {
          name: "nincada_gen_5",
          resource_uri: "/api/v1/description/4238/",
        },
      ],
      types: [{ name: "ground" }, { name: "bug" }],
    },
    {
      name: "Ninjask",
      national_id: 291,
      descriptions: [
        {
          name: "ninjask_gen_5",
          resource_uri: "/api/v1/description/4248/",
        },
      ],
      types: [{ name: "flying" }, { name: "bug" }],
    },
    {
      name: "Shedinja",
      national_id: 292,
      descriptions: [
        {
          name: "shedinja_gen_5",
          resource_uri: "/api/v1/description/4258/",
        },
      ],
      types: [{ name: "bug" }, { name: "ghost" }],
    },
    {
      name: "Whismur",
      national_id: 293,
      descriptions: [
        {
          name: "whismur_gen_5",
          resource_uri: "/api/v1/description/4267/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Loudred",
      national_id: 294,
      descriptions: [
        {
          name: "loudred_gen_5",
          resource_uri: "/api/v1/description/4277/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Exploud",
      national_id: 295,
      descriptions: [
        {
          name: "exploud_gen_5",
          resource_uri: "/api/v1/description/4287/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Makuhita",
      national_id: 296,
      descriptions: [
        {
          name: "makuhita_gen_5",
          resource_uri: "/api/v1/description/4297/",
        },
      ],
      types: [{ name: "fighting" }],
    },
    {
      name: "Hariyama",
      national_id: 297,
      descriptions: [
        {
          name: "hariyama_gen_5",
          resource_uri: "/api/v1/description/4307/",
        },
      ],
      types: [{ name: "fighting" }],
    },
    {
      name: "Azurill",
      national_id: 298,
      descriptions: [
        {
          name: "azurill_gen_5",
          resource_uri: "/api/v1/description/4319/",
        },
      ],
      types: [{ name: "normal" }, { name: "fairy" }],
    },
    {
      name: "Nosepass",
      national_id: 299,
      descriptions: [
        {
          name: "nosepass_gen_5",
          resource_uri: "/api/v1/description/4330/",
        },
      ],
      types: [{ name: "rock" }],
    },
    {
      name: "Skitty",
      national_id: 300,
      descriptions: [
        {
          name: "skitty_gen_5",
          resource_uri: "/api/v1/description/4340/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Delcatty",
      national_id: 301,
      descriptions: [
        {
          name: "delcatty_gen_5",
          resource_uri: "/api/v1/description/4350/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Sableye",
      national_id: 302,
      descriptions: [
        {
          name: "sableye_gen_5",
          resource_uri: "/api/v1/description/4359/",
        },
      ],
      types: [{ name: "ghost" }, { name: "dark" }],
    },
    {
      name: "Mawile",
      national_id: 303,
      descriptions: [
        {
          name: "mawile_gen_5",
          resource_uri: "/api/v1/description/4369/",
        },
      ],
      types: [{ name: "steel" }, { name: "fairy" }],
    },
    {
      name: "Aron",
      national_id: 304,
      descriptions: [
        { name: "aron_gen_5", resource_uri: "/api/v1/description/4379/" },
        {
          name: "volcarona_gen_5",
          resource_uri: "/api/v1/description/6436/",
        },
      ],
      types: [{ name: "rock" }, { name: "steel" }],
    },
    {
      name: "Lairon",
      national_id: 305,
      descriptions: [
        {
          name: "lairon_gen_5",
          resource_uri: "/api/v1/description/4388/",
        },
      ],
      types: [{ name: "rock" }, { name: "steel" }],
    },
    {
      name: "Aggron",
      national_id: 306,
      descriptions: [
        {
          name: "aggron_gen_5",
          resource_uri: "/api/v1/description/4398/",
        },
      ],
      types: [{ name: "rock" }, { name: "steel" }],
    },
    {
      name: "Meditite",
      national_id: 307,
      descriptions: [
        {
          name: "meditite_gen_5",
          resource_uri: "/api/v1/description/4410/",
        },
      ],
      types: [{ name: "fighting" }, { name: "psychic" }],
    },
    {
      name: "Medicham",
      national_id: 308,
      descriptions: [
        {
          name: "medicham_gen_5",
          resource_uri: "/api/v1/description/4422/",
        },
      ],
      types: [{ name: "fighting" }, { name: "psychic" }],
    },
    {
      name: "Electrike",
      national_id: 309,
      descriptions: [
        {
          name: "electrike_gen_5",
          resource_uri: "/api/v1/description/4432/",
        },
      ],
      types: [{ name: "electric" }],
    },
    {
      name: "Manectric",
      national_id: 310,
      descriptions: [
        {
          name: "manectric_gen_5",
          resource_uri: "/api/v1/description/4442/",
        },
      ],
      types: [{ name: "electric" }],
    },
    {
      name: "Plusle",
      national_id: 311,
      descriptions: [
        {
          name: "plusle_gen_5",
          resource_uri: "/api/v1/description/4451/",
        },
      ],
      types: [{ name: "electric" }],
    },
    {
      name: "Minun",
      national_id: 312,
      descriptions: [
        {
          name: "minun_gen_5",
          resource_uri: "/api/v1/description/4461/",
        },
      ],
      types: [{ name: "electric" }],
    },
    {
      name: "Volbeat",
      national_id: 313,
      descriptions: [
        {
          name: "volbeat_gen_5",
          resource_uri: "/api/v1/description/4471/",
        },
      ],
      types: [{ name: "bug" }],
    },
    {
      name: "Illumise",
      national_id: 314,
      descriptions: [
        {
          name: "illumise_gen_5",
          resource_uri: "/api/v1/description/4481/",
        },
      ],
      types: [{ name: "bug" }],
    },
    {
      name: "Roselia",
      national_id: 315,
      descriptions: [
        {
          name: "roselia_gen_5",
          resource_uri: "/api/v1/description/4493/",
        },
      ],
      types: [{ name: "poison" }, { name: "grass" }],
    },
    {
      name: "Gulpin",
      national_id: 316,
      descriptions: [
        {
          name: "gulpin_gen_5",
          resource_uri: "/api/v1/description/4503/",
        },
      ],
      types: [{ name: "poison" }],
    },
    {
      name: "Swalot",
      national_id: 317,
      descriptions: [
        {
          name: "swalot_gen_5",
          resource_uri: "/api/v1/description/4513/",
        },
      ],
      types: [{ name: "poison" }],
    },
    {
      name: "Carvanha",
      national_id: 318,
      descriptions: [
        {
          name: "carvanha_gen_5",
          resource_uri: "/api/v1/description/4523/",
        },
      ],
      types: [{ name: "water" }, { name: "dark" }],
    },
    {
      name: "Sharpedo",
      national_id: 319,
      descriptions: [
        {
          name: "sharpedo_gen_5",
          resource_uri: "/api/v1/description/4532/",
        },
      ],
      types: [{ name: "water" }, { name: "dark" }],
    },
    {
      name: "Wailmer",
      national_id: 320,
      descriptions: [
        {
          name: "wailmer_gen_5",
          resource_uri: "/api/v1/description/4541/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Wailord",
      national_id: 321,
      descriptions: [
        {
          name: "wailord_gen_5",
          resource_uri: "/api/v1/description/4551/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Numel",
      national_id: 322,
      descriptions: [
        {
          name: "numel_gen_5",
          resource_uri: "/api/v1/description/4560/",
        },
      ],
      types: [{ name: "ground" }, { name: "fire" }],
    },
    {
      name: "Camerupt",
      national_id: 323,
      descriptions: [
        {
          name: "camerupt_gen_5",
          resource_uri: "/api/v1/description/4569/",
        },
      ],
      types: [{ name: "ground" }, { name: "fire" }],
    },
    {
      name: "Torkoal",
      national_id: 324,
      descriptions: [
        {
          name: "torkoal_gen_5",
          resource_uri: "/api/v1/description/4578/",
        },
      ],
      types: [{ name: "fire" }],
    },
    {
      name: "Spoink",
      national_id: 325,
      descriptions: [
        {
          name: "spoink_gen_5",
          resource_uri: "/api/v1/description/4587/",
        },
      ],
      types: [{ name: "psychic" }],
    },
    {
      name: "Grumpig",
      national_id: 326,
      descriptions: [
        {
          name: "grumpig_gen_5",
          resource_uri: "/api/v1/description/4597/",
        },
      ],
      types: [{ name: "psychic" }],
    },
    {
      name: "Spinda",
      national_id: 327,
      descriptions: [
        {
          name: "spinda_gen_5",
          resource_uri: "/api/v1/description/4606/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Trapinch",
      national_id: 328,
      descriptions: [
        {
          name: "trapinch_gen_5",
          resource_uri: "/api/v1/description/4616/",
        },
      ],
      types: [{ name: "ground" }],
    },
    {
      name: "Vibrava",
      national_id: 329,
      descriptions: [
        {
          name: "vibrava_gen_5",
          resource_uri: "/api/v1/description/4626/",
        },
      ],
      types: [{ name: "ground" }, { name: "dragon" }],
    },
    {
      name: "Flygon",
      national_id: 330,
      descriptions: [
        {
          name: "flygon_gen_5",
          resource_uri: "/api/v1/description/4636/",
        },
      ],
      types: [{ name: "ground" }, { name: "dragon" }],
    },
    {
      name: "Cacnea",
      national_id: 331,
      descriptions: [
        {
          name: "cacnea_gen_5",
          resource_uri: "/api/v1/description/4646/",
        },
      ],
      types: [{ name: "grass" }],
    },
    {
      name: "Cacturne",
      national_id: 332,
      descriptions: [
        {
          name: "cacturne_gen_5",
          resource_uri: "/api/v1/description/4654/",
        },
      ],
      types: [{ name: "grass" }, { name: "dark" }],
    },
    {
      name: "Swablu",
      national_id: 333,
      descriptions: [
        {
          name: "swablu_gen_5",
          resource_uri: "/api/v1/description/4663/",
        },
      ],
      types: [{ name: "normal" }, { name: "flying" }],
    },
    {
      name: "Altaria",
      national_id: 334,
      descriptions: [
        {
          name: "altaria_gen_5",
          resource_uri: "/api/v1/description/4673/",
        },
      ],
      types: [{ name: "flying" }, { name: "dragon" }],
    },
    {
      name: "Zangoose",
      national_id: 335,
      descriptions: [
        {
          name: "zangoose_gen_5",
          resource_uri: "/api/v1/description/4683/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Seviper",
      national_id: 336,
      descriptions: [
        {
          name: "seviper_gen_5",
          resource_uri: "/api/v1/description/4693/",
        },
      ],
      types: [{ name: "poison" }],
    },
    {
      name: "Lunatone",
      national_id: 337,
      descriptions: [
        {
          name: "lunatone_gen_5",
          resource_uri: "/api/v1/description/4703/",
        },
      ],
      types: [{ name: "rock" }, { name: "psychic" }],
    },
    {
      name: "Solrock",
      national_id: 338,
      descriptions: [
        {
          name: "solrock_gen_5",
          resource_uri: "/api/v1/description/4713/",
        },
      ],
      types: [{ name: "rock" }, { name: "psychic" }],
    },
    {
      name: "Barboach",
      national_id: 339,
      descriptions: [
        {
          name: "barboach_gen_5",
          resource_uri: "/api/v1/description/4725/",
        },
      ],
      types: [{ name: "ground" }, { name: "water" }],
    },
    {
      name: "Whiscash",
      national_id: 340,
      descriptions: [
        {
          name: "whiscash_gen_5",
          resource_uri: "/api/v1/description/4737/",
        },
      ],
      types: [{ name: "ground" }, { name: "water" }],
    },
    {
      name: "Corphish",
      national_id: 341,
      descriptions: [
        {
          name: "corphish_gen_5",
          resource_uri: "/api/v1/description/4746/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Crawdaunt",
      national_id: 342,
      descriptions: [
        {
          name: "crawdaunt_gen_5",
          resource_uri: "/api/v1/description/4756/",
        },
      ],
      types: [{ name: "water" }, { name: "dark" }],
    },
    {
      name: "Baltoy",
      national_id: 343,
      descriptions: [
        {
          name: "baltoy_gen_5",
          resource_uri: "/api/v1/description/4766/",
        },
      ],
      types: [{ name: "ground" }, { name: "psychic" }],
    },
    {
      name: "Claydol",
      national_id: 344,
      descriptions: [
        {
          name: "claydol_gen_5",
          resource_uri: "/api/v1/description/4774/",
        },
      ],
      types: [{ name: "ground" }, { name: "psychic" }],
    },
    {
      name: "Lileep",
      national_id: 345,
      descriptions: [
        {
          name: "lileep_gen_5",
          resource_uri: "/api/v1/description/4782/",
        },
      ],
      types: [{ name: "rock" }, { name: "grass" }],
    },
    {
      name: "Cradily",
      national_id: 346,
      descriptions: [
        {
          name: "cradily_gen_5",
          resource_uri: "/api/v1/description/4791/",
        },
      ],
      types: [{ name: "rock" }, { name: "grass" }],
    },
    {
      name: "Anorith",
      national_id: 347,
      descriptions: [
        {
          name: "anorith_gen_5",
          resource_uri: "/api/v1/description/4800/",
        },
      ],
      types: [{ name: "rock" }, { name: "bug" }],
    },
    {
      name: "Armaldo",
      national_id: 348,
      descriptions: [
        {
          name: "armaldo_gen_5",
          resource_uri: "/api/v1/description/4809/",
        },
      ],
      types: [{ name: "rock" }, { name: "bug" }],
    },
    {
      name: "Feebas",
      national_id: 349,
      descriptions: [
        {
          name: "feebas_gen_5",
          resource_uri: "/api/v1/description/4820/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Milotic",
      national_id: 350,
      descriptions: [
        {
          name: "milotic_gen_5",
          resource_uri: "/api/v1/description/4830/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Castform",
      national_id: 351,
      descriptions: [
        {
          name: "castform_gen_5",
          resource_uri: "/api/v1/description/4838/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Kecleon",
      national_id: 352,
      descriptions: [
        {
          name: "kecleon_gen_5",
          resource_uri: "/api/v1/description/4846/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Shuppet",
      national_id: 353,
      descriptions: [
        {
          name: "shuppet_gen_5",
          resource_uri: "/api/v1/description/4856/",
        },
      ],
      types: [{ name: "ghost" }],
    },
    {
      name: "Banette",
      national_id: 354,
      descriptions: [
        {
          name: "banette_gen_5",
          resource_uri: "/api/v1/description/4866/",
        },
      ],
      types: [{ name: "ghost" }],
    },
    {
      name: "Duskull",
      national_id: 355,
      descriptions: [
        {
          name: "duskull_gen_5",
          resource_uri: "/api/v1/description/4876/",
        },
      ],
      types: [{ name: "ghost" }],
    },
    {
      name: "Dusclops",
      national_id: 356,
      descriptions: [
        {
          name: "dusclops_gen_5",
          resource_uri: "/api/v1/description/4886/",
        },
      ],
      types: [{ name: "ghost" }],
    },
    {
      name: "Tropius",
      national_id: 357,
      descriptions: [
        {
          name: "tropius_gen_5",
          resource_uri: "/api/v1/description/4896/",
        },
      ],
      types: [{ name: "flying" }, { name: "grass" }],
    },
    {
      name: "Chimecho",
      national_id: 358,
      descriptions: [
        {
          name: "chimecho_gen_5",
          resource_uri: "/api/v1/description/4907/",
        },
      ],
      types: [{ name: "psychic" }],
    },
    {
      name: "Absol",
      national_id: 359,
      descriptions: [
        {
          name: "absol_gen_5",
          resource_uri: "/api/v1/description/4917/",
        },
      ],
      types: [{ name: "dark" }],
    },
    {
      name: "Wynaut",
      national_id: 360,
      descriptions: [
        {
          name: "wynaut_gen_5",
          resource_uri: "/api/v1/description/4927/",
        },
      ],
      types: [{ name: "psychic" }],
    },
    {
      name: "Snorunt",
      national_id: 361,
      descriptions: [
        {
          name: "snorunt_gen_5",
          resource_uri: "/api/v1/description/4937/",
        },
      ],
      types: [{ name: "ice" }],
    },
    {
      name: "Glalie",
      national_id: 362,
      descriptions: [
        {
          name: "glalie_gen_5",
          resource_uri: "/api/v1/description/4946/",
        },
      ],
      types: [{ name: "ice" }],
    },
    {
      name: "Spheal",
      national_id: 363,
      descriptions: [
        {
          name: "spheal_gen_5",
          resource_uri: "/api/v1/description/4955/",
        },
      ],
      types: [{ name: "water" }, { name: "ice" }],
    },
    {
      name: "Sealeo",
      national_id: 364,
      descriptions: [
        {
          name: "sealeo_gen_5",
          resource_uri: "/api/v1/description/4963/",
        },
      ],
      types: [{ name: "water" }, { name: "ice" }],
    },
    {
      name: "Walrein",
      national_id: 365,
      descriptions: [
        {
          name: "walrein_gen_5",
          resource_uri: "/api/v1/description/4971/",
        },
      ],
      types: [{ name: "water" }, { name: "ice" }],
    },
    {
      name: "Clamperl",
      national_id: 366,
      descriptions: [
        {
          name: "clamperl_gen_5",
          resource_uri: "/api/v1/description/4979/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Huntail",
      national_id: 367,
      descriptions: [
        {
          name: "huntail_gen_5",
          resource_uri: "/api/v1/description/4988/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Gorebyss",
      national_id: 368,
      descriptions: [
        {
          name: "gorebyss_gen_5",
          resource_uri: "/api/v1/description/4997/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Relicanth",
      national_id: 369,
      descriptions: [
        {
          name: "relicanth_gen_5",
          resource_uri: "/api/v1/description/5006/",
        },
      ],
      types: [{ name: "rock" }, { name: "water" }],
    },
    {
      name: "Luvdisc",
      national_id: 370,
      descriptions: [
        {
          name: "luvdisc_gen_5",
          resource_uri: "/api/v1/description/5016/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Bagon",
      national_id: 371,
      descriptions: [
        {
          name: "bagon_gen_5",
          resource_uri: "/api/v1/description/5026/",
        },
      ],
      types: [{ name: "dragon" }],
    },
    {
      name: "Shelgon",
      national_id: 372,
      descriptions: [
        {
          name: "shelgon_gen_5",
          resource_uri: "/api/v1/description/5036/",
        },
      ],
      types: [{ name: "dragon" }],
    },
    {
      name: "Salamence",
      national_id: 373,
      descriptions: [
        {
          name: "salamence_gen_5",
          resource_uri: "/api/v1/description/5046/",
        },
      ],
      types: [{ name: "flying" }, { name: "dragon" }],
    },
    {
      name: "Beldum",
      national_id: 374,
      descriptions: [
        {
          name: "beldum_gen_5",
          resource_uri: "/api/v1/description/5055/",
        },
      ],
      types: [{ name: "steel" }, { name: "psychic" }],
    },
    {
      name: "Metang",
      national_id: 375,
      descriptions: [
        {
          name: "metang_gen_5",
          resource_uri: "/api/v1/description/5064/",
        },
      ],
      types: [{ name: "steel" }, { name: "psychic" }],
    },
    {
      name: "Metagross",
      national_id: 376,
      descriptions: [
        {
          name: "metagross_gen_5",
          resource_uri: "/api/v1/description/5073/",
        },
      ],
      types: [{ name: "steel" }, { name: "psychic" }],
    },
    {
      name: "Regirock",
      national_id: 377,
      descriptions: [
        {
          name: "regirock_gen_5",
          resource_uri: "/api/v1/description/5082/",
        },
      ],
      types: [{ name: "rock" }],
    },
    {
      name: "Regice",
      national_id: 378,
      descriptions: [
        {
          name: "regice_gen_5",
          resource_uri: "/api/v1/description/5090/",
        },
      ],
      types: [{ name: "ice" }],
    },
    {
      name: "Registeel",
      national_id: 379,
      descriptions: [
        {
          name: "registeel_gen_5",
          resource_uri: "/api/v1/description/5098/",
        },
      ],
      types: [{ name: "steel" }],
    },
    {
      name: "Latias",
      national_id: 380,
      descriptions: [
        {
          name: "latias_gen_5",
          resource_uri: "/api/v1/description/5106/",
        },
      ],
      types: [{ name: "dragon" }, { name: "psychic" }],
    },
    {
      name: "Latios",
      national_id: 381,
      descriptions: [
        {
          name: "latios_gen_5",
          resource_uri: "/api/v1/description/5114/",
        },
      ],
      types: [{ name: "dragon" }, { name: "psychic" }],
    },
    {
      name: "Kyogre",
      national_id: 382,
      descriptions: [
        {
          name: "kyogre_gen_5",
          resource_uri: "/api/v1/description/5123/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Groudon",
      national_id: 383,
      descriptions: [
        {
          name: "groudon_gen_5",
          resource_uri: "/api/v1/description/5131/",
        },
      ],
      types: [{ name: "ground" }],
    },
    {
      name: "Rayquaza",
      national_id: 384,
      descriptions: [
        {
          name: "rayquaza_gen_5",
          resource_uri: "/api/v1/description/5139/",
        },
      ],
      types: [{ name: "flying" }, { name: "dragon" }],
    },
    {
      name: "Jirachi",
      national_id: 385,
      descriptions: [
        {
          name: "jirachi_gen_5",
          resource_uri: "/api/v1/description/5147/",
        },
      ],
      types: [{ name: "steel" }, { name: "psychic" }],
    },
    {
      name: "Deoxys-normal",
      national_id: 386,
      descriptions: [
        {
          name: "deoxys-normal_gen_5",
          resource_uri: "/api/v1/description/5156/",
        },
      ],
      types: [{ name: "psychic" }],
    },
    {
      name: "Turtwig",
      national_id: 387,
      descriptions: [
        {
          name: "turtwig_gen_5",
          resource_uri: "/api/v1/description/5162/",
        },
      ],
      types: [{ name: "grass" }],
    },
    {
      name: "Grotle",
      national_id: 388,
      descriptions: [
        {
          name: "grotle_gen_5",
          resource_uri: "/api/v1/description/5168/",
        },
      ],
      types: [{ name: "grass" }],
    },
    {
      name: "Torterra",
      national_id: 389,
      descriptions: [
        {
          name: "torterra_gen_5",
          resource_uri: "/api/v1/description/5174/",
        },
      ],
      types: [{ name: "ground" }, { name: "grass" }],
    },
    {
      name: "Chimchar",
      national_id: 390,
      descriptions: [
        {
          name: "chimchar_gen_5",
          resource_uri: "/api/v1/description/5180/",
        },
      ],
      types: [{ name: "fire" }],
    },
    {
      name: "Monferno",
      national_id: 391,
      descriptions: [
        {
          name: "monferno_gen_5",
          resource_uri: "/api/v1/description/5186/",
        },
      ],
      types: [{ name: "fighting" }, { name: "fire" }],
    },
    {
      name: "Infernape",
      national_id: 392,
      descriptions: [
        {
          name: "infernape_gen_5",
          resource_uri: "/api/v1/description/5192/",
        },
      ],
      types: [{ name: "fighting" }, { name: "fire" }],
    },
    {
      name: "Piplup",
      national_id: 393,
      descriptions: [
        {
          name: "piplup_gen_5",
          resource_uri: "/api/v1/description/5198/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Prinplup",
      national_id: 394,
      descriptions: [
        {
          name: "prinplup_gen_5",
          resource_uri: "/api/v1/description/5204/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Empoleon",
      national_id: 395,
      descriptions: [
        {
          name: "empoleon_gen_5",
          resource_uri: "/api/v1/description/5210/",
        },
      ],
      types: [{ name: "steel" }, { name: "water" }],
    },
    {
      name: "Starly",
      national_id: 396,
      descriptions: [
        {
          name: "starly_gen_5",
          resource_uri: "/api/v1/description/5216/",
        },
      ],
      types: [{ name: "normal" }, { name: "flying" }],
    },
    {
      name: "Staravia",
      national_id: 397,
      descriptions: [
        {
          name: "staravia_gen_5",
          resource_uri: "/api/v1/description/5224/",
        },
      ],
      types: [{ name: "normal" }, { name: "flying" }],
    },
    {
      name: "Staraptor",
      national_id: 398,
      descriptions: [
        {
          name: "staraptor_gen_5",
          resource_uri: "/api/v1/description/5232/",
        },
      ],
      types: [{ name: "normal" }, { name: "flying" }],
    },
    {
      name: "Bidoof",
      national_id: 399,
      descriptions: [
        {
          name: "bidoof_gen_5",
          resource_uri: "/api/v1/description/5240/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Bibarel",
      national_id: 400,
      descriptions: [
        {
          name: "bibarel_gen_5",
          resource_uri: "/api/v1/description/5248/",
        },
      ],
      types: [{ name: "normal" }, { name: "water" }],
    },
    {
      name: "Kricketot",
      national_id: 401,
      descriptions: [
        {
          name: "kricketot_gen_5",
          resource_uri: "/api/v1/description/5256/",
        },
      ],
      types: [{ name: "bug" }],
    },
    {
      name: "Kricketune",
      national_id: 402,
      descriptions: [
        {
          name: "kricketune_gen_5",
          resource_uri: "/api/v1/description/5262/",
        },
      ],
      types: [{ name: "bug" }],
    },
    {
      name: "Shinx",
      national_id: 403,
      descriptions: [
        {
          name: "shinx_gen_5",
          resource_uri: "/api/v1/description/5268/",
        },
      ],
      types: [{ name: "electric" }],
    },
    {
      name: "Luxio",
      national_id: 404,
      descriptions: [
        {
          name: "luxio_gen_5",
          resource_uri: "/api/v1/description/5274/",
        },
      ],
      types: [{ name: "electric" }],
    },
    {
      name: "Luxray",
      national_id: 405,
      descriptions: [
        {
          name: "luxray_gen_5",
          resource_uri: "/api/v1/description/5281/",
        },
      ],
      types: [{ name: "electric" }],
    },
    {
      name: "Budew",
      national_id: 406,
      descriptions: [
        {
          name: "budew_gen_5",
          resource_uri: "/api/v1/description/5287/",
        },
      ],
      types: [{ name: "poison" }, { name: "grass" }],
    },
    {
      name: "Roserade",
      national_id: 407,
      descriptions: [
        {
          name: "roserade_gen_5",
          resource_uri: "/api/v1/description/5295/",
        },
      ],
      types: [{ name: "poison" }, { name: "grass" }],
    },
    {
      name: "Cranidos",
      national_id: 408,
      descriptions: [
        {
          name: "cranidos_gen_5",
          resource_uri: "/api/v1/description/5301/",
        },
      ],
      types: [{ name: "rock" }],
    },
    {
      name: "Rampardos",
      national_id: 409,
      descriptions: [
        {
          name: "rampardos_gen_5",
          resource_uri: "/api/v1/description/5308/",
        },
      ],
      types: [{ name: "rock" }],
    },
    {
      name: "Shieldon",
      national_id: 410,
      descriptions: [
        {
          name: "shieldon_gen_5",
          resource_uri: "/api/v1/description/5314/",
        },
      ],
      types: [{ name: "rock" }, { name: "steel" }],
    },
    {
      name: "Bastiodon",
      national_id: 411,
      descriptions: [
        {
          name: "bastiodon_gen_5",
          resource_uri: "/api/v1/description/5321/",
        },
      ],
      types: [{ name: "rock" }, { name: "steel" }],
    },
    {
      name: "Burmy",
      national_id: 412,
      descriptions: [
        {
          name: "burmy_gen_5",
          resource_uri: "/api/v1/description/5327/",
        },
      ],
      types: [{ name: "bug" }],
    },
    {
      name: "Wormadam-plant",
      national_id: 413,
      descriptions: [
        {
          name: "wormadam-plant_gen_5",
          resource_uri: "/api/v1/description/5335/",
        },
      ],
      types: [{ name: "bug" }, { name: "grass" }],
    },
    {
      name: "Mothim",
      national_id: 414,
      descriptions: [
        {
          name: "mothim_gen_5",
          resource_uri: "/api/v1/description/5342/",
        },
      ],
      types: [{ name: "flying" }, { name: "bug" }],
    },
    {
      name: "Combee",
      national_id: 415,
      descriptions: [
        {
          name: "combee_gen_5",
          resource_uri: "/api/v1/description/5350/",
        },
      ],
      types: [{ name: "flying" }, { name: "bug" }],
    },
    {
      name: "Vespiquen",
      national_id: 416,
      descriptions: [
        {
          name: "vespiquen_gen_5",
          resource_uri: "/api/v1/description/5358/",
        },
      ],
      types: [{ name: "flying" }, { name: "bug" }],
    },
    {
      name: "Pachirisu",
      national_id: 417,
      descriptions: [
        {
          name: "pachirisu_gen_5",
          resource_uri: "/api/v1/description/5366/",
        },
      ],
      types: [{ name: "electric" }],
    },
    {
      name: "Buizel",
      national_id: 418,
      descriptions: [
        {
          name: "buizel_gen_5",
          resource_uri: "/api/v1/description/5374/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Floatzel",
      national_id: 419,
      descriptions: [
        {
          name: "floatzel_gen_5",
          resource_uri: "/api/v1/description/5381/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Cherubi",
      national_id: 420,
      descriptions: [
        {
          name: "cherubi_gen_5",
          resource_uri: "/api/v1/description/5389/",
        },
      ],
      types: [{ name: "grass" }],
    },
    {
      name: "Cherrim",
      national_id: 421,
      descriptions: [
        {
          name: "cherrim_gen_5",
          resource_uri: "/api/v1/description/5395/",
        },
      ],
      types: [{ name: "grass" }],
    },
    {
      name: "Shellos",
      national_id: 422,
      descriptions: [
        {
          name: "shellos_gen_5",
          resource_uri: "/api/v1/description/5401/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Gastrodon",
      national_id: 423,
      descriptions: [
        {
          name: "gastrodon_gen_5",
          resource_uri: "/api/v1/description/5407/",
        },
      ],
      types: [{ name: "ground" }, { name: "water" }],
    },
    {
      name: "Ambipom",
      national_id: 424,
      descriptions: [
        {
          name: "ambipom_gen_5",
          resource_uri: "/api/v1/description/5414/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Drifloon",
      national_id: 425,
      descriptions: [
        {
          name: "drifloon_gen_5",
          resource_uri: "/api/v1/description/5421/",
        },
      ],
      types: [{ name: "flying" }, { name: "ghost" }],
    },
    {
      name: "Drifblim",
      national_id: 426,
      descriptions: [
        {
          name: "drifblim_gen_5",
          resource_uri: "/api/v1/description/5429/",
        },
      ],
      types: [{ name: "flying" }, { name: "ghost" }],
    },
    {
      name: "Buneary",
      national_id: 427,
      descriptions: [
        {
          name: "buneary_gen_5",
          resource_uri: "/api/v1/description/5436/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Lopunny",
      national_id: 428,
      descriptions: [
        {
          name: "lopunny_gen_5",
          resource_uri: "/api/v1/description/5442/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Mismagius",
      national_id: 429,
      descriptions: [
        {
          name: "mismagius_gen_5",
          resource_uri: "/api/v1/description/5448/",
        },
      ],
      types: [{ name: "ghost" }],
    },
    {
      name: "Honchkrow",
      national_id: 430,
      descriptions: [
        {
          name: "honchkrow_gen_5",
          resource_uri: "/api/v1/description/5454/",
        },
      ],
      types: [{ name: "flying" }, { name: "dark" }],
    },
    {
      name: "Glameow",
      national_id: 431,
      descriptions: [
        {
          name: "glameow_gen_5",
          resource_uri: "/api/v1/description/5460/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Purugly",
      national_id: 432,
      descriptions: [
        {
          name: "purugly_gen_5",
          resource_uri: "/api/v1/description/5466/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Chingling",
      national_id: 433,
      descriptions: [
        {
          name: "chingling_gen_5",
          resource_uri: "/api/v1/description/5472/",
        },
      ],
      types: [{ name: "psychic" }],
    },
    {
      name: "Stunky",
      national_id: 434,
      descriptions: [
        {
          name: "stunky_gen_5",
          resource_uri: "/api/v1/description/5480/",
        },
      ],
      types: [{ name: "poison" }, { name: "dark" }],
    },
    {
      name: "Skuntank",
      national_id: 435,
      descriptions: [
        {
          name: "skuntank_gen_5",
          resource_uri: "/api/v1/description/5488/",
        },
      ],
      types: [{ name: "poison" }, { name: "dark" }],
    },
    {
      name: "Bronzor",
      national_id: 436,
      descriptions: [
        {
          name: "bronzor_gen_5",
          resource_uri: "/api/v1/description/5495/",
        },
      ],
      types: [{ name: "steel" }, { name: "psychic" }],
    },
    {
      name: "Bronzong",
      national_id: 437,
      descriptions: [
        {
          name: "bronzong_gen_5",
          resource_uri: "/api/v1/description/5501/",
        },
      ],
      types: [{ name: "steel" }, { name: "psychic" }],
    },
    {
      name: "Bonsly",
      national_id: 438,
      descriptions: [
        {
          name: "bonsly_gen_5",
          resource_uri: "/api/v1/description/5507/",
        },
      ],
      types: [{ name: "rock" }],
    },
    {
      name: "Mime-jr",
      national_id: 439,
      descriptions: [
        {
          name: "mime-jr_gen_5",
          resource_uri: "/api/v1/description/5514/",
        },
      ],
      types: [{ name: "fairy" }, { name: "psychic" }],
    },
    {
      name: "Happiny",
      national_id: 440,
      descriptions: [
        {
          name: "happiny_gen_5",
          resource_uri: "/api/v1/description/5522/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Chatot",
      national_id: 441,
      descriptions: [
        {
          name: "chatot_gen_5",
          resource_uri: "/api/v1/description/5528/",
        },
      ],
      types: [{ name: "normal" }, { name: "flying" }],
    },
    {
      name: "Spiritomb",
      national_id: 442,
      descriptions: [
        {
          name: "spiritomb_gen_5",
          resource_uri: "/api/v1/description/5536/",
        },
      ],
      types: [{ name: "ghost" }, { name: "dark" }],
    },
    {
      name: "Gible",
      national_id: 443,
      descriptions: [
        {
          name: "gible_gen_5",
          resource_uri: "/api/v1/description/5543/",
        },
      ],
      types: [{ name: "ground" }, { name: "dragon" }],
    },
    {
      name: "Gabite",
      national_id: 444,
      descriptions: [
        {
          name: "gabite_gen_5",
          resource_uri: "/api/v1/description/5551/",
        },
      ],
      types: [{ name: "ground" }, { name: "dragon" }],
    },
    {
      name: "Garchomp",
      national_id: 445,
      descriptions: [
        {
          name: "garchomp_gen_5",
          resource_uri: "/api/v1/description/5559/",
        },
      ],
      types: [{ name: "ground" }, { name: "dragon" }],
    },
    {
      name: "Munchlax",
      national_id: 446,
      descriptions: [
        {
          name: "munchlax_gen_5",
          resource_uri: "/api/v1/description/5567/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Riolu",
      national_id: 447,
      descriptions: [
        {
          name: "riolu_gen_5",
          resource_uri: "/api/v1/description/5574/",
        },
      ],
      types: [{ name: "fighting" }],
    },
    {
      name: "Lucario",
      national_id: 448,
      descriptions: [
        {
          name: "lucario_gen_5",
          resource_uri: "/api/v1/description/5582/",
        },
      ],
      types: [{ name: "fighting" }, { name: "steel" }],
    },
    {
      name: "Hippopotas",
      national_id: 449,
      descriptions: [
        {
          name: "hippopotas_gen_5",
          resource_uri: "/api/v1/description/5590/",
        },
      ],
      types: [{ name: "ground" }],
    },
    {
      name: "Hippowdon",
      national_id: 450,
      descriptions: [
        {
          name: "hippowdon_gen_5",
          resource_uri: "/api/v1/description/5598/",
        },
      ],
      types: [{ name: "ground" }],
    },
    {
      name: "Skorupi",
      national_id: 451,
      descriptions: [
        {
          name: "skorupi_gen_5",
          resource_uri: "/api/v1/description/5605/",
        },
      ],
      types: [{ name: "poison" }, { name: "bug" }],
    },
    {
      name: "Drapion",
      national_id: 452,
      descriptions: [
        {
          name: "drapion_gen_5",
          resource_uri: "/api/v1/description/5613/",
        },
      ],
      types: [{ name: "poison" }, { name: "dark" }],
    },
    {
      name: "Croagunk",
      national_id: 453,
      descriptions: [
        {
          name: "croagunk_gen_5",
          resource_uri: "/api/v1/description/5622/",
        },
      ],
      types: [{ name: "fighting" }, { name: "poison" }],
    },
    {
      name: "Toxicroak",
      national_id: 454,
      descriptions: [
        {
          name: "toxicroak_gen_5",
          resource_uri: "/api/v1/description/5630/",
        },
      ],
      types: [{ name: "fighting" }, { name: "poison" }],
    },
    {
      name: "Carnivine",
      national_id: 455,
      descriptions: [
        {
          name: "carnivine_gen_5",
          resource_uri: "/api/v1/description/5637/",
        },
      ],
      types: [{ name: "grass" }],
    },
    {
      name: "Finneon",
      national_id: 456,
      descriptions: [
        {
          name: "finneon_gen_5",
          resource_uri: "/api/v1/description/5645/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Lumineon",
      national_id: 457,
      descriptions: [
        {
          name: "lumineon_gen_5",
          resource_uri: "/api/v1/description/5651/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Mantyke",
      national_id: 458,
      descriptions: [
        {
          name: "mantyke_gen_5",
          resource_uri: "/api/v1/description/5657/",
        },
      ],
      types: [{ name: "flying" }, { name: "water" }],
    },
    {
      name: "Snover",
      national_id: 459,
      descriptions: [
        {
          name: "snover_gen_5",
          resource_uri: "/api/v1/description/5664/",
        },
      ],
      types: [{ name: "grass" }, { name: "ice" }],
    },
    {
      name: "Abomasnow",
      national_id: 460,
      descriptions: [
        {
          name: "abomasnow_gen_5",
          resource_uri: "/api/v1/description/5672/",
        },
      ],
      types: [{ name: "grass" }, { name: "ice" }],
    },
    {
      name: "Weavile",
      national_id: 461,
      descriptions: [
        {
          name: "weavile_gen_5",
          resource_uri: "/api/v1/description/5679/",
        },
      ],
      types: [{ name: "ice" }, { name: "dark" }],
    },
    {
      name: "Magnezone",
      national_id: 462,
      descriptions: [
        {
          name: "magnezone_gen_5",
          resource_uri: "/api/v1/description/5684/",
        },
      ],
      types: [{ name: "steel" }, { name: "electric" }],
    },
    {
      name: "Lickilicky",
      national_id: 463,
      descriptions: [
        {
          name: "lickilicky_gen_5",
          resource_uri: "/api/v1/description/5690/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Rhyperior",
      national_id: 464,
      descriptions: [
        {
          name: "rhyperior_gen_5",
          resource_uri: "/api/v1/description/5696/",
        },
      ],
      types: [{ name: "ground" }, { name: "rock" }],
    },
    {
      name: "Tangrowth",
      national_id: 465,
      descriptions: [
        {
          name: "tangrowth_gen_5",
          resource_uri: "/api/v1/description/5702/",
        },
      ],
      types: [{ name: "grass" }],
    },
    {
      name: "Electivire",
      national_id: 466,
      descriptions: [
        {
          name: "electivire_gen_5",
          resource_uri: "/api/v1/description/5707/",
        },
      ],
      types: [{ name: "electric" }],
    },
    {
      name: "Magmortar",
      national_id: 467,
      descriptions: [
        {
          name: "magmortar_gen_5",
          resource_uri: "/api/v1/description/5712/",
        },
      ],
      types: [{ name: "fire" }],
    },
    {
      name: "Togekiss",
      national_id: 468,
      descriptions: [
        {
          name: "togekiss_gen_5",
          resource_uri: "/api/v1/description/5717/",
        },
      ],
      types: [{ name: "flying" }, { name: "fairy" }],
    },
    {
      name: "Yanmega",
      national_id: 469,
      descriptions: [
        {
          name: "yanmega_gen_5",
          resource_uri: "/api/v1/description/5723/",
        },
      ],
      types: [{ name: "flying" }, { name: "bug" }],
    },
    {
      name: "Leafeon",
      national_id: 470,
      descriptions: [
        {
          name: "leafeon_gen_5",
          resource_uri: "/api/v1/description/5730/",
        },
      ],
      types: [{ name: "grass" }],
    },
    {
      name: "Glaceon",
      national_id: 471,
      descriptions: [
        {
          name: "glaceon_gen_5",
          resource_uri: "/api/v1/description/5736/",
        },
      ],
      types: [{ name: "ice" }],
    },
    {
      name: "Gliscor",
      national_id: 472,
      descriptions: [
        {
          name: "gliscor_gen_5",
          resource_uri: "/api/v1/description/5742/",
        },
      ],
      types: [{ name: "flying" }, { name: "ground" }],
    },
    {
      name: "Mamoswine",
      national_id: 473,
      descriptions: [
        {
          name: "mamoswine_gen_5",
          resource_uri: "/api/v1/description/5748/",
        },
      ],
      types: [{ name: "ground" }, { name: "ice" }],
    },
    {
      name: "Porygon-z",
      national_id: 474,
      descriptions: [
        {
          name: "porygon-z_gen_5",
          resource_uri: "/api/v1/description/5754/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Gallade",
      national_id: 475,
      descriptions: [
        {
          name: "gallade_gen_5",
          resource_uri: "/api/v1/description/5759/",
        },
      ],
      types: [{ name: "fighting" }, { name: "psychic" }],
    },
    {
      name: "Probopass",
      national_id: 476,
      descriptions: [
        {
          name: "probopass_gen_5",
          resource_uri: "/api/v1/description/5764/",
        },
      ],
      types: [{ name: "rock" }, { name: "steel" }],
    },
    {
      name: "Dusknoir",
      national_id: 477,
      descriptions: [
        {
          name: "dusknoir_gen_5",
          resource_uri: "/api/v1/description/5769/",
        },
      ],
      types: [{ name: "ghost" }],
    },
    {
      name: "Froslass",
      national_id: 478,
      descriptions: [
        {
          name: "froslass_gen_5",
          resource_uri: "/api/v1/description/5776/",
        },
      ],
      types: [{ name: "ghost" }, { name: "ice" }],
    },
    {
      name: "Rotom",
      national_id: 479,
      descriptions: [
        {
          name: "rotom_gen_5",
          resource_uri: "/api/v1/description/5781/",
        },
      ],
      types: [{ name: "ghost" }, { name: "electric" }],
    },
    {
      name: "Uxie",
      national_id: 480,
      descriptions: [
        { name: "uxie_gen_5", resource_uri: "/api/v1/description/5788/" },
      ],
      types: [{ name: "psychic" }],
    },
    {
      name: "Mesprit",
      national_id: 481,
      descriptions: [
        {
          name: "mesprit_gen_5",
          resource_uri: "/api/v1/description/5794/",
        },
      ],
      types: [{ name: "psychic" }],
    },
    {
      name: "Azelf",
      national_id: 482,
      descriptions: [
        {
          name: "azelf_gen_5",
          resource_uri: "/api/v1/description/5800/",
        },
      ],
      types: [{ name: "psychic" }],
    },
    {
      name: "Dialga",
      national_id: 483,
      descriptions: [
        {
          name: "dialga_gen_5",
          resource_uri: "/api/v1/description/5806/",
        },
      ],
      types: [{ name: "steel" }, { name: "dragon" }],
    },
    {
      name: "Palkia",
      national_id: 484,
      descriptions: [
        {
          name: "palkia_gen_5",
          resource_uri: "/api/v1/description/5812/",
        },
      ],
      types: [{ name: "water" }, { name: "dragon" }],
    },
    {
      name: "Heatran",
      national_id: 485,
      descriptions: [
        {
          name: "heatran_gen_5",
          resource_uri: "/api/v1/description/5817/",
        },
      ],
      types: [{ name: "steel" }, { name: "fire" }],
    },
    {
      name: "Regigigas",
      national_id: 486,
      descriptions: [
        {
          name: "regigigas_gen_5",
          resource_uri: "/api/v1/description/5822/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Giratina-altered",
      national_id: 487,
      descriptions: [
        {
          name: "giratina-altered_gen_5",
          resource_uri: "/api/v1/description/5827/",
        },
      ],
      types: [{ name: "ghost" }, { name: "dragon" }],
    },
    {
      name: "Cresselia",
      national_id: 488,
      descriptions: [
        {
          name: "cresselia_gen_5",
          resource_uri: "/api/v1/description/5832/",
        },
      ],
      types: [{ name: "psychic" }],
    },
    {
      name: "Phione",
      national_id: 489,
      descriptions: [
        {
          name: "phione_gen_5",
          resource_uri: "/api/v1/description/5837/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Manaphy",
      national_id: 490,
      descriptions: [
        {
          name: "manaphy_gen_5",
          resource_uri: "/api/v1/description/5843/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Darkrai",
      national_id: 491,
      descriptions: [
        {
          name: "darkrai_gen_5",
          resource_uri: "/api/v1/description/5849/",
        },
      ],
      types: [{ name: "dark" }],
    },
    {
      name: "Shaymin-land",
      national_id: 492,
      descriptions: [
        {
          name: "shaymin-land_gen_5",
          resource_uri: "/api/v1/description/5855/",
        },
      ],
      types: [{ name: "grass" }],
    },
    {
      name: "Arceus",
      national_id: 493,
      descriptions: [
        {
          name: "arceus_gen_5",
          resource_uri: "/api/v1/description/5861/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Victini",
      national_id: 494,
      descriptions: [
        {
          name: "victini_gen_5",
          resource_uri: "/api/v1/description/5864/",
        },
      ],
      types: [{ name: "fire" }, { name: "psychic" }],
    },
    {
      name: "Snivy",
      national_id: 495,
      descriptions: [
        {
          name: "snivy_gen_5",
          resource_uri: "/api/v1/description/5867/",
        },
      ],
      types: [{ name: "grass" }],
    },
    {
      name: "Servine",
      national_id: 496,
      descriptions: [
        {
          name: "servine_gen_5",
          resource_uri: "/api/v1/description/5870/",
        },
      ],
      types: [{ name: "grass" }],
    },
    {
      name: "Serperior",
      national_id: 497,
      descriptions: [
        {
          name: "serperior_gen_5",
          resource_uri: "/api/v1/description/5873/",
        },
      ],
      types: [{ name: "grass" }],
    },
    {
      name: "Tepig",
      national_id: 498,
      descriptions: [
        {
          name: "tepig_gen_5",
          resource_uri: "/api/v1/description/5876/",
        },
      ],
      types: [{ name: "fire" }],
    },
    {
      name: "Pignite",
      national_id: 499,
      descriptions: [
        {
          name: "pignite_gen_5",
          resource_uri: "/api/v1/description/5879/",
        },
      ],
      types: [{ name: "fighting" }, { name: "fire" }],
    },
    {
      name: "Emboar",
      national_id: 500,
      descriptions: [
        {
          name: "emboar_gen_5",
          resource_uri: "/api/v1/description/5882/",
        },
      ],
      types: [{ name: "fighting" }, { name: "fire" }],
    },
    {
      name: "Oshawott",
      national_id: 501,
      descriptions: [
        {
          name: "oshawott_gen_5",
          resource_uri: "/api/v1/description/5885/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Dewott",
      national_id: 502,
      descriptions: [
        {
          name: "dewott_gen_5",
          resource_uri: "/api/v1/description/5888/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Samurott",
      national_id: 503,
      descriptions: [
        {
          name: "samurott_gen_5",
          resource_uri: "/api/v1/description/5891/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Patrat",
      national_id: 504,
      descriptions: [
        {
          name: "patrat_gen_5",
          resource_uri: "/api/v1/description/5894/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Watchog",
      national_id: 505,
      descriptions: [
        {
          name: "watchog_gen_5",
          resource_uri: "/api/v1/description/5898/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Lillipup",
      national_id: 506,
      descriptions: [
        {
          name: "lillipup_gen_5",
          resource_uri: "/api/v1/description/5903/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Herdier",
      national_id: 507,
      descriptions: [
        {
          name: "herdier_gen_5",
          resource_uri: "/api/v1/description/5908/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Stoutland",
      national_id: 508,
      descriptions: [
        {
          name: "stoutland_gen_5",
          resource_uri: "/api/v1/description/5912/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Purrloin",
      national_id: 509,
      descriptions: [
        {
          name: "purrloin_gen_5",
          resource_uri: "/api/v1/description/5916/",
        },
      ],
      types: [{ name: "dark" }],
    },
    {
      name: "Liepard",
      national_id: 510,
      descriptions: [
        {
          name: "liepard_gen_5",
          resource_uri: "/api/v1/description/5920/",
        },
      ],
      types: [{ name: "dark" }],
    },
    {
      name: "Pansage",
      national_id: 511,
      descriptions: [
        {
          name: "pansage_gen_5",
          resource_uri: "/api/v1/description/5925/",
        },
      ],
      types: [{ name: "grass" }],
    },
    {
      name: "Simisage",
      national_id: 512,
      descriptions: [
        {
          name: "simisage_gen_5",
          resource_uri: "/api/v1/description/5930/",
        },
      ],
      types: [{ name: "grass" }],
    },
    {
      name: "Pansear",
      national_id: 513,
      descriptions: [
        {
          name: "pansear_gen_5",
          resource_uri: "/api/v1/description/5935/",
        },
      ],
      types: [{ name: "fire" }],
    },
    {
      name: "Simisear",
      national_id: 514,
      descriptions: [
        {
          name: "simisear_gen_5",
          resource_uri: "/api/v1/description/5940/",
        },
      ],
      types: [{ name: "fire" }],
    },
    {
      name: "Panpour",
      national_id: 515,
      descriptions: [
        {
          name: "panpour_gen_5",
          resource_uri: "/api/v1/description/5945/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Simipour",
      national_id: 516,
      descriptions: [
        {
          name: "simipour_gen_5",
          resource_uri: "/api/v1/description/5950/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Munna",
      national_id: 517,
      descriptions: [
        {
          name: "munna_gen_5",
          resource_uri: "/api/v1/description/5955/",
        },
      ],
      types: [{ name: "psychic" }],
    },
    {
      name: "Musharna",
      national_id: 518,
      descriptions: [
        {
          name: "musharna_gen_5",
          resource_uri: "/api/v1/description/5958/",
        },
      ],
      types: [{ name: "psychic" }],
    },
    {
      name: "Pidove",
      national_id: 519,
      descriptions: [
        {
          name: "pidove_gen_5",
          resource_uri: "/api/v1/description/5961/",
        },
      ],
      types: [{ name: "normal" }, { name: "flying" }],
    },
    {
      name: "Tranquill",
      national_id: 520,
      descriptions: [
        {
          name: "tranquill_gen_5",
          resource_uri: "/api/v1/description/5965/",
        },
      ],
      types: [{ name: "normal" }, { name: "flying" }],
    },
    {
      name: "Unfezant",
      national_id: 521,
      descriptions: [
        {
          name: "unfezant_gen_5",
          resource_uri: "/api/v1/description/5969/",
        },
      ],
      types: [{ name: "normal" }, { name: "flying" }],
    },
    {
      name: "Blitzle",
      national_id: 522,
      descriptions: [
        {
          name: "blitzle_gen_5",
          resource_uri: "/api/v1/description/5973/",
        },
      ],
      types: [{ name: "electric" }],
    },
    {
      name: "Zebstrika",
      national_id: 523,
      descriptions: [
        {
          name: "zebstrika_gen_5",
          resource_uri: "/api/v1/description/5976/",
        },
      ],
      types: [{ name: "electric" }],
    },
    {
      name: "Roggenrola",
      national_id: 524,
      descriptions: [
        {
          name: "roggenrola_gen_5",
          resource_uri: "/api/v1/description/5979/",
        },
      ],
      types: [{ name: "rock" }],
    },
    {
      name: "Boldore",
      national_id: 525,
      descriptions: [
        {
          name: "boldore_gen_5",
          resource_uri: "/api/v1/description/5984/",
        },
      ],
      types: [{ name: "rock" }],
    },
    {
      name: "Gigalith",
      national_id: 526,
      descriptions: [
        {
          name: "gigalith_gen_5",
          resource_uri: "/api/v1/description/5989/",
        },
      ],
      types: [{ name: "rock" }],
    },
    {
      name: "Woobat",
      national_id: 527,
      descriptions: [
        {
          name: "swoobat_gen_5",
          resource_uri: "/api/v1/description/5998/",
        },
        {
          name: "woobat_gen_5",
          resource_uri: "/api/v1/description/5993/",
        },
      ],
      types: [{ name: "flying" }, { name: "psychic" }],
    },
    {
      name: "Swoobat",
      national_id: 528,
      descriptions: [
        {
          name: "swoobat_gen_5",
          resource_uri: "/api/v1/description/5998/",
        },
      ],
      types: [{ name: "flying" }, { name: "psychic" }],
    },
    {
      name: "Drilbur",
      national_id: 529,
      descriptions: [
        {
          name: "drilbur_gen_5",
          resource_uri: "/api/v1/description/6002/",
        },
      ],
      types: [{ name: "ground" }],
    },
    {
      name: "Excadrill",
      national_id: 530,
      descriptions: [
        {
          name: "excadrill_gen_5",
          resource_uri: "/api/v1/description/6005/",
        },
      ],
      types: [{ name: "ground" }, { name: "steel" }],
    },
    {
      name: "Audino",
      national_id: 531,
      descriptions: [
        {
          name: "audino_gen_5",
          resource_uri: "/api/v1/description/6008/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Timburr",
      national_id: 532,
      descriptions: [
        {
          name: "timburr_gen_5",
          resource_uri: "/api/v1/description/6013/",
        },
      ],
      types: [{ name: "fighting" }],
    },
    {
      name: "Gurdurr",
      national_id: 533,
      descriptions: [
        {
          name: "gurdurr_gen_5",
          resource_uri: "/api/v1/description/6017/",
        },
      ],
      types: [{ name: "fighting" }],
    },
    {
      name: "Conkeldurr",
      national_id: 534,
      descriptions: [
        {
          name: "conkeldurr_gen_5",
          resource_uri: "/api/v1/description/6021/",
        },
      ],
      types: [{ name: "fighting" }],
    },
    {
      name: "Tympole",
      national_id: 535,
      descriptions: [
        {
          name: "tympole_gen_5",
          resource_uri: "/api/v1/description/6026/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Palpitoad",
      national_id: 536,
      descriptions: [
        {
          name: "palpitoad_gen_5",
          resource_uri: "/api/v1/description/6029/",
        },
      ],
      types: [{ name: "ground" }, { name: "water" }],
    },
    {
      name: "Seismitoad",
      national_id: 537,
      descriptions: [
        {
          name: "seismitoad_gen_5",
          resource_uri: "/api/v1/description/6032/",
        },
      ],
      types: [{ name: "ground" }, { name: "water" }],
    },
    {
      name: "Throh",
      national_id: 538,
      descriptions: [
        {
          name: "throh_gen_5",
          resource_uri: "/api/v1/description/6035/",
        },
      ],
      types: [{ name: "fighting" }],
    },
    {
      name: "Sawk",
      national_id: 539,
      descriptions: [
        { name: "sawk_gen_5", resource_uri: "/api/v1/description/6039/" },
      ],
      types: [{ name: "fighting" }],
    },
    {
      name: "Sewaddle",
      national_id: 540,
      descriptions: [
        {
          name: "sewaddle_gen_5",
          resource_uri: "/api/v1/description/6044/",
        },
      ],
      types: [{ name: "bug" }, { name: "grass" }],
    },
    {
      name: "Swadloon",
      national_id: 541,
      descriptions: [
        {
          name: "swadloon_gen_5",
          resource_uri: "/api/v1/description/6047/",
        },
      ],
      types: [{ name: "bug" }, { name: "grass" }],
    },
    {
      name: "Leavanny",
      national_id: 542,
      descriptions: [
        {
          name: "leavanny_gen_5",
          resource_uri: "/api/v1/description/6052/",
        },
      ],
      types: [{ name: "bug" }, { name: "grass" }],
    },
    {
      name: "Venipede",
      national_id: 543,
      descriptions: [
        {
          name: "venipede_gen_5",
          resource_uri: "/api/v1/description/6055/",
        },
      ],
      types: [{ name: "poison" }, { name: "bug" }],
    },
    {
      name: "Whirlipede",
      national_id: 544,
      descriptions: [
        {
          name: "whirlipede_gen_5",
          resource_uri: "/api/v1/description/6060/",
        },
      ],
      types: [{ name: "poison" }, { name: "bug" }],
    },
    {
      name: "Scolipede",
      national_id: 545,
      descriptions: [
        {
          name: "scolipede_gen_5",
          resource_uri: "/api/v1/description/6065/",
        },
      ],
      types: [{ name: "poison" }, { name: "bug" }],
    },
    {
      name: "Cottonee",
      national_id: 546,
      descriptions: [
        {
          name: "cottonee_gen_5",
          resource_uri: "/api/v1/description/6069/",
        },
      ],
      types: [{ name: "grass" }, { name: "fairy" }],
    },
    {
      name: "Whimsicott",
      national_id: 547,
      descriptions: [
        {
          name: "whimsicott_gen_5",
          resource_uri: "/api/v1/description/6072/",
        },
      ],
      types: [{ name: "grass" }, { name: "fairy" }],
    },
    {
      name: "Petilil",
      national_id: 548,
      descriptions: [
        {
          name: "petilil_gen_5",
          resource_uri: "/api/v1/description/6075/",
        },
      ],
      types: [{ name: "grass" }],
    },
    {
      name: "Lilligant",
      national_id: 549,
      descriptions: [
        {
          name: "lilligant_gen_5",
          resource_uri: "/api/v1/description/6078/",
        },
      ],
      types: [{ name: "grass" }],
    },
    {
      name: "Basculin-red-striped",
      national_id: 550,
      descriptions: [
        {
          name: "basculin-red-striped_gen_5",
          resource_uri: "/api/v1/description/6081/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Sandile",
      national_id: 551,
      descriptions: [
        {
          name: "sandile_gen_5",
          resource_uri: "/api/v1/description/6084/",
        },
      ],
      types: [{ name: "ground" }, { name: "dark" }],
    },
    {
      name: "Krokorok",
      national_id: 552,
      descriptions: [
        {
          name: "krokorok_gen_5",
          resource_uri: "/api/v1/description/6089/",
        },
      ],
      types: [{ name: "ground" }, { name: "dark" }],
    },
    {
      name: "Krookodile",
      national_id: 553,
      descriptions: [
        {
          name: "krookodile_gen_5",
          resource_uri: "/api/v1/description/6093/",
        },
      ],
      types: [{ name: "ground" }, { name: "dark" }],
    },
    {
      name: "Darumaka",
      national_id: 554,
      descriptions: [
        {
          name: "darumaka_gen_5",
          resource_uri: "/api/v1/description/6097/",
        },
      ],
      types: [{ name: "fire" }],
    },
    {
      name: "Darmanitan-standard",
      national_id: 555,
      descriptions: [
        {
          name: "darmanitan-standard_gen_5",
          resource_uri: "/api/v1/description/6100/",
        },
      ],
      types: [{ name: "fire" }],
    },
    {
      name: "Maractus",
      national_id: 556,
      descriptions: [
        {
          name: "maractus_gen_5",
          resource_uri: "/api/v1/description/6103/",
        },
      ],
      types: [{ name: "grass" }],
    },
    {
      name: "Dwebble",
      national_id: 557,
      descriptions: [
        {
          name: "dwebble_gen_5",
          resource_uri: "/api/v1/description/6106/",
        },
      ],
      types: [{ name: "rock" }, { name: "bug" }],
    },
    {
      name: "Crustle",
      national_id: 558,
      descriptions: [
        {
          name: "crustle_gen_5",
          resource_uri: "/api/v1/description/6111/",
        },
      ],
      types: [{ name: "rock" }, { name: "bug" }],
    },
    {
      name: "Scraggy",
      national_id: 559,
      descriptions: [
        {
          name: "scraggy_gen_5",
          resource_uri: "/api/v1/description/6115/",
        },
      ],
      types: [{ name: "fighting" }, { name: "dark" }],
    },
    {
      name: "Scrafty",
      national_id: 560,
      descriptions: [
        {
          name: "scrafty_gen_5",
          resource_uri: "/api/v1/description/6120/",
        },
      ],
      types: [{ name: "fighting" }, { name: "dark" }],
    },
    {
      name: "Sigilyph",
      national_id: 561,
      descriptions: [
        {
          name: "sigilyph_gen_5",
          resource_uri: "/api/v1/description/6123/",
        },
      ],
      types: [{ name: "flying" }, { name: "psychic" }],
    },
    {
      name: "Yamask",
      national_id: 562,
      descriptions: [
        {
          name: "yamask_gen_5",
          resource_uri: "/api/v1/description/6128/",
        },
      ],
      types: [{ name: "ghost" }],
    },
    {
      name: "Cofagrigus",
      national_id: 563,
      descriptions: [
        {
          name: "cofagrigus_gen_5",
          resource_uri: "/api/v1/description/6131/",
        },
      ],
      types: [{ name: "ghost" }],
    },
    {
      name: "Tirtouga",
      national_id: 564,
      descriptions: [
        {
          name: "tirtouga_gen_5",
          resource_uri: "/api/v1/description/6134/",
        },
      ],
      types: [{ name: "rock" }, { name: "water" }],
    },
    {
      name: "Carracosta",
      national_id: 565,
      descriptions: [
        {
          name: "carracosta_gen_5",
          resource_uri: "/api/v1/description/6138/",
        },
      ],
      types: [{ name: "rock" }, { name: "water" }],
    },
    {
      name: "Archen",
      national_id: 566,
      descriptions: [
        {
          name: "archen_gen_5",
          resource_uri: "/api/v1/description/6141/",
        },
      ],
      types: [{ name: "flying" }, { name: "rock" }],
    },
    {
      name: "Archeops",
      national_id: 567,
      descriptions: [
        {
          name: "archeops_gen_5",
          resource_uri: "/api/v1/description/6145/",
        },
      ],
      types: [{ name: "flying" }, { name: "rock" }],
    },
    {
      name: "Trubbish",
      national_id: 568,
      descriptions: [
        {
          name: "trubbish_gen_5",
          resource_uri: "/api/v1/description/6148/",
        },
      ],
      types: [{ name: "poison" }],
    },
    {
      name: "Garbodor",
      national_id: 569,
      descriptions: [
        {
          name: "garbodor_gen_5",
          resource_uri: "/api/v1/description/6153/",
        },
      ],
      types: [{ name: "poison" }],
    },
    {
      name: "Zorua",
      national_id: 570,
      descriptions: [
        {
          name: "zorua_gen_5",
          resource_uri: "/api/v1/description/6158/",
        },
      ],
      types: [{ name: "dark" }],
    },
    {
      name: "Zoroark",
      national_id: 571,
      descriptions: [
        {
          name: "zoroark_gen_5",
          resource_uri: "/api/v1/description/6162/",
        },
      ],
      types: [{ name: "dark" }],
    },
    {
      name: "Minccino",
      national_id: 572,
      descriptions: [
        {
          name: "minccino_gen_5",
          resource_uri: "/api/v1/description/6167/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Cinccino",
      national_id: 573,
      descriptions: [
        {
          name: "cinccino_gen_5",
          resource_uri: "/api/v1/description/6171/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Gothita",
      national_id: 574,
      descriptions: [
        {
          name: "gothita_gen_5",
          resource_uri: "/api/v1/description/6175/",
        },
      ],
      types: [{ name: "psychic" }],
    },
    {
      name: "Gothorita",
      national_id: 575,
      descriptions: [
        {
          name: "gothorita_gen_5",
          resource_uri: "/api/v1/description/6179/",
        },
      ],
      types: [{ name: "psychic" }],
    },
    {
      name: "Gothitelle",
      national_id: 576,
      descriptions: [
        {
          name: "gothitelle_gen_5",
          resource_uri: "/api/v1/description/6184/",
        },
      ],
      types: [{ name: "psychic" }],
    },
    {
      name: "Solosis",
      national_id: 577,
      descriptions: [
        {
          name: "solosis_gen_5",
          resource_uri: "/api/v1/description/6188/",
        },
      ],
      types: [{ name: "psychic" }],
    },
    {
      name: "Duosion",
      national_id: 578,
      descriptions: [
        {
          name: "duosion_gen_5",
          resource_uri: "/api/v1/description/6193/",
        },
      ],
      types: [{ name: "psychic" }],
    },
    {
      name: "Reuniclus",
      national_id: 579,
      descriptions: [
        {
          name: "reuniclus_gen_5",
          resource_uri: "/api/v1/description/6197/",
        },
      ],
      types: [{ name: "psychic" }],
    },
    {
      name: "Ducklett",
      national_id: 580,
      descriptions: [
        {
          name: "ducklett_gen_5",
          resource_uri: "/api/v1/description/6200/",
        },
      ],
      types: [{ name: "flying" }, { name: "water" }],
    },
    {
      name: "Swanna",
      national_id: 581,
      descriptions: [
        {
          name: "swanna_gen_5",
          resource_uri: "/api/v1/description/6205/",
        },
      ],
      types: [{ name: "flying" }, { name: "water" }],
    },
    {
      name: "Vanillite",
      national_id: 582,
      descriptions: [
        {
          name: "vanillite_gen_5",
          resource_uri: "/api/v1/description/6209/",
        },
      ],
      types: [{ name: "ice" }],
    },
    {
      name: "Vanillish",
      national_id: 583,
      descriptions: [
        {
          name: "vanillish_gen_5",
          resource_uri: "/api/v1/description/6214/",
        },
      ],
      types: [{ name: "ice" }],
    },
    {
      name: "Vanilluxe",
      national_id: 584,
      descriptions: [
        {
          name: "vanilluxe_gen_5",
          resource_uri: "/api/v1/description/6217/",
        },
      ],
      types: [{ name: "ice" }],
    },
    {
      name: "Deerling",
      national_id: 585,
      descriptions: [
        {
          name: "deerling_gen_5",
          resource_uri: "/api/v1/description/6220/",
        },
      ],
      types: [{ name: "normal" }, { name: "grass" }],
    },
    {
      name: "Sawsbuck",
      national_id: 586,
      descriptions: [
        {
          name: "sawsbuck_gen_5",
          resource_uri: "/api/v1/description/6223/",
        },
      ],
      types: [{ name: "normal" }, { name: "grass" }],
    },
    {
      name: "Emolga",
      national_id: 587,
      descriptions: [
        {
          name: "emolga_gen_5",
          resource_uri: "/api/v1/description/6226/",
        },
      ],
      types: [{ name: "flying" }, { name: "electric" }],
    },
    {
      name: "Karrablast",
      national_id: 588,
      descriptions: [
        {
          name: "karrablast_gen_5",
          resource_uri: "/api/v1/description/6231/",
        },
      ],
      types: [{ name: "bug" }],
    },
    {
      name: "Escavalier",
      national_id: 589,
      descriptions: [
        {
          name: "escavalier_gen_5",
          resource_uri: "/api/v1/description/6236/",
        },
      ],
      types: [{ name: "bug" }, { name: "steel" }],
    },
    {
      name: "Foongus",
      national_id: 590,
      descriptions: [
        {
          name: "foongus_gen_5",
          resource_uri: "/api/v1/description/6240/",
        },
      ],
      types: [{ name: "poison" }, { name: "grass" }],
    },
    {
      name: "Amoonguss",
      national_id: 591,
      descriptions: [
        {
          name: "amoonguss_gen_5",
          resource_uri: "/api/v1/description/6245/",
        },
      ],
      types: [{ name: "poison" }, { name: "grass" }],
    },
    {
      name: "Frillish",
      national_id: 592,
      descriptions: [
        {
          name: "frillish_gen_5",
          resource_uri: "/api/v1/description/6250/",
        },
      ],
      types: [{ name: "ghost" }, { name: "water" }],
    },
    {
      name: "Jellicent",
      national_id: 593,
      descriptions: [
        {
          name: "jellicent_gen_5",
          resource_uri: "/api/v1/description/6253/",
        },
      ],
      types: [{ name: "ghost" }, { name: "water" }],
    },
    {
      name: "Alomomola",
      national_id: 594,
      descriptions: [
        {
          name: "alomomola_gen_5",
          resource_uri: "/api/v1/description/6256/",
        },
      ],
      types: [{ name: "water" }],
    },
    {
      name: "Joltik",
      national_id: 595,
      descriptions: [
        {
          name: "joltik_gen_5",
          resource_uri: "/api/v1/description/6261/",
        },
      ],
      types: [{ name: "bug" }, { name: "electric" }],
    },
    {
      name: "Galvantula",
      national_id: 596,
      descriptions: [
        {
          name: "galvantula_gen_5",
          resource_uri: "/api/v1/description/6264/",
        },
      ],
      types: [{ name: "bug" }, { name: "electric" }],
    },
    {
      name: "Ferroseed",
      national_id: 597,
      descriptions: [
        {
          name: "ferroseed_gen_5",
          resource_uri: "/api/v1/description/6267/",
        },
      ],
      types: [{ name: "steel" }, { name: "grass" }],
    },
    {
      name: "Ferrothorn",
      national_id: 598,
      descriptions: [
        {
          name: "ferrothorn_gen_5",
          resource_uri: "/api/v1/description/6272/",
        },
      ],
      types: [{ name: "steel" }, { name: "grass" }],
    },
    {
      name: "Klink",
      national_id: 599,
      descriptions: [
        {
          name: "klink_gen_5",
          resource_uri: "/api/v1/description/6276/",
        },
        {
          name: "klinklang_gen_5",
          resource_uri: "/api/v1/description/6284/",
        },
      ],
      types: [{ name: "steel" }],
    },
    {
      name: "Klang",
      national_id: 600,
      descriptions: [
        {
          name: "klang_gen_5",
          resource_uri: "/api/v1/description/6280/",
        },
        {
          name: "klinklang_gen_5",
          resource_uri: "/api/v1/description/6284/",
        },
      ],
      types: [{ name: "steel" }],
    },
    {
      name: "Klinklang",
      national_id: 601,
      descriptions: [
        {
          name: "klinklang_gen_5",
          resource_uri: "/api/v1/description/6284/",
        },
      ],
      types: [{ name: "steel" }],
    },
    {
      name: "Tynamo",
      national_id: 602,
      descriptions: [
        {
          name: "tynamo_gen_5",
          resource_uri: "/api/v1/description/6287/",
        },
      ],
      types: [{ name: "electric" }],
    },
    {
      name: "Eelektrik",
      national_id: 603,
      descriptions: [
        {
          name: "eelektrik_gen_5",
          resource_uri: "/api/v1/description/6290/",
        },
      ],
      types: [{ name: "electric" }],
    },
    {
      name: "Eelektross",
      national_id: 604,
      descriptions: [
        {
          name: "eelektross_gen_5",
          resource_uri: "/api/v1/description/6293/",
        },
      ],
      types: [{ name: "electric" }],
    },
    {
      name: "Elgyem",
      national_id: 605,
      descriptions: [
        {
          name: "elgyem_gen_5",
          resource_uri: "/api/v1/description/6296/",
        },
      ],
      types: [{ name: "psychic" }],
    },
    {
      name: "Beheeyem",
      national_id: 606,
      descriptions: [
        {
          name: "beheeyem_gen_5",
          resource_uri: "/api/v1/description/6299/",
        },
      ],
      types: [{ name: "psychic" }],
    },
    {
      name: "Litwick",
      national_id: 607,
      descriptions: [
        {
          name: "litwick_gen_5",
          resource_uri: "/api/v1/description/6302/",
        },
      ],
      types: [{ name: "ghost" }, { name: "fire" }],
    },
    {
      name: "Lampent",
      national_id: 608,
      descriptions: [
        {
          name: "lampent_gen_5",
          resource_uri: "/api/v1/description/6306/",
        },
      ],
      types: [{ name: "ghost" }, { name: "fire" }],
    },
    {
      name: "Chandelure",
      national_id: 609,
      descriptions: [
        {
          name: "chandelure_gen_5",
          resource_uri: "/api/v1/description/6311/",
        },
      ],
      types: [{ name: "ghost" }, { name: "fire" }],
    },
    {
      name: "Axew",
      national_id: 610,
      descriptions: [
        { name: "axew_gen_5", resource_uri: "/api/v1/description/6315/" },
      ],
      types: [{ name: "dragon" }],
    },
    {
      name: "Fraxure",
      national_id: 611,
      descriptions: [
        {
          name: "fraxure_gen_5",
          resource_uri: "/api/v1/description/6320/",
        },
      ],
      types: [{ name: "dragon" }],
    },
    {
      name: "Haxorus",
      national_id: 612,
      descriptions: [
        {
          name: "haxorus_gen_5",
          resource_uri: "/api/v1/description/6325/",
        },
      ],
      types: [{ name: "dragon" }],
    },
    {
      name: "Cubchoo",
      national_id: 613,
      descriptions: [
        {
          name: "cubchoo_gen_5",
          resource_uri: "/api/v1/description/6330/",
        },
      ],
      types: [{ name: "ice" }],
    },
    {
      name: "Beartic",
      national_id: 614,
      descriptions: [
        {
          name: "beartic_gen_5",
          resource_uri: "/api/v1/description/6335/",
        },
      ],
      types: [{ name: "ice" }],
    },
    {
      name: "Cryogonal",
      national_id: 615,
      descriptions: [
        {
          name: "cryogonal_gen_5",
          resource_uri: "/api/v1/description/6340/",
        },
      ],
      types: [{ name: "ice" }],
    },
    {
      name: "Shelmet",
      national_id: 616,
      descriptions: [
        {
          name: "shelmet_gen_5",
          resource_uri: "/api/v1/description/6345/",
        },
      ],
      types: [{ name: "bug" }],
    },
    {
      name: "Accelgor",
      national_id: 617,
      descriptions: [
        {
          name: "accelgor_gen_5",
          resource_uri: "/api/v1/description/6350/",
        },
      ],
      types: [{ name: "bug" }],
    },
    {
      name: "Stunfisk",
      national_id: 618,
      descriptions: [
        {
          name: "stunfisk_gen_5",
          resource_uri: "/api/v1/description/6354/",
        },
      ],
      types: [{ name: "ground" }, { name: "electric" }],
    },
    {
      name: "Mienfoo",
      national_id: 619,
      descriptions: [
        {
          name: "mienfoo_gen_5",
          resource_uri: "/api/v1/description/6359/",
        },
      ],
      types: [{ name: "fighting" }],
    },
    {
      name: "Mienshao",
      national_id: 620,
      descriptions: [
        {
          name: "mienshao_gen_5",
          resource_uri: "/api/v1/description/6364/",
        },
      ],
      types: [{ name: "fighting" }],
    },
    {
      name: "Druddigon",
      national_id: 621,
      descriptions: [
        {
          name: "druddigon_gen_5",
          resource_uri: "/api/v1/description/6368/",
        },
      ],
      types: [{ name: "dragon" }],
    },
    {
      name: "Golett",
      national_id: 622,
      descriptions: [
        {
          name: "golett_gen_5",
          resource_uri: "/api/v1/description/6373/",
        },
      ],
      types: [{ name: "ground" }, { name: "ghost" }],
    },
    {
      name: "Golurk",
      national_id: 623,
      descriptions: [
        {
          name: "golurk_gen_5",
          resource_uri: "/api/v1/description/6378/",
        },
      ],
      types: [{ name: "ground" }, { name: "ghost" }],
    },
    {
      name: "Pawniard",
      national_id: 624,
      descriptions: [
        {
          name: "pawniard_gen_5",
          resource_uri: "/api/v1/description/6382/",
        },
      ],
      types: [{ name: "steel" }, { name: "dark" }],
    },
    {
      name: "Bisharp",
      national_id: 625,
      descriptions: [
        {
          name: "bisharp_gen_5",
          resource_uri: "/api/v1/description/6387/",
        },
      ],
      types: [{ name: "steel" }, { name: "dark" }],
    },
    {
      name: "Bouffalant",
      national_id: 626,
      descriptions: [
        {
          name: "bouffalant_gen_5",
          resource_uri: "/api/v1/description/6390/",
        },
      ],
      types: [{ name: "normal" }],
    },
    {
      name: "Rufflet",
      national_id: 627,
      descriptions: [
        {
          name: "rufflet_gen_5",
          resource_uri: "/api/v1/description/6393/",
        },
      ],
      types: [{ name: "normal" }, { name: "flying" }],
    },
    {
      name: "Braviary",
      national_id: 628,
      descriptions: [
        {
          name: "braviary_gen_5",
          resource_uri: "/api/v1/description/6398/",
        },
      ],
      types: [{ name: "normal" }, { name: "flying" }],
    },
    {
      name: "Vullaby",
      national_id: 629,
      descriptions: [
        {
          name: "vullaby_gen_5",
          resource_uri: "/api/v1/description/6401/",
        },
      ],
      types: [{ name: "flying" }, { name: "dark" }],
    },
    {
      name: "Mandibuzz",
      national_id: 630,
      descriptions: [
        {
          name: "mandibuzz_gen_5",
          resource_uri: "/api/v1/description/6405/",
        },
      ],
      types: [{ name: "flying" }, { name: "dark" }],
    },
    {
      name: "Heatmor",
      national_id: 631,
      descriptions: [
        {
          name: "heatmor_gen_5",
          resource_uri: "/api/v1/description/6408/",
        },
      ],
      types: [{ name: "fire" }],
    },
    {
      name: "Durant",
      national_id: 632,
      descriptions: [
        {
          name: "durant_gen_5",
          resource_uri: "/api/v1/description/6413/",
        },
      ],
      types: [{ name: "bug" }, { name: "steel" }],
    },
    {
      name: "Deino",
      national_id: 633,
      descriptions: [
        {
          name: "deino_gen_5",
          resource_uri: "/api/v1/description/6418/",
        },
      ],
      types: [{ name: "dragon" }, { name: "dark" }],
    },
    {
      name: "Zweilous",
      national_id: 634,
      descriptions: [
        {
          name: "zweilous_gen_5",
          resource_uri: "/api/v1/description/6422/",
        },
      ],
      types: [{ name: "dragon" }, { name: "dark" }],
    },
    {
      name: "Hydreigon",
      national_id: 635,
      descriptions: [
        {
          name: "hydreigon_gen_5",
          resource_uri: "/api/v1/description/6427/",
        },
      ],
      types: [{ name: "dragon" }, { name: "dark" }],
    },
    {
      name: "Larvesta",
      national_id: 636,
      descriptions: [
        {
          name: "larvesta_gen_5",
          resource_uri: "/api/v1/description/6431/",
        },
      ],
      types: [{ name: "bug" }, { name: "fire" }],
    },
    {
      name: "Volcarona",
      national_id: 637,
      descriptions: [
        {
          name: "volcarona_gen_5",
          resource_uri: "/api/v1/description/6436/",
        },
      ],
      types: [{ name: "bug" }, { name: "fire" }],
    },
    {
      name: "Cobalion",
      national_id: 638,
      descriptions: [
        {
          name: "cobalion_gen_5",
          resource_uri: "/api/v1/description/6439/",
        },
      ],
      types: [{ name: "fighting" }, { name: "steel" }],
    },
    {
      name: "Terrakion",
      national_id: 639,
      descriptions: [
        {
          name: "terrakion_gen_5",
          resource_uri: "/api/v1/description/6442/",
        },
      ],
      types: [{ name: "fighting" }, { name: "rock" }],
    },
    {
      name: "Virizion",
      national_id: 640,
      descriptions: [
        {
          name: "virizion_gen_5",
          resource_uri: "/api/v1/description/6445/",
        },
      ],
      types: [{ name: "fighting" }, { name: "grass" }],
    },
    {
      name: "Tornadus-incarnate",
      national_id: 641,
      descriptions: [
        {
          name: "tornadus-incarnate_gen_5",
          resource_uri: "/api/v1/description/6448/",
        },
      ],
      types: [{ name: "flying" }],
    },
    {
      name: "Thundurus-incarnate",
      national_id: 642,
      descriptions: [
        {
          name: "thundurus-incarnate_gen_5",
          resource_uri: "/api/v1/description/6451/",
        },
      ],
      types: [{ name: "flying" }, { name: "electric" }],
    },
    {
      name: "Reshiram",
      national_id: 643,
      descriptions: [
        {
          name: "reshiram_gen_5",
          resource_uri: "/api/v1/description/6454/",
        },
      ],
      types: [{ name: "fire" }, { name: "dragon" }],
    },
    {
      name: "Zekrom",
      national_id: 644,
      descriptions: [
        {
          name: "zekrom_gen_5",
          resource_uri: "/api/v1/description/6457/",
        },
      ],
      types: [{ name: "electric" }, { name: "dragon" }],
    },
    {
      name: "Landorus-incarnate",
      national_id: 645,
      descriptions: [
        {
          name: "landorus-incarnate_gen_5",
          resource_uri: "/api/v1/description/6460/",
        },
      ],
      types: [{ name: "flying" }, { name: "ground" }],
    },
    {
      name: "Kyurem",
      national_id: 646,
      descriptions: [
        {
          name: "kyurem_gen_5",
          resource_uri: "/api/v1/description/6463/",
        },
      ],
      types: [{ name: "ice" }, { name: "dragon" }],
    },
    {
      name: "Keldeo-ordinary",
      national_id: 647,
      descriptions: [
        {
          name: "keldeo-ordinary_gen_5",
          resource_uri: "/api/v1/description/6466/",
        },
      ],
      types: [{ name: "fighting" }, { name: "water" }],
    },
    {
      name: "Meloetta-aria",
      national_id: 648,
      descriptions: [
        {
          name: "meloetta-aria_gen_5",
          resource_uri: "/api/v1/description/6469/",
        },
      ],
      types: [{ name: "normal" }, { name: "psychic" }],
    },
    {
      name: "Genesect",
      national_id: 649,
      descriptions: [
        {
          name: "genesect_gen_5",
          resource_uri: "/api/v1/description/6472/",
        },
      ],
      types: [{ name: "bug" }, { name: "steel" }],
    },
];

/* A test to make sure the array and objects are working
This will print the 4th pokemon's name and it's first type */
document.write(pokemonList[3].name+' '+pokemonList[3].types[0].name);