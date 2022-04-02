import { useCallback, useState } from "react";
import { fetch_hook } from "../axios";
import { API_CITY } from "../util/config";

interface cityI {
    name: string
    latitude: number
    longitude: number
    country: string
    population: number
    is_capital: false
}

export const useCityHooks = () => {
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState<unknown>(Error(""));
    const [state, setState] = useState<cityI>({ name: "", latitude: 0, longitude: 0, country: "", is_capital: false, population: 0 });
    const fetchCity = useCallback(async (city: string) => {
        setLoading(true);
        try {
            const response = await fetch_hook.get(API_CITY + city);
            const data = response.data[0];
            setState(data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }, []);

    return { fetchCity, isLoading, isError, state }
};