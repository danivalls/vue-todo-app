import store from "@/store";

const STORAGE_ITEM_KEY = "ec-todo-app-list";

export function saveListToLocalStorage() {
  const list = store.getters.getTasks;

  localStorage.setItem(STORAGE_ITEM_KEY, JSON.stringify(list));
}

export function loadListFromLocalStorage() {
  const savedList = localStorage.getItem(STORAGE_ITEM_KEY);

  if (savedList) {
    store.dispatch("setTasks", JSON.parse(savedList));
  }
}
