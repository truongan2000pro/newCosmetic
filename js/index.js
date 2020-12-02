window.onload = init;
function init() {
  onePageScroll();
}
function onePageScroll() {
  window.addEventListener("wheel", (e) => {
    if (e.pageY <= 1120 && e.deltaY > 99) {
      window.scroll(0, 900);
    }
    if (e.pageY <= 1250 && e.deltaY < -99) {
      console.log(e.pageY);
      window.scroll(0, 0);
    }
  });
}
