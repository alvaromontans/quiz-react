import { useContext } from "react";
import { QuizContext } from "../contexts/QuizContext";

export function useQuiz() {
    const context = useContext(QuizContext);
    if (context === undefined) {
        throw new Error("QuizContext no se puede utilizar fuera de QuizProvider");
    }
    return context;
}