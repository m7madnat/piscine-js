async function getJSON(path, params = {}) {
  let url;
  url =
    path +
    "?" +
    Object.keys(params)
      .map((key) => `${key}=${params[key].toString().replace(" ", "+")}`)
      .join("&");

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`${response.statusText}`);
    }
    const json = await response.json();
    if (json.error) {
      throw new Error(json.error);
    }
    return json.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
// getJSON("/test", { query: "hello world", b: 5 });
