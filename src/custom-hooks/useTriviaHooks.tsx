import { useCallback, useState, useContext } from "react";
import { fetch_hook } from "../axios";
import { API_TRIVIA2 } from "../util/config";
import { AppContext } from "../context/context";
import { modelsTriviaI } from "../context/models/models";

export const useTriviaHooks = () => {
    const [isLoading, setLoading] = useState(false);
    const { dispatch } = useContext(AppContext);
    const [isError, setError] = useState<unknown>(Error("Error"));
    const fetchtrivia = useCallback(async (category: string, difficulty: string) => {
        try {
            const object: modelsTriviaI = { answer: '', category: '', question: '', answers: [] }
            setLoading(true);
            const response = await (await fetch_hook(API_TRIVIA2 + category + '&difficulty=' + difficulty)).data[0];
            object['category'] = response['category'];
            object['answer'] = response['correctAnswer'];
            object['question'] = response['question'];
            object['answers'] = [...response['incorrectAnswers'], response['correctAnswer']].sort(function () { return Math.random() - 0.5 });
            dispatch({ type: "TRIVIA", payload: object });
            setLoading(false);
        } catch (error) {
            setError(error);
        }
    }, [dispatch]);

    return { fetchtrivia, isLoading, isError };
};