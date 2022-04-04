import { createContext, Dispatch } from "react";
import { cityI } from "./models/modelCity";
import { data } from "./models/ModelsNutrition";
import { city } from "./data/city";

type dataContext = {
    data: data[];
    city: cityI;
}

export const initialState: dataContext = {
    data: [],
    city: city
};

interface Ireducer {
    type: string;
    payload?: any;
}

export function reducer(state: dataContext, action: Ireducer) {
    switch (action.type) {
        case "ADD-CITY":
            return { data: [...state.data], city: action.payload };
        case "ADD":
            return { data: [...state.data, action.payload], city: state.city };
        default:
            return { data: [], city: {} };
    }
};

export const AppContext = createContext<{ state: dataContext, dispatch: Dispatch<Ireducer> }>({ state: initialState, dispatch: () => undefined })