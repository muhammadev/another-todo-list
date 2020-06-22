import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
	todos: [
		{
			todo: "Drink More Water",
			id: 1,
			active: true,
			archieved: false,
			deleted: false,
			scheduled: false
		},
		{
			todo: "Practive Everyday",
			id: 2,
			active: true,
			archieved: false,
			deleted: false,
			scheduled: false
		},
		{
			todo: "Never Stop Programming",
			id: 3,
			active: true,
			archieved: false,
			deleted: false,
			scheduled: false
		},
		{
			todo: "Be Productive",
			id: 4,
			active: true,
			archieved: false,
			deleted: false,
			scheduled: false
		},
		{
			todo: "tst",
			id: 5,
			active: false,
			archieved: false,
			deleted: true,
			scheduled: false
		}
	]
};

const getters = {
	todos: state => {
		return state.todos.filter(todo => todo.active && !todo.archieved && !todo.deleted);
	},
	completedTodos: state => {
		return state.todos.filter(todo => !todo.active && !todo.archieved && !todo.deleted);
	},
	archievedTodos: state => {
		return state.todos.filter(todo => todo.archieved && !todo.deleted);
	},
	deletedTodos: state => {
		return state.todos.filter(todo => todo.deleted);
	}
};

const actions = {
	addTodo(context, payload) {
		context.commit("addTodo", payload)
	},
	disactivateTodo(context, payload) {
		context.commit('disactivateTodo', payload)
	},
	reactivateTodo(context, payload) {
		context.commit('reactivateTodo', payload)
	},
	undeleteTodo(context, payload) {
		context.commit("undeleteTodo", payload)
		context.commit("reactivateTodo", payload)
	}
};

const mutations = {
	addTodo(state, payload) {
		state.todos.push({
			todo: payload,
			id: (state.todos.length+1),
			active: true,
			archieved: false,
			deleted: false,
			scheduled: false
		})
	},
	disactivateTodo(state, payload) {
		state.todos.forEach(todo => {
			if (todo.id == payload) {
				todo.active = false;
				console.log("disactivation worked!")
			}
		})
	},
	reactivateTodo(state, payload) {
		state.todos.forEach(todo => {
			if (todo.id == payload) {
				todo.active = true;
				console.log("reactivation worked!")
			}
		})
	},
	undeleteTodo(state, payload) {
		state.todos.forEach(todo => {
			if (todo.id == payload) {
				todo.deleted = false;
				console.log("undeleting worked!")
			}
		})
	}
};

export default new Vuex.Store({
	strict: true,
  state,
  getters,
  actions,
  mutations
});
