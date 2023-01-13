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
    <ul>
    <li>

    <input type="checkbox" id="checkbox" name="checkbox" value="checkbox">

    <label for="checkbox">${list[listLength].text}</label>
    </li>
    </ul>

   
    `;
    style.innerHTML = `
    
    
      `;

    div.appendChild(style);
    this.firstChild?.remove();
    this.appendChild(div);
  }
}
customElements.define("custon-list", ListItem);
