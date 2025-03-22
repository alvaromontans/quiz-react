import { useQuiz } from "../hooks/useQuiz";

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
