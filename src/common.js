const endPoint = "https://opendata.resas-portal.go.jp/api/";

async function getApi() {
  const headerJson = {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "X-API-KEY": "xxxxxxx",
    },
  };
  const uri = "v1/prefectures";
  const response = await fetch(endPoint + uri, headerJson);
  if (response.ok) {
    return await response.json();
  }
}

export { getApi };
