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
  
  <label class ="form__div-label" for="text">Agregar tarea</label>
  <div class="form__div-input">


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
           text-align: left; 
      }
      @media (min-width: 960px) {
        .form__content {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        
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
        flex-direction: row;
        align-items: center;

        }}
  
        .form__input {
        height: 55px;
          border-radius: 4px;
          font-size: 2.1rem;

        }
        @media (min-width: 960px) {
          .form__input {
         

          }
        }

       .addButon {
          background-color: #9CBBE9;
          border:4px #9CBBE9;
          border-radius: 4px;
          color: black;
          font-size: 16px;
          text-align: center;
          height: 55px;
          margin-top: 10px;
          
        }
        
        @media (min-width: 960px) {
          .addButon {
            margin-left: 10px;
      
margin-top: 0px;
          }
        }
        
      
    
    
    `;

    this.shadow.appendChild(form);
    this.shadow.appendChild(style);
  }
}
customElements.define("custon-form", Form);
