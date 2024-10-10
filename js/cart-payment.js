// Hàm tính tổng tiền tạm tính và tổng cộng, đồng thời hiển thị tiền giảm
function calculateCartTotal(discountAmount = 0) {
  let total = 0;
  const cartItems = document.querySelectorAll("tbody tr");

  cartItems.forEach(function (item) {
    const priceElement = item.querySelector("td:nth-child(3) span"); // Giá của sản phẩm
    const quantityElement = item.querySelector("input[type='number']"); // Số lượng
    const price = parseFloat(
      priceElement.innerText.replace(/\./g, "").replace("đ", "")
    ); // Chuyển giá thành số
    const quantity = parseInt(quantityElement.value);

    const itemTotal = price * quantity; // Tổng tiền sản phẩm
    total += itemTotal; // Tính tổng tiền
  });

  // Tính tiền giảm nếu có mã giảm giá
  const discountValue = total * discountAmount;

  // Cập nhật giá tạm tính, tiền giảm và giá chính thức
  document.querySelector(".temporary-price").innerText =
    total.toLocaleString("de-DE") + "đ";
  document.querySelector(".discount-price").innerText =
    discountValue.toLocaleString("de-DE") + "đ"; // Hiển thị tiền giảm
  document.querySelector(".offical-price").innerText =
    (total - discountValue).toLocaleString("de-DE") + "đ"; // Tổng cộng sau khi áp dụng giảm giá
}

// Hàm tính tổng số lượng sản phẩm trong giỏ hàng và hiển thị ở icon giỏ hàng
function updateCartCount() {
  const cartItems = document.querySelectorAll("tbody tr"); // Lấy tất cả các sản phẩm trong giỏ hàng
  let totalQuantity = 0;

  cartItems.forEach(function (item) {
    const quantityElement = item.querySelector("input[type='number']"); // Lấy số lượng của từng sản phẩm
    const quantity = parseInt(quantityElement.value);
    totalQuantity += quantity;
  });

  // Lấy badge hiển thị số lượng sản phẩm
  const cartBadge = document.querySelector(".cart-count-badge");

  // Nếu không có sản phẩm nào trong giỏ hàng, ẩn badge
  if (totalQuantity === 0) {
    cartBadge.style.display = "none";
  } else {
    cartBadge.style.display = "inline-block"; // Hiển thị badge nếu có sản phẩm
    cartBadge.innerText = totalQuantity; // Cập nhật số lượng sản phẩm trong badge
  }
}

// Hàm xử lý khi thay đổi số lượng sản phẩm
function handleQuantityChange() {
  const quantityInputs = document.querySelectorAll(
    "tbody input[type='number']"
  );

  quantityInputs.forEach(function (input) {
    input.addEventListener("input", function () {
      if (input.value < 1) {
        input.value = 1; // Đảm bảo số lượng tối thiểu là 1
      }
      calculateCartTotal(); // Cập nhật tổng tiền khi thay đổi số lượng
      updateCartCount(); // Cập nhật số lượng sản phẩm khi thay đổi số lượng
    });
  });
}

// Hàm xử lý khi xóa sản phẩm
function handleDeleteProduct() {
  const deleteButtons = document.querySelectorAll(
    "tbody td[style*='cursor: pointer']"
  );

  deleteButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const row = button.closest("tr");
      row.remove(); // Xóa sản phẩm khỏi bảng
      calculateCartTotal(); // Cập nhật tổng tiền sau khi xóa sản phẩm
      updateCartCount(); // Cập nhật số lượng sản phẩm sau khi xóa
    });
  });
}

// Hàm xử lý khi áp dụng mã giảm giá
function applyDiscount() {
  const discountInput = document.querySelector("input[placeholder='Nhập mã']");
  const discountCode = discountInput.value.trim();
  let discountAmount = 0; // Mặc định không giảm giá

  // Giả sử mã giảm giá là 'DISCOUNT10', giảm 10%
  if (discountCode === "DISCOUNT10") {
    discountAmount = 0.1; // Giảm giá 10%
  } else if (discountCode !== "") {
    alert("Mã giảm giá không hợp lệ.");
  }

  // Tính lại tổng tiền và hiển thị tiền giảm cho đơn hàng
  calculateCartTotal(discountAmount);
}

// Lắng nghe sự kiện khi nhấn nút "Apply"
document
  .querySelector("button[type='submit']")
  .addEventListener("click", function (event) {
    event.preventDefault();
    applyDiscount();
  });

// Khởi tạo sự kiện khi thay đổi số lượng, xóa sản phẩm và khi trang được tải xong
document.addEventListener("DOMContentLoaded", function () {
  handleQuantityChange(); // Gắn sự kiện thay đổi số lượng
  handleDeleteProduct(); // Gắn sự kiện xóa sản phẩm
  calculateCartTotal(); // Cập nhật tổng tiền ban đầu
  updateCartCount(); // Cập nhật số lượng sản phẩm ban đầu
});
