// Lấy dữ liệu giỏ hàng từ localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Hiển thị sản phẩm trong giỏ hàng
function displayCart() {
  const cartTable = document.querySelector("tbody");
  cartTable.innerHTML = ""; // Xóa dữ liệu cũ

  cart.forEach((product) => {
    const productRow = `
      <tr data-id="${product.id}"> <!-- Lưu id sản phẩm trong data-id -->
        <td>${product.id}</td>
        <td style="display: flex; align-items: center; justify-content: center;">
          <!-- Nhóm hình ảnh và tên sản phẩm lại với nhau -->
          <div style="display: flex; align-items: center;">
            <img style="width: 10vw; margin-right: 10px;" src="${
              product.img
            }" alt="${product.name}">
            <span class="name">${product.name}</span>
          </div>
        </td>
        <td>
          <input style="width: 5vw; outline: none" type="number" value="${
            product.quantity
          }" min="1">
        </td>
        <td>
          <span>${(
            product.price * product.quantity
          ).toLocaleString()}<sup>đ</sup></span>
        </td>
        <td class="delete-product" style="cursor: pointer" class="delete-product">xóa</td>
      </tr>
    `;
    cartTable.innerHTML += productRow;
  });
}

// Hiển thị giỏ hàng
displayCart();
// handleDeleteProduct(); // Gắn sự kiện xóa cho mỗi nút xóa
