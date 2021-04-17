const BASE_URL = "https://api.discogs.com";
const AUTH_TOKEN = "sVfXsvvbEIllDOIgsiKaZXDHdXSEHZvVEHkaCtbY";

const completeUrl = path => {
  return `${BASE_URL}${path}`;
};

const makeFetchOptions = () => {
  const fetchOptions = {
    headers: {
      Authorization: `Discogs token=${AUTH_TOKEN}`
    }
  };

  return fetchOptions;
};

export const makeFetch = async path => {
  const url = completeUrl(path);
  const fetchOptions = makeFetchOptions();
  const resp = await fetch(url, fetchOptions);
  if (resp.ok) return resp.json();
  const err = resp.statusText;
  throw new Error(err);
};