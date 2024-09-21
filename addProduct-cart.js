const products = [
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
  {
    img: "./img/img-hot-product/Son Thỏi Bóng Peripera Heart Jam Glow Lip 1.4g.webp",
    brand: "CLIO",
    name: "Son Thỏi Bóng Peripera Heart Jam Glow Lip 1.4g",
    price: 320000,
    rating: 4,
  },
  {
    img: "./img/img-hot-product/Sáp Tẩy Trang Thuần Chay Banila Co Cho Da Lỗ Chân Lông To Clean it Zero Pore Clarifying Cleansing Balm.webp",
    brand: "CLIO",
    name: "Sáp Tẩy Trang Thuần Chay Banila Co Cho Da Lỗ Chân Lông To Clean it Zero Pore Clarifying Cleansing Balm",
    price: 420000,
    rating: 3,
  },
  {
    img: "./img/img-hot-product/Phấn Nước Clio Kiềm Dầu, Lâu Trôi Kill Cover Skin Fixer Cushion 15g.webp",
    brand: "CLIO",
    name: "Phấn Nước Clio Kiềm Dầu, Lâu Trôi Kill Cover Skin Fixer Cushion 15g",
    price: 420000,
    rating: 4,
  },
  {
    img: "./img/img-hot-product/Phấn Nước Clio Kiềm Dầu, Lâu Trôi Kill Cover Skin Fixer Cushion 15g.webp",
    brand: "CLIO",
    name: "Phấn Nước Clio Kiềm Dầu, Lâu Trôi Kill Cover Skin Fixer Cushion 15g",
    price: 420000,
    rating: 4,
  },
  {
    img: "./img/img-hot-product/Phấn Nước Clio Kiềm Dầu, Lâu Trôi Kill Cover Skin Fixer Cushion 15g.webp",
    brand: "CLIO",
    name: "Phấn Nước Clio Kiềm Dầu, Lâu Trôi Kill Cover Skin Fixer Cushion 15g",
    price: 420000,
    rating: 4,
  },
  // Thêm các sản phẩm khác
];

const productContainer = document.querySelector(".list-hot-product");

products.forEach((product) => {
  const productHTML = `
    <div class="hot-product">
      <a href="#">
        <div class="img-hot-product">
          <img src="${product.img}" />
        </div>
        <div class="detail-hot-product">
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

  productContainer.innerHTML += productHTML;

  // -------------------------------------------------------

  // -------------------------------Cart------------------------------

  const btn = document.querySelectorAll(".hot-product button");

  btn.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Ngăn chặn hành động mặc định (ngăn việc chuyển trang)

      var btnItem = event.target;
      var product = btnItem.parentElement;

      var productImg = product.querySelector("img").src;
      var productName = product.querySelector("span").innerText;
      var productPrice = product.querySelector(".price span").innerText;

      // Thêm sản phẩm vào giỏ hàng
      addcart(productPrice, productImg, productName);
    });
  });

  function addcart(productPrice, productImg, productName) {
    // Loại bỏ ký tự "đ" và chuyển đổi giá tiền về số
    productPrice = productPrice
      .replace(/\./g, "")
      .replace(/\s/g, "")
      .replace("đ", "");

    var addtr = document.createElement("tr");
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
      var productT = document.querySelectorAll(".title-name");
      if (productT[i].innerHTML == productName) {
        alert("Sản phẩm của bạn đã có trong giỏ hàng.");
        return;
      }
    }

    var trcontent =
      '<tr><td style="display: flex; align-items: center"><img style="width: 70px" src="' +
      productImg +
      '"/><span class="title-name">' +
      productName +
      '</span></td><td><p><span class="title-price">' +
      productPrice +
      '</span><sup>đ</sup></p></td><td><input style="width: 30px; outline: none" type="number" value="1" min="1" /></td><td style="cursor: pointer"><span class="title-delete">Xóa</span></td></tr>';
    addtr.innerHTML = trcontent;
    var cartTable = document.querySelector("tbody");
    cartTable.append(addtr);

    cartTotal(); // Tính lại tổng giá sau khi thêm sản phẩm
    deleteCart(); // Gán lại sự kiện xóa cho các sản phẩm mới
  }

  // ------------------Total Price------------------
  function cartTotal() {
    var cartItem = document.querySelectorAll("tbody tr");
    var totalC = 0;

    for (var i = 0; i < cartItem.length; i++) {
      var inputValue = cartItem[i].querySelector("input").value;
      var productPrice = cartItem[i].querySelector(".title-price").innerHTML;

      // Loại bỏ dấu chấm và ký tự "đ" khỏi chuỗi giá tiền
      productPrice = productPrice.replace(/\./g, ""); // Xóa dấu chấm ngăn cách hàng nghìn
      productPrice = productPrice.replace(/\s/g, "").replace("đ", ""); // Xóa ký tự "đ"

      totalA = inputValue * parseFloat(productPrice); // Chuyển chuỗi giá tiền thành số
      totalC += totalA;
    }

    var cartTotalA = document.querySelector(".price-total span");
    cartTotalA.innerHTML = totalC.toLocaleString("de-DE") + "<sup>đ</sup>"; // Thêm lại ký tự "đ" ở đây
    inputchange();
  }

  // ----------------------Delete cart------------------------
  function deleteCart() {
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
      var productT = document.querySelectorAll(".title-delete");
      productT[i].addEventListener("click", function (event) {
        var cartDelete = event.target;
        var cartItemD = cartDelete.parentElement.parentElement;
        cartItemD.remove();
        cartTotal();
      });
    }
  }

  function inputchange() {
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
      var inputValue = cartItem[i].querySelector("input");
      inputValue.addEventListener("change", function () {
        cartTotal();
      });
    }
  }

  const cartbtn = document.querySelector(".fa-x");
  const cartshow = document.querySelector(".store");
  cartshow.addEventListener("click", function () {
    document.querySelector(".cart").style.right = "0";
  });
  cartbtn.addEventListener("click", function () {
    document.querySelector(".cart").style.right = "-100%";
  });
});
