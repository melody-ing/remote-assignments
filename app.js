//***** Assignment 1 *****//

function delayedResult(n1, n2, delayTime, callback) {
  setTimeout(() => {
    const result = n1 + n2;
    callback(result);
  }, delayTime);
}

// delayedResult(4, 5, 3000, function (result) {
//   console.log(result);
// });

// delayedResult(-5, 10, 2000, function (result) {
//   window.alert(result);
// });

//***** Assignment 2 *****//

function ajax(url) {
  return fetch(url).then((res) => res.json());
}
function render(data) {
  const img = [
    "https://m.media-amazon.com/images/I/51Xhm7XDtmS._AC_SY879_.jpg",
    "https://m.media-amazon.com/images/I/51rUAwiGViL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    "https://m.media-amazon.com/images/I/619NZbaUIRL._AC_SX679_.jpg",
  ];
  const products = document.querySelector("#products");

  for (let i = 0; i < img.length; i++) {
    data[i].image = img[i];
  }
  console.log(data);
  const content = data
    .map(
      (product) => `
      <div class="product">
      <h1>${product.name}</h1>
      <img src="${product.image}" />
  
    <p class="price">NT$${product.price}</p>
    <p class="des">${product.description}</p>  
</div>
    `
    )
    .join("");
  products.innerHTML = content;
}
const url =
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";

ajax(url).then((data) => {
  render(data);
});

// [
//     {
//       "name": "Pixel 3",
//       "price": 27700,
//       "description": "最新的 Google 手機。"
//     },
//     {
//       "name": "Chromecast",
//       "price": 1500,
//       "description": "在大螢幕上播放喜歡的影片。"
//     },
//     {
//       "name": "Pixel Book",
//       "price": 12000,
//       "description": "最新的 Chromebook 產品。"
//     }
//   ]
