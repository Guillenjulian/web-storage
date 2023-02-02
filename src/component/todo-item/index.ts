import { state } from "../../state";
const deleteImg = require("../../image/delete1.png");

customElements.define(
  "custon-todo-item",
  class extends HTMLElement {
    shadow: ShadowRoot;
    title: string;
    checked: boolean = false;

    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
      this.title = this.getAttribute("title") || "";
      this.id = this.getAttribute("id") || "";

      this.checked = this.hasAttribute("checked");
      // console.log(this.checked, "soy el checked");

      const style = document.createElement("style");
      style.innerHTML = `
      .root {
        display: flex;
        justify-content: space-evenly;
        gap: 2rem;
        width:311px;
        height:111px;
        font-weight: 500;
        border-radius: 4px;
        background-color: #fff599;
        padding: 22px 13px;
        margin: 10px;
        font-size: 18px;
        }
        @media (min-width: 960px) {
          .root {
        padding:0;
        margin: 0;
        
          }

        }




        .root_checked {
          display: flex;
          flex-direction: column;
          justify-content: space-Evenly;
          align-items: center;
        }
          
      .titulo {
        font-family: 'Roboto', sans-serif;
        font-weight: 00;
        color: #000000;
        text-align: center;
        font-size: 18px;
        

      }

      .titulo.checked {
        text-decoration: line-through;
      } 
      
      .root:hover .deleteTag {
      display: block;; 
      }
       .deleteTag {
          display: none;
        }

       
       `;
      this.render();
      this.shadow.appendChild(style);
    }

    addCallback() {
      const checkbox = this.shadow.querySelector(".checkbox-input") as any;
      checkbox.addEventListener("click", (e) => {
        const checked = e.target as any;
        const event = new CustomEvent("change", {
          detail: {
            id: this.id,
            value: checked.checked,
          },
        });
        this.dispatchEvent(event);
        // console.log(checked.checked, "soy el checkbox");
      });
    }
    render() {
      const div = document.createElement("div");
      div.classList.add("root");
      div.innerHTML = `
      
      <h4 class = "titulo ${this.checked ? "checked" : ""}">
      ${this.title}
      </h4>
      
      <div class = "root_checked"> 
       <input  class= "checkbox-input"  type="checkbox"
        ${this.checked ? "checked" : ""}/>

        <a class = "deleteTag" href = "#" ><img src ="${deleteImg}" alt= "Delete" ></a>
        
        
      </div >`;

      const deleteTag = div.querySelector(".deleteTag");

      deleteTag?.addEventListener("click", (e) => {
        e.preventDefault();
        //  console.log(this.getAttribute("id"), "soy el id");
        localStorage.removeItem(this.getAttribute("id") || "");
        state.deleteItem(this.getAttribute("id"));
      });

      this.shadow.appendChild(div);
      this.addCallback();
    }
  }
);
