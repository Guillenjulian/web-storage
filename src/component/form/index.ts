export class Form extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.render();
  }
  render() {
    const form = document.createElement("form");
    form.classList.add("form");
    form.innerHTML = `
<h1 class = "title"> Mis Pendiente  </h1>
  
<div class="form__div-input">
<label for="text">Agregar tarea</label>
<input class =" form__input" type="text" name="text" id="text" placeholder= " agregar tarea" />
<button class="addButon"> Agregar elemento </button>
</div>

`;

    const style = document.createElement("style");
    style.innerHTML = `
    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        text-align: center;
        gap: 10px;
      }
      .form__div-input {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }
      
      
        .form__input {
          display: flex;
          flex-direction:colum;
          align-items: center;
          justify-content: center;
          width: 100%;
          text-align: center;
          width: 50vh;
          height: 5vh;
        }
       .addButon {
          background-color: #9CBBE9;
          border: none;
          color: black;
          font-size: 16px;
          text-align: center;
          width: 50vh;
          height: 5vh;
        }
      
        .title {
          font-size: 30px;
          font-weight: 600;
          color: #9CBBE9;
          margin: 0;
          padding: 0;
        }
    
    
    `;

    this.shadow.appendChild(form);
    this.shadow.appendChild(style);
  }
}
customElements.define("custon-form", Form);
