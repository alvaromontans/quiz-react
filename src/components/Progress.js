import { useQuiz } from "../hooks/useQuiz";

function Progress({ numQuestions, maxPoints }) {
    const { index, points, answer } = useQuiz();

    return (
        <header className="progress">
            <progress max={numQuestions} value={index + Number(answer !== null)} />
            <p>Pregunta <strong>{index + 1}</strong> / {numQuestions}</p>
            <p><strong>{points}</strong> / {maxPoints}</p>
        </header>
    )
}

export default Progress;
