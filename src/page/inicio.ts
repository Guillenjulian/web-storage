import { state } from "../state";

export function initHome(container) {
  const div = document.createElement("div");

  const style = document.createElement("style");
  //  console.log(div, "soy el div");

  const tasks = state.getEnavelTasks();

  div.innerHTML = ` 
  <custon-header></custon-header>
    <h1> Mis Pendiente  </h1>
    <form class="form">
     
    <label for="text">Agregar tarea</label>
      <div class="form__div-input">
      <input class =" form__input" type="text" name="text" id="text" placeholder= " agregar tarea" />
    <button class="addButon"> Agregar elemento </button>
    </div>
    </form>
    <ul class = "lista"> </ul>

  `;
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

  `;
  const lista = div.querySelector(".lista") as HTMLElement;
  // console.log(lista, "soy la lista");

  function createTrasks(items) {
    // const itemsMapeados = items.map(
    //   (t) =>
    //     `
    //    <custon-todo-item title="${t.title}" checket = "${
    //       t.complete || t.delete
    //     }"></custon-todo-item>

    //   `
    // );
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

  const addButon = div.querySelector(".addButon") as HTMLElement;

  addButon.addEventListener("click", () => {
    state.addList(
      Math.floor(Math.random() * 100),
      "title " + Math.floor(Math.random() * 100)
    );
    // console.log(
    //   state.addList("title " + Math.random()),
    //   "soy el estado del add"
    // );
    // console.log(addButon, "soy el boton");
  });
  div.appendChild(style);
  container.appendChild(div);
}
