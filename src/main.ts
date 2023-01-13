import {} from "./component/form/index";
import {} from "./component/header/index";
import {} from "./component/todo-item";

import { state } from "./state";
import { init as initHome } from "./page/inicio";

(function () {
  const root: any = document.querySelector("#root") as HTMLElement;
  // console.log(root);

  initHome(root);
})();
