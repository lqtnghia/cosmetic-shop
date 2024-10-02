const flsproducts = [
  {
    img: "./img/img-hot-product/Mặt Nạ Đất Sét Beplain Từ Đậu Xanh Hỗ Trợ Thải Độc Da Giảm Mụn Đầu Đen Mung Bean Pore Clay Mask 120ml.webp",
    brand: "BEPLAIN",
    name: "Mặt Nạ Đất Sét Beplain Từ Đậu Xanh Hỗ Trợ Thải Độc Da Giảm Mụn Đầu Đen Mung Bean Pore Clay Mask 120ml",
    price: 600000,
    rating: 5,
  },
  {
    img: "./img/img-hot-product/Phấn Nước Clio Kiềm Dầu, Lâu Trôi Kill Cover Skin Fixer Cushion 15g.webp",
    brand: "CLIO",
    name: "Phấn Nước Clio Kiềm Dầu, Lâu Trôi Kill Cover Skin Fixer Cushion 15g",
    price: 420000,
    rating: 4,
  },
  // Thêm các sản phẩm flash sale khác
];

const flashSaleContainer = document.querySelector(".menu-list-flashsale");

flsproducts.forEach((product) => {
  const productHTML = `
    <div class="product">
      <a href="#">
        <div class="img-product">
          <img src="${product.img}" />
        </div>
        <div class="detail-product">
          <h6>${product.brand}</h6>
          <span>${product.name}</span>
          <div class="price"><span>${product.price.toLocaleString()}<sup>đ</sup></span></div>
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
  flashSaleContainer.innerHTML += productHTML;
});

attachAddToCartEvents(); // Gọi lại hàm để thêm sự kiện "Thêm vào giỏ hàng"
