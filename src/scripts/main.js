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

  const text = createText(url);
  const editButton = createEditButton(url, item);
  const removeButton = createRemoveButton(url, item);

  item.append(text);
  item.append(editButton);
  item.append(removeButton);
  list.append(item);
}

function createText(url) {
  const text = document.createElement("div");
  text.classList.add("text");
  text.innerHTML = url;

  return text;
}

function createEditButton(url, item) {
  const button = document.createElement("button");
  button.classList.add("edit");
  button.innerHTML = "Edit";

  button.addEventListener("click", () => {});

  return button;
}

function createRemoveButton(url, item) {
  const button = document.createElement("button");
  button.classList.add("remove");
  button.innerHTML = "Remove";

  button.addEventListener("click", () => {
    const isOk = confirm(`You are about to remove "${url}". Are you sure?`);

    if (isOk) {
      item.remove();
      remove(url);
    }
  });

  return button;
}
