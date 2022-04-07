import { createContext, Dispatch } from "react";
import { city } from "./data/city";
import { cityI, data, modelsTriviaI, } from "./models/models";
import { TriviaData } from "./data/trivia";

type dataContext = {
    data: data[];
    city: cityI;
    trivia: modelsTriviaI;
}

export const initialState: dataContext = {
    data: [],
    city: city,
    trivia: TriviaData
};

interface Ireducer {
    type: string;
    payload?: any;
}

export function reducer(state: dataContext, action: Ireducer) {
    switch (action.type) {
        case "TRIVIA":
            return { data: [...state.data], trivia: action.payload, city: state.city };
        case "ADD-CITY":
            return { data: [...state.data], trivia: state.trivia, city: action.payload };
        case "ADD":
            return { data: [...state.data, action.payload], city: state.city, trivia: state.trivia };
        default:
            return { data: [], city: {}, trivia: TriviaData };
    }
};

export const AppContext = createContext<{ state: dataContext, dispatch: Dispatch<Ireducer> }>({ state: initialState, dispatch: () => undefined })