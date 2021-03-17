import { makeFetch } from "./utils";

const USER = "exalmusic";
const PUBLIC_FOLDER = "0";

export const fetchRecords = () =>
  makeFetch(`/users/${USER}/collection/folders/${PUBLIC_FOLDER}/releases`);
export const fetchRecord = id => makeFetch(`/releases/${id}`);
export const fetchArtist = id => makeFetch(`/artists/${id}`);
