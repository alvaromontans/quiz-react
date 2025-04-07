import { useQuiz } from "../hooks/useQuiz";

/**
 * Componente que muestra un botón de "Siguiente" o "Acabar test" dependiendo
 * del estado del cuestionario.
 *
 * @param {Object} props - Objeto con las propiedades del componente.
 * @param {number} props.numQuestions - Número de preguntas en el cuestionario.
 * @returns {JSX.Element} Un JSX.Element que representa el botón.
 */
function NextButton({ numQuestions }) {
    const { answer, index, dispatch } = useQuiz();

    // Si no se ha respondido a la pregunta actual, no se muestra el botón.
    if (answer === null) return null;

    return (
        <button
            className="btn btn-ui"
            onClick={() => dispatch({ type: index < numQuestions - 1 ? "nextQuestion" : "finish" })}
        >
            {index < numQuestions - 1 ? "Siguiente" : "Acabar test"}
        </button>
    );
}

export default NextButton;
