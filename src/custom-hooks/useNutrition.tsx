import { useCallback, useState, useContext } from "react";
import { API_NINJA_KEY, API_PEXELS_PHOTO, API_PEXELS_KEY } from "../util/config";
import { AppContext } from "../context/context";
import Axios from "axios";

interface props {
    url: string;
    complement: any;
}

export const GetNutritionHooks = () => {
    const [isLoading, setloading] = useState(false);
    const [error, setError] = useState<any>();
    const { dispatch } = useContext(AppContext);
    const FetchNutrition = useCallback(async (props: props) => {
        try {
            setloading(true);
            const resp = await Axios.get(props.url + props.complement, {
                headers: {
                    "X-Api-Key": API_NINJA_KEY
                }
            });
            const respPhoto = await Axios.get(API_PEXELS_PHOTO + "?query=" + props.complement, {
                headers: {
                    "Authorization": API_PEXELS_KEY
                }
            });
            const responsePhoto = respPhoto.data.photos[0].src.large;
            const response = resp.data;
            dispatch({ type: "ADD", payload: { ...response[0], url: responsePhoto } });
            setloading(false);
        } catch (error) {
            setError(error);
        }
    }, [dispatch]);
    return { FetchNutrition, isLoading, error }
};