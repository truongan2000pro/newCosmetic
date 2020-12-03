window.onload = init;
function init() {
  onePageScroll();
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
