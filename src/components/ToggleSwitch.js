import { RxMoon, RxSun } from "react-icons/rx";
import { useDarkMode } from "../hooks/useDarkMode";

/**
 * Componente que muestra un interruptor de tema claro/oscuro.
 *
 * @returns {JSX.Element} Un JSX.Element que representa el interruptor.
 */
export default function ToggleSwitch() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    /**
     * Función que se encarga de cambiar el estado del tema al hacer click en el
     * interruptor.
     *
     * @param {boolean} prevState - El estado actual del tema.
     * @returns {boolean} El nuevo estado del tema.
     */
    function handleOnClick() {
        toggleDarkMode((prevState) => !prevState);
    }

    return (
        <label className={`toggle-switch ${isDarkMode ? "off" : "on"}`}>
            {/* Icono de sol que se muestra cuando el tema es claro. */}
            <RxSun style={{ height: "20px", width: "20px" }} color="orange" onClick={handleOnClick} />
            {/* Icono de luna que se muestra cuando el tema es oscuro. */}
            <RxMoon style={{ height: "20px", width: "20px" }} color="yellow" onClick={handleOnClick} />
            <span className="slider">
                {/* Checkbox que se encarga de cambiar el estado del tema. */}
                <input
                    id="checkbox"
                    type="checkbox"
                />
            </span>
        </label>
    );
}
