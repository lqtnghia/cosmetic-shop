const listHotProduct = document.querySelector(".list-hot-product");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

let currentPosition = 0;
const productWidth = 240; // 220px chiều rộng sản phẩm + 20px khoảng cách
const visibleProducts = 5; // Hiển thị tối đa 5 sản phẩm cùng lúc

nextButton.addEventListener("click", () => {
  const maxScroll = listHotProduct.scrollWidth - listHotProduct.clientWidth;
  currentPosition = Math.min(currentPosition + productWidth, maxScroll);
  listHotProduct.scrollTo({
    left: currentPosition,
    behavior: "smooth",
  });
});

prevButton.addEventListener("click", () => {
  currentPosition = Math.max(currentPosition - productWidth, 0);
  listHotProduct.scrollTo({
    left: currentPosition,
    behavior: "smooth",
  });
});
