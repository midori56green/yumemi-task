import { config } from "./apikey.js";
const endPoint = "https://opendata.resas-portal.go.jp/api/";
const apiKey = config.apikey;

async function getApi() {
  const headerJson = {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "X-API-KEY": apiKey,
    },
  };
  const uri = "v1/prefectures";
  const response = await fetch(endPoint + uri, headerJson);
  if (response.ok) {
    const api = await response.json();
    return api.result;
  }
}

export { getApi };
