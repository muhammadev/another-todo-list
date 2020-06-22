<template>
  <div class="completed-todos">
    <h2>Your Completed Todos</h2>
    <div v-if="completedTodos.length">
      <ul>
        <li v-for="todo in completedTodos" :key="todo.id">
          <input
            type="checkbox"
            :name="todo.todo"
            :value="todo.todo"
            @change="bringBack(todo.id)"
            checked="true"
          />
          <p>{{ todo.todo }}</p>
        </li>
      </ul>
    </div>
    <div v-else>
      <h4><span>*</span> no completed todos yet <span>*</span></h4>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CompletedTodos",
  computed: {
    ...mapGetters(["completedTodos"])
  },
  methods: {
    ...mapActions(["reactivateTodo"]),
    bringBack(id) {
      this.reactivateTodo(id);
    }
  }
};
</script>

<style lang="sass" scoped>
h4
  margin-left: 20px
  span
    font-size: 25px;

.completed-todos
	width: 50vw
	margin: 0 auto
	text-align: start
	margin-top: 50px
	ul
		li
			list-style: none
			position: relative
			p
				padding: 10px
				margin: 5px 0
				background: #eee
				position: relative
			input
				position: absolute
				left: -30px
				top: 5px
				width: 20px
				height: 20px
</style>
