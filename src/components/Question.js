import { useQuiz } from "../hooks/useQuiz";
import Options from "./Options";

/**
 * Componente que muestra una pregunta del cuestionario.
 *
 * @returns {JSX.Element} Un JSX.Element que representa el componente de pregunta.
 */
function Question() {
    const { questions, index } = useQuiz();
    const question = questions[index];

    return (
        <div>
            {/* Mostramos el enunciado de la pregunta */}
            <h4>{question.question}</h4>
            {/* Mostramos las opciones de la pregunta */}
            <Options question={question} />
        </div>
    );
}

export default Question;
