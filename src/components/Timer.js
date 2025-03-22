import { useEffect } from "react";
import { useQuiz } from "../hooks/useQuiz";

function Timer() {
    const { secondsLeft, dispatch } = useQuiz();

    const mins = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;

    useEffect(function () {
        const id = setInterval(function () {
            dispatch({ type: "tick" });
        }, 1000);

        return () => clearInterval(id);
    }, [dispatch]);

    return (
        <div className="timer">
            {mins < 10 && "0"}{mins}:{seconds < 10 && "0"}{seconds}
        </div>
    )
}

export default Timer;
