const createMapsUrl = (name) => {
    return `https://www.google.com/maps/search/?${generateSearchString({api: "1", query: name})}`
}
const generateSearchString = (params) => {
    let searchString = "";
    for (const param in params) {
        if (searchString !== "") {
            searchString = searchString + "&";
        }
        searchString =
            searchString + param + "=" + encodeURIComponent(params[param]);
    }
    return searchString;
};
export {createMapsUrl}
