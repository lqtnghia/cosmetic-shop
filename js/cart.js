function attachAddToCartEvents() {
  const btn = document.querySelectorAll(".addcart");

  btn.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      var btnItem = event.target;
      var product = btnItem.closest(".product");
      var productImg = product.querySelector("img").src;
      var productName = product.querySelector("span").innerText;
      var productPrice = product.querySelector(".price .offical-price")
        ? product.querySelector(".price .official-price").innerText
        : product.querySelector(".price .old-price").innerText;

      addcart(productPrice, productImg, productName);
    });
  });
}

function cartTotal() {
  var cartItem = document.querySelectorAll("tbody tr");
  var totalC = 0;

  for (var i = 0; i < cartItem.length; i++) {
    var inputValue = cartItem[i].querySelector("input").value;
    var productPrice = cartItem[i].querySelector(".title-price").innerHTML;

    productPrice = productPrice
      .replace(/\./g, "")
      .replace(/\s/g, "")
      .replace("đ", "");

    totalA = inputValue * parseFloat(productPrice);
    totalC += totalA;
  }

  var cartTotalA = document.querySelector(".price-total span");
  cartTotalA.innerHTML = totalC.toLocaleString("de-DE");
}

function addcart(productPrice, productImg, productName) {
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

  cartTotal();
  deleteCart();
  updateCartQuantity(); // Gọi hàm để cập nhật sự kiện sau khi thêm sản phẩm
}

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

// Hàm thêm sự kiện thay đổi số lượng cho các ô nhập
function updateCartQuantity() {
  const quantityInputs = document.querySelectorAll(
    "tbody tr input[type='number']"
  );

  quantityInputs.forEach(function (input) {
    input.addEventListener("change", function () {
      if (input.value < 1) {
        input.value = 1; // Đảm bảo số lượng tối thiểu là 1
      }
      cartTotal(); // Cập nhật tổng tiền khi thay đổi số lượng
    });
  });
}

// Hiển thị/Ẩn giỏ hàng
const cartbtn = document.querySelector(".fa-x");
const cartshow = document.querySelector(".store");
const cartshowmobile = document.querySelector(".store--mobile");

cartshow.addEventListener("click", function () {
  document.querySelector(".cart").style.right = "0";
});

cartbtn.addEventListener("click", function () {
  document.querySelector(".cart").style.right = "-100%";
});

cartshowmobile.addEventListener("click", function () {
  document.querySelector(".cart").style.right = "0";
});

cartbtn.addEventListener("click", function () {
  document.querySelector(".cart").style.right = "-100%";
});

// Gắn sự kiện cho nút thêm vào giỏ hàng sau khi DOM đã sẵn sàng
document.addEventListener("DOMContentLoaded", function () {
  attachAddToCartEvents(); // Đảm bảo gọi hàm này khi tất cả sản phẩm đã được render
});
