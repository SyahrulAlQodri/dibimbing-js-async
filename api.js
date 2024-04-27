const getDataWithPromise = () => {
  fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((data) => console.log(data));
};

const getDataWithAsync = async (url, callback) => {
  const res = await fetch(url);
  const data = await res.json();
  callback(data);
};

getDataWithAsync('https://fakestoreapi.com/products/1', (data) => {
  console.log(data);
});

getDataWithAsync('https://fakestoreapi.com/products/2', (data) => {
  console.log(data);
});
