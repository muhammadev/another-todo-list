<template>
  <div class="list-cont">
    <h3>Your Todos</h3>
    <div v-if="todos.length">
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          <input
            type="checkbox"
            :id="todo.id"
            @change="filterTodos(todo.id)"
          />{{ todo.todo }}
          <div v-if="todo.id == 1">
            <div class="settings" :class="{opened: settings}">
              <i @click="openSettings" class="fas fa-ellipsis-v"></i>
              <ul>
                <li>Mark as completed</li>
                <li>Archieve</li>
                <li>Schedule</li>
                <li>Delete</li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>
      <div>Completed All! Good Job!</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TodoList",
  data() {
    return {
      settings: false
    };
  },
  computed: mapGetters(["todos"]),
  methods: {
    ...mapActions(["disactivateTodo"]),
    filterTodos(id) {
      this.disactivateTodo(id);
    },
    openSettings(e) {
      console.log(e.target.nextSibling.style);
      e.target.nextSibling.style.display = "inline-block !important";
    }
  }
};
</script>

<style lang="scss" scoped>
.list-cont {
	width: 50vw;
	margin: 0 auto;
	text-align: start;
	margin-top: 30px;
	ul {
		li {
			list-style: none;
			padding: 10px;
			margin: 5px 0;
			background: #eee;
			position: relative;
			display: flex;
			align-items: center;
			input {
				position: absolute;
				left: -30px;
				top: 5px;
				width: 20px;
				height: 20px;
      }
      .settings {
        background: #fff;
        position: absolute;
        top: 0;
        right: 0;
        margin: 10px;
        padding:0;
        i {
          position: absolute;
          right: 0;
          cursor: pointer;
        }
        ul {
          display: none;
          list-style: none;
          margin: 0; padding:5px;
          li {
            margin:5px; padding:5px;
            display: block;
          }
        }
      }
      .opened {
        display: block !important;
      }
    }
  }
}
</style>
