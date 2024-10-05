const products = [
  {
    id: 1,
    img: "../assets/img/img-hot-product/AHC/Bộ Sản Phẩm Chống Lão Hóa Da AHC Youthful Skin Starter Kit (4Pc).webp",
    brand: "AHC",
    name: "Bộ Sản Phẩm Chống Lão Hóa Da AHC Youthful Skin Starter Kit (4Pc)",
    price: 420000,
    rating: 4,
    count: 26,
  },
  {
    id: 2,
    img: "../assets/img/img-hot-product/AHC/Kem Dưỡng Da AHC Ampoule Directory PHA Mattifying Gel Cream 30ml.webp",
    brand: "AHC",
    name: "Kem Dưỡng Da AHC Ampoule Directory PHA Mattifying Gel Cream 30ml.webp",
    price: 330000,
    rating: 5,
    count: 3,
  },
  {
    id: 3,
    img: "../assets/img/img-hot-product/AHC/Tinh Chất AHC Dưỡng Chuyên Sâu Dạng Viên Youth Focus Intensive Night Capsule Serum (30 capsules).webp",
    brand: "AHC",
    name: "Tinh Chất AHC Dưỡng Chuyên Sâu Dạng Viên Youth Focus Intensive Night Capsule Serum (30 capsules)",
    price: 295000,
    rating: 3,
    count: 4,
  },
  {
    id: 4,
    img: "../assets/img/img-hot-product/BEPLAIN/Mặt Nạ Đất Sét Beplain Từ Đậu Xanh Hỗ Trợ Thải Độc Da Giảm Mụn Đầu Đen Mung Bean Pore Clay Mask 120ml.webp",
    brand: "BEPLAIN",
    name: "Mặt Nạ Đất Sét Beplain Từ Đậu Xanh Hỗ Trợ Thải Độc Da Giảm Mụn Đầu Đen Mung Bean Pore Clay Mask 120ml",
    price: 600000,
    rating: 5,
    count: 5,
  },
  {
    id: 5,
    img: "../assets/img/img-hot-product/BANILA CO/(Phiên bản Vegan) Sáp Tẩy Trang Thuần Chay Banila Co Cho Da Khô Clean it Zero Nourishing Cleansing Balm 100ml.webp",
    brand: "BANILA CO",
    name: "(Phiên bản Vegan) Sáp Tẩy Trang Thuần Chay Banila Co Cho Da Khô Clean it Zero Nourishing Cleansing Balm 100ml",
    price: 600000,
    rating: 4,
    count: 6,
  },
  {
    id: 6,
    img: "../assets/img/img-hot-product/BANILA CO/(Phiên bản Vegan) Sáp Tẩy Trang Thuần Chay Banila Co Cho Da Nhạy Cảm Clean it Zero Calming Cleansing Balm 100ml.webp",
    brand: "BANILA CO",
    name: "(Phiên bản Vegan) Sáp Tẩy Trang Thuần Chay Banila Co Cho Da Nhạy Cảm Clean it Zero Calming Cleansing Balm 100ml",
    price: 600000,
    rating: 5,
    count: 16,
  },
  {
    id: 7,
    img: "../assets/img/img-hot-product/BANILA CO/(Phiên bản Vegan) Sáp Tẩy Trang Thuần Chay Banila Co Cho Mọi Loại Da Clean it Zero Original Cleansing Balm.webp",
    brand: "BANILA CO",
    name: "(Phiên bản Vegan) Sáp Tẩy Trang Thuần Chay Banila Co Cho Mọi Loại Da Clean it Zero Original Cleansing Balm",
    price: 600000,
    rating: 5,
    count: 29,
  },
  {
    id: 8,
    img: "../assets/img/img-hot-product/BANILA CO/Sáp Tẩy Trang Thuần Chay Banila Co Cho Da Lỗ Chân Lông To Clean it Zero Pore Clarifying Cleansing Balm.webp",
    brand: "BANILA CO",
    name: "Sáp Tẩy Trang Thuần Chay Banila Co Cho Da Lỗ Chân Lông To Clean it Zero Pore Clarifying Cleansing Balm",
    price: 600000,
    rating: 5,
    count: 30,
  },
  {
    id: 9,
    img: "../assets/img/img-hot-product/CLUB CLIO/Kem Nền Bóng Mượt Clio Kill Cover Glow Foundation Spf50+ Pa++++ 38G.webp",
    brand: "CLUB CLIO",
    name: "Kem Nền Bóng Mượt Clio Kill Cover Glow Foundation Spf50+ Pa++++",
    price: 600000,
    rating: 5,
    count: 67,
  },
  {
    id: 10,
    img: "../assets/img/img-hot-product/CLUB CLIO/Kem Nền Che Khuyết Điểm Clio Kill Cover Founwear Foundation SPF30 PA+++ 38g.webp",
    brand: "CLUB CLIO",
    name: "Kem Nền Che Khuyết Điểm Clio Kill Cover Founwear Foundation SPF30 PA+++",
    price: 600000,
    rating: 5,
    count: 55,
  },
  {
    id: 11,
    img: "../assets/img/img-hot-product/CLUB CLIO/Kem Nền Căng Mướt Da Dear Dahlia Skin Paradise Sheer Silk Foundation 30Ml.webp",
    brand: "CLUB CLIO",
    name: "Kem Nền Căng Mướt Da Dear Dahlia Skin Paradise Sheer Silk Foundation 30Ml",
    price: 600000,
    rating: 5,
    count: 99,
  },
  {
    id: 12,
    img: "../assets/img/img-hot-product/DEAR DAHLIA/Bảng Màu Mắt 4 Ô Dear Dahlia Dream Velvet Eyeshadow Palette 5.1g.webp",
    brand: "DEAR DAHLIA",
    name: "Bảng Màu Mắt 4 Ô Dear Dahlia Dream Velvet Eyeshadow Palette 5.1g",
    price: 600000,
    rating: 5,
    count: 12,
  },
  {
    id: 13,
    img: "../assets/img/img-hot-product/DEAR DAHLIA/Son Thỏi Hiệu Ứng Lì Mịn Dear Dahlia Lip Paradise Effortless Matte Lipstick (3,2G).webp",
    brand: "DEAR DAHLIA",
    name: "Son Thỏi Hiệu Ứng Lì Mịn Dear Dahlia Lip Paradise Effortless Matte Lipstick (3,2G) ",
    price: 600000,
    rating: 5,
    count: 34,
  },
  // Thêm các sản phẩm khác...
];

