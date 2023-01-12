import { state } from "../../state";

customElements.define(
  "costom-form",
  class extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });

    constructor() {
      super();

      this.render();
    }

    connectedCallback() {
      const form: any = this.shadow.querySelector(".form");
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        const f = e.target as any;

        state.addItem(f.text.value);
        console.log(f.text.value, "form");
      });
    }
    render() {
      this.shadow.innerHTML = `
        <form class="form">
        <label class="form__label">Nuevo pendiente</label>
        <input  name="text" class="form__input"  placeholder="Nuevo pendiente" />
        <button class="form__button">Agregar</button>
        </form>
        `;

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

      this.shadow.appendChild(style);
    }
  }
);
