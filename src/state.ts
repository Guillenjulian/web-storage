const state = {
  data: {
    name: "name",
  },

  listeners: [],
  getState() {
    return this.data;
  },
  setState(newState) {
    this.data = newState;
    for (const cb of this.listeners) {
      cb();
    }
    console.log(" soy el state y e cambiado", this.data);
  },
  subscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },
  addItem(item: string) {
    const cs = this.getState();
    cs.nombre.push(item);
    this.setState(cs);
  },
};
export { state };
