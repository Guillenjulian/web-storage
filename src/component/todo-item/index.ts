import { state } from "../../state";

export class ListItem extends HTMLElement {
  shadow = this.attachShadow({ mode: "open" });

  constructor() {
    super();
    this.connecteCallback();
  }

  connecteCallback() {
    state.subscribe(() => {
      this.render();
    });
  }

  // addEventListener del checkbox

  render() {
    const list = state.getState().list;
    const listLength = list.length - 1;
    const div = document.createElement("div");
    const style = document.createElement("style");
    div.className = "lista";

    div.innerHTML = `
    
    <div>    ${list.map((item) => {
      return `<div class="item" >       
      <input class="checkbox" type="checkbox" >
      <label class="label" id=${listLength} for="checkbox">
      ${item}
      </label>      
      </div>`;
    })}
    </div>
    `;
    style.innerHTML = `
    
    
      `;

    div.appendChild(style);
    this.firstChild?.remove();
    this.appendChild(div);
  }
}
customElements.define("custon-item", ListItem);
