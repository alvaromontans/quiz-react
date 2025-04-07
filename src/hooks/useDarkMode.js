import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";

/**
 * Hook que permite acceder al estado del tema oscuro.
 *
 * Si se llama fuera de DarkModeProvider, lanza un error.
 *
 * @returns {Object} Un objeto con las propiedades "isDarkMode" y "toggleDarkMode".
 */
function useDarkMode() {
    const context = useContext(DarkModeContext);

    if (context === undefined)
        throw new Error(
            "DarkModeContext no puede ser utilizado fuera de DarkModeProvider"
        );

    return context;
}

export { useDarkMode };