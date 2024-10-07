function Validator(options) {
  function getParent(element, selector) {
    while (element.parentElement) {
      if (element.parentElement.matches(selector)) {
        return element.parentElement;
      }
      element = element.parentElement;
    }
  }

  let selectorRules = {};

  // hàm thực hiện validate
  function validate(inputE, rule) {
    //let errorE = getParent(inputE, ".form-group")
    let errorMessage;
    let errorE = getParent(inputE, options.formGroupSelector).querySelector(
      ".form-message"
    );

    // lấy ra các rules của selector
    var rules = selectorRules[rule.selector];
    // lặp qua từng rule và kiểm tra
    // nếu có lỗi thì dừng việc kiểm tra
    for (var i = 0; i < rules.length; i++) {
      errorMessage = rules[i](inputE.value);
      if (errorMessage) break;
    }

    if (errorMessage) {
      errorE.innerText = errorMessage;
      getParent(inputE, options.formGroupSelector).classList.add("invalid");
    } else {
      errorE.innerText = "";
      getParent(inputE, options.formGroupSelector).classList.remove("invalid");
    }
    return !errorMessage;
  }

  // Lấy element của form cần validate
  let formElement = document.querySelector(options.form);

  if (formElement) {
    // khi submit form
    formElement.onsubmit = function (e) {
      e.preventDefault();

      let isFormValid = true;

      // lặp qua từng rules và validate
      options.rules.forEach(function (rule) {
        let inputE = formElement.querySelector(rule.selector);
        let isValid = validate(inputE, rule);
        if (!isValid) {
          isFormValid = false;
        }
      });

      if (isFormValid) {
        // Trường hợp submit với js
        if (typeof options.onSubmit === "function") {
          let enableInputs = formElement.querySelectorAll(
            "[name]:not([disabled])"
          );
          let formValue = Array.from(enableInputs).reduce(function (
            values,
            input
          ) {
            values[input.name] = input.value;
            return values;
          },
          {});

          options.onSubmit(formValue);
        }
        //  Trường hợp submit với hành vi mặc định
        else {
          formElement.submit();
        }
      }
    };

    // Duyệt qua các rule và xử lý (lắng nghe sự kiện blur, input, ...)
    options.rules.forEach(function (rule) {
      //  lưu lại các rules cho mỗi input
      if (Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.test);
      } else {
        selectorRules[rule.selector] = [rule.test];
      }
      let inputE = formElement.querySelector(rule.selector);

      if (inputE) {
        // xử lý trường hợp blur khỏi input
        inputE.onblur = function () {
          validate(inputE, rule);
        };
        //xử lý khi người dùng nhập input
        inputE.oninput = function () {
          let errorE = getParent(
            inputE,
            options.formGroupSelector
          ).querySelector(".form-message");
          errorE.innerText = "";
          getParent(inputE, options.formGroupSelector).classList.remove(
            "invalid"
          );
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
      return value.trim() ? undefined : `Vui lòng nhập thông tin này`;
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

Validator.isConfirmed = function (selector, getConfirmValue, message) {
  return {
    selector: selector,
    test: function (value) {
      return value === getConfirmValue()
        ? undefined
        : message || "Giá trị nhập vào không chính xác";
    },
  };
};
