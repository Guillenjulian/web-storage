import { state } from "../state";

export function init(container: HTMLElement) {
  const div = document.createElement("div");
  const sytles = document.createElement("style");

  div.innerHTML = `
  <custon-header></custon-header>
  <h1 class ="Title_h1">Mis pendientes</h1>
 <costom-form></costom-form>
 <custon-list></custon-list>
 
 `;

  div.appendChild(sytles);
  // console.log(div, "este es el div de el inicio");

  const formEl: any = div.querySelector("costom-form");

  formEl.addEventListener("submit", () => {
    console.log(formEl, "este es el form");
  });

  container.appendChild(div);
}
