import { route } from "quasar/wrappers";
import {
  createRouter,
  createWebHashHistory,
  createWebHistory
} from "vue-router";

import * as fn from "@skylib/functions/es/function";
import * as o from "@skylib/functions/es/object";

// eslint-disable-next-line import/no-relative-parent-imports
import { routes } from "../routes";

// eslint-disable-next-line import/no-default-export
export default route(() => {
  const createHistory = fn.run(() => {
    switch (process.env["VUE_ROUTER_MODE"]) {
      case "history":
        return createWebHistory;

      case "hash":
        return createWebHashHistory;

      default:
        throw new Error("Unexpected router mode");
    }
  });

  return createRouter({
    history: createHistory(
      process.env["MODE"] === "ssr" ? undefined : process.env["VUE_ROUTER_BASE"]
    ),
    routes: o.unfreeze(routes),
    scrollBehavior() {
      return { left: 0, top: 0 };
    }
  });
});
