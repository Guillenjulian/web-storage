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
<h1 class = "title"> Mis  Pendiente  </h1>
  <div class="form__content">
  <div class="form__div-input">
  
  <label class ="form__div-label" for="text">Agregar tarea</label>


  <input class =" form__input" type="text" name="text" id="text" placeholder= " agregar tarea" />
  <button class="addButon"> Agregar elemento </button>
  </div>
  </div>

`;

    const style = document.createElement("style");
    style.innerHTML = `
    
    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 10px;
        width: 100vh;
        height: 39vh;
      }
      @media (min-width: 960px) {
        .form {
          
        }
      }
      
      .title {
        font-size: 52px;
        font-weight: 700;
        color: #00000;
        margin-top: 41px;
        margin-bottom: 25px;
        text-align: left;
        height: 122px;
        width: 271px;
      }
      @media (min-width: 960px) {
        .title {
          width: 100%;
        }
        } 

      .form__content {

      }
      @media (min-width: 960px) {
        .form__content {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: end;
          gap: 29px;
        }
      }
      .form__div-input {
        display: flex;
        flex-direction: column;
        text-align: left;
      }
      @media (min-width: 960px) {
        .form__div-input {
          width: 100%;
          align-items:text-end;
        }}
  
        .form__input {
          display: flex;
          flex-direction:colum;
          align-items: center;
          justify-content: center;
          width: 100%;
          text-align: center;
          width: 312px;
          height: 55px;
          gap: 10px;
          border-radius: 4px;

        }
        @media (min-width: 960px) {
          .form__input {
            width: 100%;

          }
        }

       .addButon {
          background-color: #9CBBE9;
          border:4px #9CBBE9;
          border-radius: 4px;
          color: black;
          font-size: 16px;
          text-align: center;
          width: 312px;
          height: 55px;
          margin-top: 15px;
        }
        
      
    
    
    `;

    this.shadow.appendChild(form);
    this.shadow.appendChild(style);
  }
}
customElements.define("custon-form", Form);
