import axios, { AxiosPromise } from "axios";

const api_key = process.env.REACT_APP_API_KEY;
const api = axios.create({
    baseURL: `https://api.nasa.gov`,
    params: {
        api_key: api_key,
    },
});

interface INasaApi {
    apod: () => AxiosPromise;
    pic: (date: string) => AxiosPromise;
    insight: () => AxiosPromise;
}

export const nasaApi: INasaApi = {
    apod: () => api.get("/planetary/apod"),
    pic: (date: string) =>
        api.get("/planetary/apod/", {
            params: {
                date: `${date}`,
            },
        }),
    insight: () =>
        api.get("/insight_weather/", {
            params: {
                feedtype: "json",
                ver: "1.0",
            },
        }),
};
export default api;
