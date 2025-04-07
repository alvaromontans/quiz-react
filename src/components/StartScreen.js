import { useQuiz } from "../hooks/useQuiz";

/**
 * Componente que muestra la pantalla de inicio del cuestionario.
 *
 * @param {Object} props - Objeto con las propiedades del componente.
 * @param {number} props.numQuestions - Número de preguntas en el cuestionario.
 * @returns {JSX.Element} Un JSX.Element que representa la pantalla de inicio.
 */
function StartScreen({ numQuestions }) {
    const { dispatch } = useQuiz();

    return (
        <div className="start">
            <h2>Cuestionario React</h2>
            <h3>{numQuestions} preguntas para probar tus conocimientos de React</h3>
            <button
                className="btn btn-ui"
                onClick={() => dispatch({ type: "start" })}
            >
                Iniciar
            </button>
        </div>
    )
}

export default StartScreen;
