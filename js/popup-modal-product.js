// Mở modal khi click vào nút "Xem ngay"
document.querySelectorAll(".show-now").forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();

    const product = listProductHot.find(
      (p) =>
        p.id == this.closest(".product").querySelector("a").href.split("=")[1]
    );

    modalTitle.innerText = product.name;
    modalBody.innerHTML = `
      <p>Brand: ${product.brand}</p>
      <p>Price: ${product.price.toLocaleString()}<sup>đ</sup></p>
      <img src="${product.img}" alt="${product.name}" />
      <p>Rating: ${product.rating} stars</p>
    `;

    modal.style.display = "block";
  });
});

// Đóng modal khi click nút close
closeModal.onclick = function () {
  modal.style.display = "none";
};

// Đóng modal khi click ngoài modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
