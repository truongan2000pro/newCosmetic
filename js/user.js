window.onload = init;
function init() {
  let logInBtn = $(".log-in-btn");
  let logInForm = $(".log-in-wrapper");
  let btnHandler = function () {
    console.log("haha");
    // e.preventDefault;
    let email = $(".email");
    let pass = $(".password");
    // console.log(email.val());

    if (email.val().length > 0 && pass.val().length > 0) {
      $.ajax({
        url: "http://localhost:6969/cosmetic/login.php",
        method: "POST",
        data: { email: email.val(), password: pass.val() },
        cache: false,
        success: function (data) {
          console.log(data);
          // if (data) {
          // window.url = "http://localhost:6969/cosmetic/login.php";
          // let closeModalBtn = document.querySelector(".close");
          // closeModalBtn.click();
          // }
        },
      });
    }
  };
  logInBtn.on("click", btnHandler);
}
