export function getList() {
  return fetch("http://localhost:3004/logement/").then((data) => data.json());
}
