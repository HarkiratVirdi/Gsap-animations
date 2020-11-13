let adjustedHeight;
function initial() {
  var tl = gsap.timeline();

  tl.fromTo(".big", { opacity: 0 }, { opacity: 0.2, duration: 1 });
  tl.fromTo(".small", { opacity: 0 }, { opacity: 1, duration: 1, delay: -1 });
  tl.to(".modal", { duration: 1 });
  tl.to(".upper", { duration: 1, width: "100vw", ease: "expo" });
  tl.to(".big", { x: 100, delay: -0.8 });
  tl.to(".small", { color: "#fff", duration: 1.5, ease: "expo" });
  tl.to(".small", {
    transform: "matrix(1, 0, 0, 1, 0," + -adjustedHeight + ")",
    duration: 1,
    ease: "expo",
  });
  tl.to(".upper", { width: "0%", delay: -1 });
  tl.to(".modal", { width: "0%", delay: -1 });
  tl.to(".big", { opacity: 0, delay: -2 });
}

function adjust() {
  const height = window.innerHeight;
  console.log(height + "px");
  const adjusted = height / 2 - 40;
  console.log(adjusted);
  return adjusted;
}

window.addEventListener("resize", function () {
  adjusting();
});

function adjusting() {
  const container = document.querySelector(".container");
  container.style.top = "170px";
}

function adjustitself() {
  var t2 = gsap.timeline();

  t2.fromTo(".small", { opacity: 0 }, { opacity: 1, duration: 0 });
  t2.to(".big", { x: 100, delay: -0.8 });

  t2.to(".small", {
    transform: "matrix(1, 0, 0, 1, 0," + -adjustedHeight + ")",
    duration: 1,
    ease: "expo",
  });
}

function runeach() {
  adjustedHeight = adjust();

  initial();
}

runeach();
