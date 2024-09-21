const products = [
  {
    img: "./img/img-hot-product/Mặt Nạ Đất Sét Beplain.webp",
    brand: "BEPLAIN",
    name: "Mặt Nạ Đất Sét Beplain Từ Đậu Xanh...",
    price: 345678,
    rating: 5,
  },
  {
    img: "./img/img-hot-product/Phấn Nước Clio.webp",
    brand: "CLIO",
    name: "Phấn Nước Clio Kiềm Dầu...",
    price: 420000,
    rating: 4,
  },
  // Thêm các sản phẩm khác
];
const productContainer = document.querySelector(".list-hot-product");

products.forEach((product) => {
  const productHTML = `
    <div class="hot-product">
      <a href="">
        <div class="img-hot-product">
          <img src="${product.img}" />
        </div>
        <div class="detail-hot-product">
          <h6>${product.brand}</h6>
          <span>${product.name}</span>
          <div class="price"><span>${product.price.toLocaleString()}</span><sup>đ</sup></div>
          <div>
            <ul class="star-rating ${product.rating}-star">
              ${'<li><a href="#">&#9733;</a></li>'.repeat(product.rating)}
            </ul>
          </div>
        </div>
        <button class="addcart">Thêm vào giỏ hàng</button>
      </a>
    </div>
  `;

  productContainer.innerHTML += productHTML;
});
