const form = document.querySelector("section#paste form");
const list = document.querySelector("section#links ul");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const url = formData.get("url");

  addUrlToList(url);

  form.reset();
});

function addUrlToList(url) {
  const item = document.createElement("li");
  item.classList.add("card");
  item.innerHTML = url;

  list.append(item);
}
