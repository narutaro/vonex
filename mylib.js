function createURLSearchParams(data) {
  const params = new URLSearchParams();
  Object.keys(data).forEach(key => params.append(key, data[key]));
  return params;
}
   
function findNameById(id, items) {
  var foundItem = items.find((item) => {
    return (item.id === id);
  });
  if (foundItem) {
    console.log(id + " = " + foundItem.id + " > " + foundItem.name)
    return foundItem.name
  } else {
    //console.log(id + "=" + foundItem.id + "=" + foundItem.name)
    console.log("invalid id? = "  + id);
    return "?"
  }
  console.log("foundItem.name: " + foundItem.name);
  return foundItem.name
}

const api = axios.create({
  baseURL: base_url + region + "/" + api_version + "/"
});

