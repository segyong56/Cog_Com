const graphicElems = document.querySelectorAll(".graphic-item");
const section = document.querySelector(".section-2");
const goToTop = document.querySelector(".Go-to-top");

let currentItem = graphicElems[0];

window.addEventListener("scroll", () => {
  let step;
  let boundingRect;

  const sectionRect = section.getBoundingClientRect();

  if (sectionRect.top > window.innerHeight * 0.1) {
    goToTop.style.opacity = "1";
  }

  for (let i = 0; i < graphicElems.length; i++) {
    step = graphicElems[i];
    if (!step) continue;

    //각 element의 top값을 가져올때 쓰는 method

    boundingRect = step.getBoundingClientRect();

    if (
     
      boundingRect.top < window.innerHeight * 0.6
    ) {
      console.log(boundingRect.top)
      step.classList.add("visible");
    } else {
      step.classList.remove("visible");
    }
  }
});

goToTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
