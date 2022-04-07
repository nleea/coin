import { useCallback, useState, useContext } from "react";
import { fetch_hook } from "../axios";
import { API_TRIVIA } from "../util/config";
import { AppContext } from "../context/context";

export const useTriviaHooks = () => {

    const [isLoading, setLoading] = useState(false);
    const { dispatch } = useContext(AppContext);
    const [isError, setError] = useState<unknown>(Error("Error"));
    const fetchtrivia = useCallback(async (category: string) => {
        try {
            setLoading(true);
            const response = await (await fetch_hook(API_TRIVIA + category)).data[0];
            dispatch({ type: "TRIVIA", payload: response });
            setLoading(false);
        } catch (error) {
            setError(error);
        }
    }, [dispatch]);

    return { fetchtrivia, isLoading, isError };
};