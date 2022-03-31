import Axios from "axios";
import { API_NINJA_KEY } from "./util/config";

const fetch_hook = Axios.create({ headers: { "X-Api-Key": API_NINJA_KEY } });

export { fetch_hook };