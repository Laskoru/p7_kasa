export default async function useFetch() {
  await fetch("../data/logements.js")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch(" error ");
}
