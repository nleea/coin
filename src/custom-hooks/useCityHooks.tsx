import { useCallback, useState, useContext } from "react";
import { fetch_hook } from "../axios";
import { API_CITY } from "../util/config";
import { AppContext } from "../context/context";


export const useCityHooks = () => {
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState<unknown>(Error(""));
    const { dispatch } = useContext(AppContext);
    
    const fetchCity = useCallback(async (city: string) => {
        setLoading(true);
        try {
            const response = await fetch_hook.get(API_CITY + city);
            const data = response.data[0];
            
            dispatch({ type: "ADD-CITY", payload: data });
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }, [dispatch]);

    return { fetchCity, isLoading, isError }
};