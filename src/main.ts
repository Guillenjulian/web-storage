import "./component/header";
import "./component/todo-item";
import "./component/form";

import { state } from "./state";

import { initHome } from "./page/inicio";

(function () {
  const root: any = document.querySelector("#root") as HTMLElement;
  //console.log(root);
  state.init();
  initHome(root);
})();
