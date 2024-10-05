// Lấy danh sách sản phẩm từ localStorage
const products = JSON.parse(localStorage.getItem("products"));

// Lấy id từ URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// Tìm sản phẩm theo id
const selectedProduct = products.find((product) => product.id == productId);

// // Hiển thị thông tin sản phẩm
document.querySelector(
  ".img-product"
).innerHTML = `<img src="${selectedProduct.img}" />`;

document.querySelector(".detail-product").innerHTML = `
  <div class="head-detail">
    <div class="info-product">
      <h6>${selectedProduct.brand}</h6>
      <h7 class="descri-product">
        <span>${selectedProduct.name}</span>
      </h7>
      <div class="price">
        <span>${selectedProduct.price.toLocaleString()}</span><sup>đ</sup>
      </div>
      <div class="rating">
        <ul class="star-rating ${selectedProduct.rating}-star">
          ${'<li><a href="#">&#9733;</a></li>'.repeat(selectedProduct.rating)}
        </ul>
      </div>
    </div>
  </div>
  <div class="foot-detail">
    <div class="purchase-form">
      <h5>Hình thức mua hàng</h5>
      <div>
        <input type="radio" /> Giao hàng
      </div>
      <div>
        <input type="radio" /> Mua hàng và lấy hàng tại cửa hàng
        <span>Chọn cửa hàng <i class="fa-solid fa-chevron-down"></i></span>
      </div>
      <div class="payment">
        <button class="minus">-</button>
        <input type="number" value="1" min="1" />
        <button class="plus">+</button>
        <button class="addcart">Thêm vào giỏ hàng</button>
      </div>
    </div>
  </div>
`;
