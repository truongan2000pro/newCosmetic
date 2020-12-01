window.onload = init;
function init() {
  let a = document.querySelector(".body-wrapper");
  let b = document.querySelector(".demo");
  //   document.body.onscroll = scroll;
  function scroll() {
    window.scrollTo(0, 900);
  }
  if (window.scrollY <= 900) {
  }
  let OldScrollHeight = 0;
  document.body.onscroll = function () {
    let scrollHeight = window.scrollY;
    let contentShow = document.getElementById("content-wrapper");
    contentShow.scrollIntoView({ behavior: "smooth" });
    if (scrollHeight.onscroll <= 900) {
    }
  };
  //   a.onclick = function () {
  //     if (window.scrollY <= 901) {
  //       window.onscroll = window.scrollTo(0, 900);
  //     }
  //     let x = window.scrollY;
  //     b.innerHTML = x;
  //     console.log(a.scrollHeight);
  //   };
  //   document.body.scrollTop = 100;
}
