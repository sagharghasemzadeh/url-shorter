function save(url) {
  const links = load();
  links.push(url);

  localStorage.setItem("links", JSON.stringify(links));
}

function load() {
  const stringifiedLinks = localStorage.getItem("links");
  return JSON.parse(stringifiedLinks);
}
