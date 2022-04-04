import { createContext, Dispatch } from "react";

type data = {
    [x: string]: any;
}

type city = {
    name: string,
    latitude: number,
    longitude: number,
    country: string,
    population: number,
    is_capital: boolean
}

type dataContext = {
    data: data[];
    city: city;
}

export const initialState: dataContext = {
    data: [],
    city: { country: "", is_capital: false, latitude: 0, longitude: 0, name: "", population: 0 }
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