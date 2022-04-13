
export type modelsTriviaI = {
    category: string;
    question: string;
    answer: string;
    answers: string[]
}

export type data = {
    [x: string]: any;
}

export type cityI = {
    name: string,
    latitude: number,
    longitude: number,
    country: string,
    population: number,
    is_capital: boolean,
    wind_speed: number,
    wind_degrees: number,
    temp: number,
    humidity: number,
    sunset: number,
    min_temp: number,
    cloud_pct: number,
    feels_like: number,
    sunrise: number,
    max_temp: number
}