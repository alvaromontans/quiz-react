import { useQuiz } from "../hooks/useQuiz";

function NextButton({ numQuestions }) {
    const { answer, index, dispatch } = useQuiz();

    if (answer === null) {
        return null;
    }

    if (index < numQuestions - 1) {
        return (
            <button
                className="btn btn-ui"
                onClick={() => dispatch({ type: "nextQuestion" })}
            >
                Siguiente
            </button>
        );
    }

    if (index === numQuestions - 1) {
        return (
            <button
                className="btn btn-ui"
                onClick={() => dispatch({ type: "finish" })}
            >
                Acabar test
            </button>
        );
    }
}

export default NextButton;
