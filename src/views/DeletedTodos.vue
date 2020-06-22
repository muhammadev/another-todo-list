<template>
  <div class="deleted-todos">
    <h2>Your Deleted Todos</h2>
    <div v-if="deletedTodos.length">
      <ul>
        <li v-for="todo in deletedTodos" :key="todo.id">
          <input
            type="checkbox"
            :name="todo.todo"
            :value="todo.todo"
            @change="undelete(todo.id)"
            checked="true"
          />
          <p>{{ todo.todo }}</p>
        </li>
      </ul>
    </div>
    <div v-else>
      <h4><span>*</span> no deleted todos <span>*</span></h4>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "DeletedTodos",
  computed: {
    ...mapGetters(["deletedTodos"])
  },
  methods: {
    ...mapActions(["undeleteTodo"]),
    undelete(id) {
      this.undeleteTodo(id);
    }
  }
};
</script>

<style lang="sass" scoped>
h4
  margin-left: 20px
  span
    font-size: 25px;

.deleted-todos
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
