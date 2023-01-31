import { log } from "console";

const state = {
  data: {
    tasks: [
      { id: 1, title: " primer titulo", complete: false },
      { id: 2, title: " segundo titulo", complete: true },
      { id: 3, title: " tercero titulo", delete: true },
    ],
  },

  listeners: [],
  /*esta función intenta cargar datos guardados en el
  almacenamiento local del navegador y actualiza el estado con estos datos.*/
  init() {
    const loalStorage: any = localStorage.getItem("save-state");
    this.setState(JSON.parse(loalStorage));
  },

  /*   esta función devuelve el objeto "data" actual. */
  getState() {
    return this.data;
  },

  /*
   esta función actualiza el estado con el nuevo estado especificado.
   */
  setState(newState) {
    this.data = newState;
    for (const cb of this.listeners) {
      cb(newState);
    }
    localStorage.setItem("save-state", JSON.stringify(newState));
    //  console.log(" soy el state y e cambiado", this.data);
  },

  /*esta función permite que otras partes del código se suscriban a 
  cambios en el estado y se les notifique cuando estos cambios ocurran. */

  subscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },

  /*esta función agrega una nueva tarea a la matriz de tareas con
   los valores especificados para  title. */

  addList(id, title) {
    const currentList = this.getState();
    currentList.tasks.push({ id: id, title: title, complete: false });
    this.setState(currentList);

    //console.log("soy el state y e cambiado addlist", this.data);
  },

  /* esta función devuelve una matriz de tareas que no tienen el 
  valor "delete" establecido en verdadero.*/
  getEnavelTasks() {
    const currentList = this.getState();
    return currentList.tasks.filter((i) => !i.delete);
  },

  /*  esta función busca una tarea específica por su id 
  y cambia su estado "completed" al valor especificado. */
  chargList(id, value) {
    const currentList = this.getState();

    const list = currentList.tasks.find((i) => i.id == id);
    list.complete = value;

    this.setState(currentList);

    // console.log(list, "soy la lista");

    // console.log(id, value);
  },

  /* esta función elimina una tarea específica de la matriz de tareas. */
  deleteItem(iten) {
    const currentList = this.getState();
    const newList = currentList.tasks.filter((i) => i.id != iten);
    currentList.tasks = newList;
    this.setState(currentList);
  },
};
export { state };
