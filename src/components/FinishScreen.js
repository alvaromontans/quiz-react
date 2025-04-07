import { useQuiz } from "../hooks/useQuiz";

/**
 * Componente que se encarga de mostrar el resultado final del cuestionario y
 * permitir al usuario reiniciar el test.
 *
 * @param {Object} props - Objeto con las propiedades del componente.
 * @param {number} props.maxPoints - Número de puntos que se pueden obtener
 *                                   en el cuestionario.
 * @returns {JSX.Element} Un JSX.Element que representa la pantalla de
 *                         resultado final.
 */
function FinishScreen({ maxPoints }) {
    const { points, highscore, dispatch } = useQuiz();

    // Calculamos el porcentaje de puntos obtenidos.
    const percentage = (points / maxPoints) * 100;

    return (
        <>
            <p className="result">
                Has hecho <strong>{points}</strong> puntos de {maxPoints} posibles.
                ({Math.ceil(percentage)}%)
            </p>
            <p className="highscore">Puntuación más alta: {highscore} puntos</p>
            <button
                className="btn btn-ui"
                onClick={() => dispatch({ type: "restart" })}
            >
                Reiniciar quiz
            </button>
        </>
    )
}

export default FinishScreen;
