import {nodeTreeObserver} from "./nodeTreeObserver";

function addRippleEffect(btn: HTMLElement) {
    btn.addEventListener("click", ev => {
        const d = Math.max(btn.clientWidth, btn.clientHeight);
        const r = d / 2;
        const btnBounds = btn.getBoundingClientRect();

        const circle = document.createElement("span");
        circle.style.width = circle.style.height = `${d}px`;
        circle.style.left = `${ev.x - btnBounds.x - r}px`;
        circle.style.top = `${ev.y - btnBounds.y - r}px`;
        circle.classList.add('ripple');

        btn.appendChild(circle);
        setTimeout(() => {
            btn.removeChild(circle);
        }, 65000);
    });
}

nodeTreeObserver.listenForCssClass("btn", addRippleEffect);
