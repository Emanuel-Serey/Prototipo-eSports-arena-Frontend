const torneos = [
    {
        nombre: "Arena Masters",
        juego: "Valorant",
        estado: "Abierto",
        cupoMaximo: 16,
        inscritos: 10,
        cierreInscripcion: "2026-09-05"
    },
    {
        nombre: "Legends Cup",
        juego: "League of Legends",
        estado: "Abierto",
        cupoMaximo: 10,
        inscritos: 6,
        cierreInscripcion: "2026-09-10"
    },
    {
        nombre: "Rocket Championship",
        juego: "Rocket League",
        estado: "En curso",
        cupoMaximo: 12,
        inscritos: 12,
        cierreInscripcion: "2026-08-25"
    }
];

const detalleTorneo = {
    nombre: "Legends Cup",
    juego: "League of Legends",
    estado: "En curso",
    formato: "BO3",
    cupoMaximo: 8,
    inscritos: 8,
    cierreInscripcion: "2026-09-10",

    participantes: [
        "T1",
        "Gen.G",
        "G2 Esports",
        "Bilibili Gaming"
    ],

    partidas: [
        {
            ronda: "Jornada 1",
            equipo1: "T1",
            equipo2: "G2 Esports",
            horario: "2026-09-15 18:00",
            estado: "Finalizada",
            resultado: "2 - 0"
        },
        {
            ronda: "Jornada 1",
            equipo1: "Gen.G",
            equipo2: "Bilibili Gaming",
            horario: "2026-09-15 20:00",
            estado: "Finalizada",
            resultado: "2 - 1"
        },
        {
            ronda: "Jornada 2",
            equipo1: "Gen.G",
            equipo2: "T1",
            horario: "2026-09-18 18:00",
            estado: "Finalizada",
            resultado: "2 - 1"
        },
        {
            ronda: "Jornada 2",
            equipo1: "Bilibili Gaming",
            equipo2: "G2 Esports",
            horario: "2026-09-18 20:00",
            estado: "Finalizada",
            resultado: "2 - 0"
        },
        {
            ronda: "Jornada 3",
            equipo1: "T1",
            equipo2: "Bilibili Gaming",
            horario: "2026-09-21 18:00",
            estado: "Programada",
            resultado: "-"
        },
        {
            ronda: "Jornada 3",
            equipo1: "Gen.G",
            equipo2: "G2 Esports",
            horario: "2026-09-21 20:00",
            estado: "Programada",
            resultado: "-"
        }
    ],

    clasificacion: [
        {
            posicion: 1,
            equipo: "Gen.G",
            jugados: 2,
            ganados: 2,
            perdidos: 0,
            diferenciaMapas: 2,
            puntos: 6
        },
        {
            posicion: 2,
            equipo: "T1",
            jugados: 2,
            ganados: 1,
            perdidos: 1,
            diferenciaMapas: 1,
            puntos: 3
        },
        {
            posicion: 3,
            equipo: "Bilibili Gaming",
            jugados: 2,
            ganados: 1,
            perdidos: 1,
            diferenciaMapas: 1,
            puntos: 3
        },
        {
            posicion: 4,
            equipo: "G2 Esports",
            jugados: 2,
            ganados: 0,
            perdidos: 2,
            diferenciaMapas: -4,
            puntos: 0
        }
    ],

    premios: [
        {
            posicion: 1,
            premio: "$500.000"
        },
        {
            posicion: 2,
            premio: "$250.000"
        },
        {
            posicion: 3,
            premio: "$100.000"
        }
    ]
};