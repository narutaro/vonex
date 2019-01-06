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
    return foundItem.name
  } else {
    console.log("invalid id? = "  + id);
    return "?"
  }
  console.log("foundItem.name: " + foundItem.name);
  return foundItem.name
}
