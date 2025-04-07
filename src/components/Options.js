import { useQuiz } from "../hooks/useQuiz";

/**
 * Componente que muestra las opciones de una pregunta.
 *
 * @param {Object} props - Objeto con las propiedades del componente.
 * @param {Object} props.question - Objeto que contiene la pregunta actual.
 * @param {string} props.question.question - Enunciado de la pregunta.
 * @param {string[]} props.question.options - Arreglo de opciones posibles.
 * @param {number} props.question.correctOption - Opción correcta.
 *
 * @returns {JSX.Element} Un JSX.Element que representa el componente de opciones.
 */
function Options({ question }) {
    const { answer, dispatch } = useQuiz();
    const hasAnswered = answer !== null;

    return (
        <div className="options">
            {question.options.map(
                (option, index) =>
                    <button
                        className={
                            `btn btn-option ${index === answer ? "answer" : ""}
                            ${hasAnswered ?
                                index === question.correctOption ? "correct" : "wrong"
                                : ""
                            }`
                        }
                        key={option}
                        disabled={hasAnswered}
                        onClick={() => dispatch({ type: "newAnswer", payload: index })}
                    >
                        {option}
                    </button>
            )}
        </div>
    )
}

export default Options;
