import { useContext } from "react";
import { QuizContext } from "../contexts/QuizContext";

/**
 * Hook que nos permite acceder al estado del cuestionario.
 *
 * Si se llama fuera de QuizProvider, lanza un error.
 *
 * @returns {Object} Un objeto con las propiedades del estado del cuestionario.
 */
export function useQuiz() {
    const context = useContext(QuizContext);
    if (context === undefined) {
        throw new Error("QuizContext no se puede utilizar fuera de QuizProvider");
    }
    return context;
}
