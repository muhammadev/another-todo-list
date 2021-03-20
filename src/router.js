import Vue from "vue";
import Router from "vue-router";
import Todos from "./views/Todos.vue";
import CompletedTodos from "./views/CompletedTodos.vue";
import DeletedTodos from "./views/DeletedTodos.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "todos",
      component: Todos
    },
    {
      path: "/completed-todos",
      name: "completed-todos",
      component: CompletedTodos
    },
    {
      path: "/deleted-todos",
      name: "deleted-todos",
      component: DeletedTodos
    }
  ]
});
