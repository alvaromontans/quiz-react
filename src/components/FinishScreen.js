import { useQuiz } from "../hooks/useQuiz";

function FinishScreen({ maxPoints }) {
    const { points, highscore, dispatch } = useQuiz();

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
