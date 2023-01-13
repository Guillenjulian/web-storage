import { state } from "../../state";

customElements.define(
  "costom-form",
  class extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });
    title: string;
    constructor() {
      super();

      this.render();
    }
    coonecteCallback() {
      this.title = this.getAttribute("title") || "Nuevo pendiente";
      this.id = this.getAttribute("id") || "form";
      this.checkbox = this.getAttribute("checkbox") || "checkbox";

      this.render();
    }
    addCallback() {
      const form: any = this.shadow.querySelector(".form");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const text = form.text.value;

        console.log(e.target, "form", text);
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
