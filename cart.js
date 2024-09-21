const btn = document.querySelectorAll(".hot-product button");
// console.log(btn);
btn.forEach(function (button, index) {
  button.addEventListener("click", function (event) {
    var btnItem = event.target;
    var product = btnItem.parentElement;

    var productImg = product.querySelector("img").src;
    var productName = product.querySelector("span").innerText;
    var productPrice = product.querySelector(".price span").innerText;

    // console.log(productPrice, productImg, productName);
    addcart(productPrice, productImg, productName);
  });
});

function addcart(productPrice, productImg, productName) {
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
    totalA = inputValue * productPrice * 1000;
    totalC += totalA;
  }
  var cartTotalA = document.querySelector(".price-total span");
  cartTotalA.innerHTML = totalC.toLocaleString("de-DE");
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
