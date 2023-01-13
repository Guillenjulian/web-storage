const state = {
  data: {
    trash: [
      { id: 1, title: " primer titulo", complete: false },
      { id: 2, title: " segundo titulo", complete: false },
      { id: 3, title: " tercero titulo", complete: false },
    ],
  },

  listeners: [],
  /*esta función intenta cargar datos guardados en el
  almacenamiento local del navegador y actualiza el estado con estos datos.*/
  init() {
    const loalStorage = localStorage.getItem("state");
    this.setState(loalStorage ? JSON.parse(loalStorage) : this.data);
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
      cb();
    }
    console.log(" soy el state y e cambiado", this.data);
  },
  /*esta función permite que otras partes del código se suscriban a 
  cambios en el estado y se les notifique cuando estos cambios ocurran. */

  subscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },
  /*esta función agrega una nueva tarea a la matriz de tareas con
   los valores especificados para id y title. */

  addList(id, title) {
    const currentList = this.getState();
    currentList.trash.push({ id, title, complete: false });
    this.setState(currentList);
  },
  /* esta función devuelve una matriz de tareas que no tienen el 
  valor "delete" establecido en verdadero.*/
  deletList() {
    const currentList = this.getState();
    return currentList.filter((i) => !i.delete);
  },
  /*  esta función busca una tarea específica por su id 
  y cambia su estado "completed" al valor especificado. */
  chargList(id, value) {
    const currentList = this.getState();
    const list = currentList.find((i) => {
      return i.id == id;
    });
    list.complete = value;
    this.setState(currentList);
  },

  /* esta función elimina una tarea específica de la matriz de tareas. */
  dellete(iten) {
    const currentList = this.getState();
    const list = currentList.filter((i) => {
      return i.text !== iten;
    });
    this.setState(list);
  },
};
export { state };