// Lưu danh sách sản phẩm vào localStorage
localStorage.setItem("products", JSON.stringify(products));

//Lọc sản phẩm bán chạy (10 sản phẩm có số lượng bạn lớn nhất)

const productContainer = document.querySelector(".list-hot-product");
const listProductHot = products.sort((a, b) => b.count - a.count).slice(0, 10);

listProductHot.forEach((product) => {
  const productHTML = `
    <div class="product">
      <a href="info-product.html?id=${product.id}">
        <div class="img-product">
          <img src="${product.img}" />
          <button class="show-now">Xem ngay</button>
        </div>
        <div class="detail-product">
          <h6>${product.brand}</h6>
          <span>${product.name}</span>
          <div class="price">
            <span>${product.price.toLocaleString()}<sup>đ</sup></span>
          </div>
          <div>
            <ul class="star-rating ${product.rating}-star">
              ${'<li><a href="#">&#9733;</a></li>'.repeat(product.rating)}
              <span class="product-count">(${product.count})</span>
            </ul>
          </div>
        </div>
        <button class="addcart">Thêm vào giỏ hàng</button>
      </a>
    </div>
  `;
  productContainer.innerHTML += productHTML;
});

//  lọc sản phẩm sale
const listSaleProduct = products.filter((product) => product.id > 7);

const productSale = document.querySelector(".list-sale-product");
listSaleProduct.forEach((product) => {
  const productHTML = `
    <div class="product">
      <a href="info-product.html?id=${product.id}">
        <div class="img-product">
          <img src="${product.img}" />
        </div>
        <div class="detail-product">
          <h6>${product.brand}</h6>
          <span>${product.name}</span>
          <div class="price">
            <span>${product.price.toLocaleString()}<sup>đ</sup></span>
          </div>
          <div>
            <ul class="star-rating ${product.rating}-star">
              ${'<li><a href="#">&#9733;</a></li>'.repeat(product.rating)}
              <span class="product-count">(${product.count})</span>
            </ul>
          </div>
        </div>
        <button class="addcart">Thêm vào giỏ hàng</button>
      </a>
    </div>
  `;
  productSale.innerHTML += productHTML;
});
