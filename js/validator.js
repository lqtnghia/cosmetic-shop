function Validator(options) {
  // hàm thực hiện validate
  function validate(inputE, rule) {
    let errorMessage = rule.test(inputE.value);
    let errorE = inputE.parentElement.querySelector(".form-message");
    if (errorMessage) {
      errorE.innerText = errorMessage;
      inputE.parentElement.classList.add("invalid");
    } else {
      errorE.innerText = "";
      inputE.parentElement.classList.remove("invalid");
    }
  }

  // Lấy element của form cần validate
  let formElement = document.querySelector(options.form);

  if (formElement) {
    // Duyệt qua các rule
    options.rules.forEach(function (rule) {
      let inputE = formElement.querySelector(rule.selector);

      if (inputE) {
        // xử lý trường hợp blur khỏi input
        inputE.onblur = function () {
          validate(inputE, rule);
        };
        //xử lý khi người dùng nhập input
        inputE.oninput = function () {
          let errorE = inputE.parentElement.querySelector(".form-message");
          errorE.innerText = "";
          inputE.parentElement.classList.remove("invalid");
        };
      }
    });
  }
}

// Định nghĩa các rule
//Nguyên tắc của các rules:
//  khí có lỗi thì trả ra  message lỗi còn hợp lệ thì không trả ra gì
Validator.isRequired = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : `Vui lòng nhập trường này`;
    },
  };
};

Validator.isEmail = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value) ? undefined : "Vui lòng nhập email";
    },
  };
};

Validator.minLenngth = function (selector, min) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= min
        ? undefined
        : `Mật khẩu phải có ít nhất ${min} kí tự`;
    },
  };
};
