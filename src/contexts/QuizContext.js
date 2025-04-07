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


/**
 * Reducer para el estado del cuestionario.
 *
 * @param {Object} state - El estado actual del cuestionario.
 * @param {Object} action - La acción que se debe realizar en el estado.
 * @returns {Object} El estado resultante después de aplicar la acción.
 */
function reducer(state, action) {
    switch (action.type) {
        /**
         * Se ha recibido el cuestionario desde el servidor.
         * Se actualiza el estado con la lista de preguntas y se
         * cambia el estado a "ready".
         *
         * @param {Array} action.payload - El cuestionario recibido.
         */
        case "dataReceived":
            return {
                ...state,
                questions: action.payload,
                status: "ready"
            };

        /**
         * Ha fallado la recepción del cuestionario desde el servidor.
         * Se cambia el estado a "error".
         */
        case "dataFailed":
            return {
                ...state,
                status: "error"
            };

        /**
         * Se ha pulsado el botón de inicio.
         * Se cambia el estado a "active" y se establece el
         * tiempo límite para cada pregunta.
         */
        case "start":
            return {
                ...state,
                status: "active",
                secondsLeft: state.questions.length * SECS_PER_QUESTION
            };

        /**
         * Se ha pulsado una respuesta para una pregunta.
         * Se actualiza el estado con la respuesta y se
         * actualiza el puntaje según sea correcta o no.
         *
         * @param {number} action.payload - La respuesta seleccionada.
         */
        case "newAnswer":
            const question = state.questions.at(state.index);

            return {
                ...state,
                answer: action.payload,
                points: action.payload === question.correctOption
                    ? state.points + question.points : state.points
            };

        /**
         * Se ha pulsado el botón de siguiente pregunta.
         * Se actualiza el estado con la siguiente pregunta y se
         * establece la respuesta en null.
         */
        case "nextQuestion":
            return {
                ...state,
                index: state.index + 1,
                answer: null
            };

        /**
         * Se ha terminado el cuestionario.
         * Se cambia el estado a "finished" y se actualiza el
         * puntaje máximo.
         */
        case "finish":
            return {
                ...state,
                status: "finished",
                highscore: state.points > state.highscore ? state.points : state.highscore
            };

        /**
         * Se ha pulsado el botón de reiniciar.
         * Se establece el estado en su valor inicial y se
         * guardan las preguntas en el estado.
         */
        case "restart":
            return {
                ...initialState,
                questions: state.questions,
                status: "ready"
            };

        /**
         * Se ha producido un tick en el temporizador.
         * Se actualiza el estado con el tiempo límite restante
         * y se cambia el estado a "finished" si se ha agotado
         * el tiempo.
         */
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

/**
 * Proveedor del contexto del cuestionario.
 *
 * @param {Object} props - Props del componente.
 * @param {JSX.Element} props.children - Elementos JSX que se renderizarán
 *                                      dentro del contexto.
 * @returns {JSX.Element} Un JSX.Element que contiene el contexto del
 *                        cuestionario.
 */
function QuizProvider({ children }) {
    /**
     * Estado actual del cuestionario y su dispatcher.
     *
     * @typedef {Object} State
     * @property {Array} questions - Preguntas del cuestionario.
     * @property {string} status - Estado del cuestionario.
     * @property {number} index - Índice de la pregunta actual.
     * @property {number} answer - Respuesta seleccionada para la pregunta actual.
     * @property {number} points - Puntaje actual del cuestionario.
     * @property {number} highscore - Puntaje máximo alcanzado.
     * @property {number} secondsLeft - Tiempo límite restante para la pregunta actual.
     * @property {function} dispatch - Función para cambiar el estado del cuestionario.
     */
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