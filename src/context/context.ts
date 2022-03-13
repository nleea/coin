import { createContext, Dispatch } from "react";

type data = {
    [x: string]: any;
}

type Inutrition = {
    data: data[];
}

export const initialState = {
    data: []
};

interface Ireducer {
    type: string;
    payload?: any;
}

export function reducer(state: Inutrition, action: Ireducer) {
    switch (action.type) {
        case "ADD":
            return { data: [...state.data, action.payload] };
        default:
            return { data: [] };
    }
};


export const AppContext = createContext<{ state: Inutrition, dispatch: Dispatch<Ireducer> }>({ state: initialState, dispatch: () => undefined })