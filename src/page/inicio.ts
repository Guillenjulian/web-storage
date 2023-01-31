import { state } from "../state";

export function initHome(container) {
  const div = document.createElement("div");

  const style = document.createElement("style");
  //  console.log(div, "soy el div");

  const tasks = state.getEnavelTasks();

  div.innerHTML = ` 

  <div class="container"> 
  <custon-header></custon-header>
  <div class = " conteiner-form">

  <custon-form class = "custon-form"></custon-form>
  <ul class = "lista"> </ul>
  
  
  </div>  
  </div>  
  `;

  style.innerHTML = `

  .container {
display: flex;
flex-direction: column;
justify-content: space-between;
 gap: 1.5rem;

  }
  .conteiner-form {
    display: flex;

    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    gap: 1.5rem;
  }
  .lista {
    padding-inline-start: 0;
  }


  `;
  const lista = div.querySelector(".lista") as HTMLElement;
  // console.log(lista, "soy la lista");

  function createTrasks(items) {
    const itemsMapeados = items.map(
      (t) =>
        `
       <custon-todo-item title="${t.title}" checket = "${
          t.complete || t.delete
        }"></custon-todo-item>

      `
    );
    lista.innerHTML = "";
    for (const iten of items) {
      const todoItem = document.createElement("custon-todo-item");
      todoItem.setAttribute("title", iten.title);
      todoItem.setAttribute("id", iten.id);

      if (iten.complete || iten.delete) {
        todoItem.setAttribute("checked", "true");
      }
      todoItem.addEventListener("change", (e: any) => {
        state.chargList(e.detail.id, e.detail.value);
        // console.log(e, "soy el evento 1");
      });
      todoItem.addEventListener("delete", (e: any) => {
        state.deleteItem(e.detail.id);
        console.log(e, "soy el evento 2");
      });
      lista.appendChild(todoItem);
    }

    // lista.innerHTML = itemsMapeados.join("");
  }

  // console.log(tesks, " soy el estado");
  state.subscribe(() => {
    const crateEl = createTrasks(state.getEnavelTasks());
    // console.log(crateEl, "soy el estado");
  });
  createTrasks(tasks);

  // const form = div.querySelector(".form") as HTMLElement;
  // form.addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   const input = div.querySelector("#text") as HTMLInputElement;
  //   console.log(input.value, "soy el input", input);

  //   const value = input.value;
  //   state.addList(Math.floor(Math.random() * 100), value);
  //   input.value = "";

  //   //console.log(value, "soy el valor");
  // });

  const tag = div
    ?.querySelector("custon-form")
    ?.shadowRoot?.querySelector(".form__div-input")
    ?.querySelector(".addButon");

  tag?.addEventListener("click", (e) => {
    e.preventDefault();
    const inputEl = div
      ?.querySelector("custon-form")
      ?.shadowRoot?.querySelector(".form__input");

    // console.log(inputEl, "soy el input");

    state.addList(Math.floor(Math.random() * 100), (inputEl as any).value);
    (inputEl as any).value = "";
  });

  div.appendChild(style);
  container.appendChild(div);
}
