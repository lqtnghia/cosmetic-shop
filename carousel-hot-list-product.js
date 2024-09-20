// Đảm bảo rằng các khai báo này chỉ xuất hiện một lần
const productWidth = 240; // Chiều rộng của sản phẩm
const visibleProducts = 5; // Số lượng sản phẩm hiển thị cùng lúc

// Các phần tử liên quan
const listHotProductFls = document.querySelector(".menu-list-flashsale");
const nextButtonFls = document.querySelector(".carousel-button.next");
const prevButtonFls = document.querySelector(".carousel-button.prev");

let currentPosition = 0;

// Xử lý sự kiện chuyển tiếp
nextButtonFls.addEventListener("click", () => {
  const maxScroll =
    listHotProductFls.scrollWidth - listHotProductFls.clientWidth;
  currentPosition = Math.min(currentPosition + productWidth, maxScroll);
  listHotProductFls.scrollTo({
    left: currentPosition,
    behavior: "smooth",
  });
});

// Xử lý sự kiện quay lại
prevButtonFls.addEventListener("click", () => {
  currentPosition = Math.max(currentPosition - productWidth, 0);
  listHotProductFls.scrollTo({
    left: currentPosition,
    behavior: "smooth",
  });
});
