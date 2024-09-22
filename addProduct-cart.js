const products = [
  {
    id: 0,
    img: "./img/img-hot-product/Mặt Nạ Đất Sét Beplain Từ Đậu Xanh Hỗ Trợ Thải Độc Da Giảm Mụn Đầu Đen Mung Bean Pore Clay Mask 120ml.webp",
    brand: "BEPLAIN",
    name: "Mặt Nạ Đất Sét Beplain Từ Đậu Xanh Hỗ Trợ Thải Độc Da Giảm Mụn Đầu Đen Mung Bean Pore Clay Mask 120ml",
    price: 600000,
    rating: 5,
  },
  {
    id: 1,
    img: "./img/img-hot-product/Phấn Nước Clio Kiềm Dầu, Lâu Trôi Kill Cover Skin Fixer Cushion 15g.webp",
    brand: "CLIO",
    name: "Phấn Nước Clio Kiềm Dầu, Lâu Trôi Kill Cover Skin Fixer Cushion 15g",
    price: 420000,
    rating: 4,
  },
  {
    id: 2,
    img: "./img/img-hot-product/Son Thỏi Bóng Peripera Heart Jam Glow Lip 1.4g.webp",
    brand: "BEPLAIN",
    name: "Son Thỏi Bóng Peripera Heart Jam Glow Lip 1.4g",
    price: 330000,
    rating: 5,
  },
  {
    id: 3,
    img: "./img/img-hot-product/Sáp Tẩy Trang Thuần Chay Banila Co Cho Da Lỗ Chân Lông To Clean it Zero Pore Clarifying Cleansing Balm.webp",
    brand: "BEPLAIN",
    name: "Sáp Tẩy Trang Thuần Chay Banila Co Cho Da Lỗ Chân Lông To Clean it Zero Pore Clarifying Cleansing Balm",
    price: 295000,
    rating: 3,
  },
  {
    id: 4,
    img: "./img/img-hot-product/Mặt Nạ Đất Sét Beplain Từ Đậu Xanh Hỗ Trợ Thải Độc Da Giảm Mụn Đầu Đen Mung Bean Pore Clay Mask 120ml.webp",
    brand: "BEPLAIN",
    name: "Mặt Nạ Đất Sét Beplain Từ Đậu Xanh Hỗ Trợ Thải Độc Da Giảm Mụn Đầu Đen Mung Bean Pore Clay Mask 120ml",
    price: 600000,
    rating: 5,
  },
  {
    id: 5,
    img: "./img/img-hot-product/Mặt Nạ Đất Sét Beplain Từ Đậu Xanh Hỗ Trợ Thải Độc Da Giảm Mụn Đầu Đen Mung Bean Pore Clay Mask 120ml.webp",
    brand: "BEPLAIN",
    name: "Mặt Nạ Đất Sét Beplain Từ Đậu Xanh Hỗ Trợ Thải Độc Da Giảm Mụn Đầu Đen Mung Bean Pore Clay Mask 120ml",
    price: 600000,
    rating: 4,
  },
  {
    id: 6,
    img: "./img/img-hot-product/Mặt Nạ Đất Sét Beplain Từ Đậu Xanh Hỗ Trợ Thải Độc Da Giảm Mụn Đầu Đen Mung Bean Pore Clay Mask 120ml.webp",
    brand: "BEPLAIN",
    name: "Mặt Nạ Đất Sét Beplain Từ Đậu Xanh Hỗ Trợ Thải Độc Da Giảm Mụn Đầu Đen Mung Bean Pore Clay Mask 120ml",
    price: 600000,
    rating: 5,
  },
  // Thêm các sản phẩm khác...
];

// Lưu danh sách sản phẩm vào localStorage
localStorage.setItem("products", JSON.stringify(products));

const productContainer = document.querySelector(".list-hot-product");

products.forEach((product) => {
  const productHTML = `
    <div class="hot-product">
      <a href="info-product.html?id=${product.id}">
        <div class="img-hot-product">
          <img src="${product.img}" />
        </div>
        <div class="detail-hot-product">
          <h6>${product.brand}</h6>
          <span>${product.name}</span>
          <div class="price">
            <span>${product.price.toLocaleString()}<sup>đ</sup></span>
          </div>
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
