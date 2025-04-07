import { useEffect } from "react";
import { useQuiz } from "../hooks/useQuiz";

/**
 * Componente que muestra el temporizador del cuestionario.
 *
 * @returns {JSX.Element} Un JSX.Element que representa el temporizador.
 */
function Timer() {
    const { secondsLeft, dispatch } = useQuiz();

    /**
     * Calcula el número de minutos y segundos restantes.
     *
     * @param {number} secondsLeft - Número de segundos restantes.
     * @returns {object} Un objeto con las propiedades "mins" y "seconds".
     */
    const calcTimeLeft = (secondsLeft) => {
        const mins = Math.floor(secondsLeft / 60);
        const seconds = secondsLeft % 60;

        return {
            mins,
            seconds
        };
    };

    const { mins, seconds } = calcTimeLeft(secondsLeft);

    useEffect(function () {
        /**
         * Función que se encarga de actualizar el estado cada segundo.
         */
        const tick = () => {
            dispatch({ type: "tick" });
        };

        /**
         * Asigna un id al intervalo para poder limpiarlo luego.
         */
        const id = setInterval(tick, 1000);

        /**
         * Limpia el intervalo cuando se desmonta el componente.
         */
        return () => clearInterval(id);
    }, [dispatch]);

    return (
        <div className="timer">
            {mins < 10 && "0"}{mins}:{seconds < 10 && "0"}{seconds}
        </div>
    )
}

export default Timer;
