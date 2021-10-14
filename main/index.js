const paths = document.getElementsByTagName("path");

window.addEventListener("scroll", myFunction);

function myFunction() {
  for (let path of paths) {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    const scrollpercent =
      (document.body.scrollTop + document.documentElement.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight);

    const draw = length * scrollpercent;

    // Reverse the drawing (when scrolling upwards)
    path.style.strokeDashoffset = length - draw;
  }
}
