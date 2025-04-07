import { useQuiz } from "../hooks/useQuiz";

/**
 * Componente que muestra el progreso en el cuestionario.
 *
 * @param {Object} props - Objeto con las propiedades del componente.
 * @param {number} props.numQuestions - Número de preguntas en el cuestionario.
 * @param {number} props.maxPoints - Número de puntos que se pueden obtener
 *                                   en el cuestionario.
 *
 * @returns {JSX.Element} Un JSX.Element que representa el componente de
 *                         progreso.
 */
function Progress({ numQuestions, maxPoints }) {
    const { index, points, answer } = useQuiz();

    // Mostramos el número de pregunta actual y el número de puntos
    // que se han obtenido hasta el momento.
    return (
        <header className="progress">
            <progress max={numQuestions} value={index + Number(answer !== null)} />
            <p>Pregunta <strong>{index + 1}</strong> / {numQuestions}</p>
            <p><strong>{points}</strong> / {maxPoints}</p>
        </header>
    );
}

export default Progress;
