import { createContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext({
    isDarkMode: false,
    toggleDarkMode: () => { },
});

/**
 * Componente que proporciona el contexto de tema oscuro a los componentes hijos.
 *
 * @param {Object} props - Objeto con las propiedades del componente.
 * @param {JSX.Element} props.children - Elementos JSX que se van a renderizar
 * dentro del contexto.
 * @returns {JSX.Element} Un JSX.Element que representa el contexto de tema
 * oscuro.
 */
function DarkModeProvider({ children }) {
    /**
     * Estado que indica si el tema oscuro está activado o no.
     */
    const [isDarkMode, setIsDarkMode] = useLocalStorageState(
        window.matchMedia("(prefers-color-scheme: dark)").matches,
        "isDarkMode"
    );

    /**
     * Efecto que cambia la clase del elemento raíz dependiendo del tema
     * actual.
     */
    useEffect(
        function () {
            if (isDarkMode) {
                document.documentElement.classList.add("dark-mode");
                document.documentElement.classList.remove("light-mode");
            } else {
                document.documentElement.classList.add("light-mode");
                document.documentElement.classList.remove("dark-mode");
            }
        },
        [isDarkMode]
    );

    /**
     * Función que cambia el estado del tema oscuro.
     */
    function toggleDarkMode() {
        setIsDarkMode((isDark) => !isDark);
    }

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
}

export { DarkModeContext, DarkModeProvider };
