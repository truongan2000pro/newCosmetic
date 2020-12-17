window.onload = init;
function init() {
  onePageScroll();
  SignInSignUpSwitch();
}
function onePageScroll() {
  let content = document.getElementById("content-wrapper");
  window.onmousewheel = (e) => {
    // console.log(e, window.pageYOffset);
    if (e.pageY <= 1120 && e.deltaY > 99) {
      window.scrollTo({ top: content.offsetTop - 100 });
    }
    if (e.pageY <= content.offsetTop + 200 && e.deltaY < -99) {
      console.log(e.pageY);
      window.scrollTo({ top: 0 });
    }
  };
}
function SignInSignUpSwitch() {
  let signUpLink = document.getElementsByClassName("link-sign-up")[0];
  let signInLink = document.getElementsByClassName("link-log-in")[0];
  let formLogIn = document.getElementsByClassName("log-in-wrapper")[0];
  let formSignUp = document.getElementsByClassName("sign-up-wrapper")[0];
  signUpLink.onclick = function () {
    formLogIn.style.display = "none";
    formSignUp.style.display = "block";
    formSignUp.style.animation = "fade-in 1s";
  };
  signInLink.onclick = function () {
    formLogIn.style.display = "block";
    formSignUp.style.display = "none";
    formLogIn.style.animation = "fade-in 1s";
  };
}
