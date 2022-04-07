import Axios from "axios";
import { API_NINJA_KEY } from "./util/config";
const { abort, signal } = new AbortController();
const fetch_hook = Axios.create({ headers: { "X-Api-Key": API_NINJA_KEY }, signal: signal });

export { fetch_hook, abort };