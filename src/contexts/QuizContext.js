import { createContext, useEffect, useReducer } from "react";

const QuizContext = createContext();
const initialState = {
    questions: [],
    status: "loading",
    index: 0,
    answer: null,
    points: 0,
    highscore: 0,
    secondsLeft: null
};
const SECS_PER_QUESTION = 30;


function reducer(state, action) {
    switch (action.type) {
        case "dataReceived":
            return {
                ...state,
                questions: action.payload,
                status: "ready"
            };

        case "dataFailed":
            return {
                ...state,
                status: "error"
            };

        case "start":
            return {
                ...state,
                status: "active",
                secondsLeft: state.questions.length * SECS_PER_QUESTION
            };

        case "newAnswer":
            const question = state.questions.at(state.index);

            return {
                ...state,
                answer: action.payload,
                points: action.payload === question.correctOption
                    ? state.points + question.points : state.points
            };

        case "nextQuestion":
            return {
                ...state,
                index: state.index + 1,
                answer: null
            };

        case "finish":
            return {
                ...state,
                status: "finished",
                highscore: state.points > state.highscore ? state.points : state.highscore
            };

        case "restart":
            return {
                ...initialState,
                questions: state.questions,
                status: "ready"
            };

        case "tick":
            return {
                ...state,
                secondsLeft: state.secondsLeft - 1,
                status: state.secondsLeft === 0 ? "finished" : state.status
            };

        default:
            throw new Error("Acción desconocida");
    }
}

function QuizProvider({ children }) {
    const [{ questions, status, index, answer, points, highscore, secondsLeft }, dispatch]
        = useReducer(reducer, initialState);

    useEffect(function () {
        fetch("http://localhost:8000/questions")
            .then(res => res.json())
            .then(data => dispatch({ type: "dataReceived", payload: data }))
            .catch(() => dispatch({ type: "dataFailed" }));
    }, []);

    return (
        <QuizContext.Provider value={{
            questions, status, index, answer, points, highscore, secondsLeft, dispatch
        }}>
            {children}
        </QuizContext.Provider>
    );
}

export { QuizContext, QuizProvider };