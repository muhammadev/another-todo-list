<template>
	<div class="todos">	
		<InputField />
		<TodoList/>
	</div>
</template>

<script>
// @ is an alias to /src
import InputField from "@/components/InputField.vue";
import TodoList from "@/components/TodoList.vue";

export default {
  name: "Home",
  components: {
  	InputField,
  	TodoList
  },
  mounted() {
  	this.$on("newtodo", function(newtodo) {
  		this.todos.push(newtodo)
  	})
  	this.$on("filterTodos", function(completedTodos) {
  		this.todos = this.todos.filter(todo => !completedTodos.includes(todo))
  		this.$parent.$emit("new-completed-todo", completedTodos);
  		console.log("filterTodos event fired")
  	})
  }
};
</script>