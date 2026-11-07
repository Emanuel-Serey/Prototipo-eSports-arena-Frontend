import {
    API_URL,
    obtenerHeadersAutenticados
} from "./authService.js";

import {
    perfilJugador
} from "../data/datos.js";


export async function obtenerPerfilJugador() {

    const response = await fetch(
        `${API_URL}/api/usuarios/me`,
        {
            method: "GET",
            headers: obtenerHeadersAutenticados()
        }
    );

    if (!response.ok) {

        if (response.status === 401) {
            throw new Error(
                "Tu sesión ha expirado. Inicia sesión nuevamente."
            );
        }

        if (response.status === 403) {
            throw new Error(
                "No tienes permisos para consultar este perfil."
            );
        }

        throw new Error(
            "No se pudo cargar el perfil del jugador."
        );
    }

    const usuarioBackend = await response.json();

    return {

        usuario: {
            nombre: usuarioBackend.nombre,
            apodo: usuarioBackend.nickname,
            correo: usuarioBackend.email
        },

        /*
         * Temporalmente dejamos esta parte simulada.
         * Después conectaremos equipos, torneos,
         * estadísticas y sanciones reales.
         */
        perfil: perfilJugador

    };
}