const url = "https://kea-alt-del.dk/t7/api/products/1163";

//fetch the data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));
//populate the page

function showProduct(product) {
  console.log(product);
  document.querySelector(".categories .brand").textContent = product.brandname;
  document.querySelector(".prodName").textContent = product.productdisplayname;
  document.querySelector(
    "img.prodImg"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector("img.prodImg").alt = product.productdisplayname;
  document.querySelector("dd.prodName").textContent =
    product.productdisplayname;
  document.querySelector("dd.prodColor").textContent = product.basecolour;
  document.querySelector("dd.prodID").textContent = product.id;
  document.querySelector("h1.prodBrand").textContent = product.brandname;
  document.querySelector("p.prodMotto").textContent = product.brandbio;
}
