
const fetchData = async() => {
  const resp = await fetch('http://localhost:3000');
  const json = await resp.json();
}

fetchData();

