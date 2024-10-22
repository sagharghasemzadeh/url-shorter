const form = document.querySelector("section#paste form");
const list = document.querySelector("section#links ul");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const url = formData.get("url");

  addUrlToList(url);
  save(url);

  form.reset();
});

function addUrlToList(url) {
  const item = document.createElement("li");
  item.classList.add("card");
  item.innerHTML = url;

  const button = document.createElement("button");
  button.innerHTML = "Remove";

  button.addEventListener("click", () => {
    const isOk = confirm(`You are about to remove "${url}". Are you sure?`);

    if (isOk) {
      item.remove();
    }
  });

  item.append(button);
  list.append(item);
}
