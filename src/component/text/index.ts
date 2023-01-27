import { state } from "../../state";

customElements.define(
  "costom-text",
  class extends HTMLElement {
    tagsName: string;
    shadow: ShadowRoot;
    tags: string[] = ["h1", "p"];
    tag: string = "p";
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });

      if (this.tags.includes(this.getAttribute("tag") as string)) {
        this.tag = this.getAttribute("tag") || this.tag;
      }

      // console.log(this.tag, "este es el tag");

      this.render();
    }

    render() {
      const rootEl = document.createElement(this.tag);
      rootEl.textContent = this.textContent;

      this.shadow.appendChild(rootEl);

      const style = document.createElement("style");
      style.innerHTML = `

      .form {


        }
        .form__label {

        .form__input {


        }
        .form__button {

        }
        `;

      // const formEl: any = this.shadow.querySelector("form") as HTMLElement;
      // formEl.addEventListener("submit", (e: any) => {
      //   e.preventDefault();
      //   const text = e.target.text.value;
      //   state.setState({
      //     ...state.getState(),
      //     list: [...state.getState().list, { text, complete: false }],
      //   });
      //   console.log(text, "este es el text");
      // });

      this.shadow.appendChild(style);
    }
  }
);
