import "./styles.css";
import { computePosition, shift, flip, offset } from "@floating-ui/dom"; 

//select floating id from html

const floating = document.getElementById("floating");

//listens for mouse movement

document.addEventListener("mousemove", ({ clientX, clientY }) => {
  const virtualEl = {
  // gets the mouse dimensions and position
    getBoundingClientRect() {
      return {
        width: 0,
        height: 0,
        x: clientX,
        y: clientY,
        left: clientX,
        right: clientX,
        top: clientY,
        bottom: clientY
      };
    }
  };
//calculates the position and updates the position
  computePosition(virtualEl, floating, {
    placement: "right-start",
    middleware: [offset(5), flip(), shift()]
  }).then(({ x, y }) => {
    Object.assign(floating.style, {
      top: `${y}px`,
      left: `${x}px`
    });
  });
});
