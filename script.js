const productUI = document.getElementById('products');
const getData = async (url, callback) => {
  const res = await fetch(url);
  const data = await res.json();
  callback(data);
};

getData('https://fakestoreapi.com/products/3', (data) => {
  productUI.innerHTML = `
            <div class="card">
              <img src="${data.image}" alt="${data.title}" />
              <h1>${data.title}</h1>  
            </div>
          `;
  //   data.map((item) => {
  //     productUI.innerHTML += `
  //             <div class="card">
  //               <img src="${item.image}" alt="${item.title}" />
  //               <h1>${item.title}</h1>
  //             </div>
  //           `;
  //   });
});
