<template>
  <div class="npt-field">
    <input
      @keyup="newTodo"
      class="main-npt"
      type="text"
      placeholder="What do you got to do?"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "InputField",
  methods: {
    ...mapActions(["addTodo"]),
    newTodo(e) {
      if (e.keyCode == 13 && e.target.value) {
        this.addTodo(e.target.value);
        e.target.value = ""
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.main-npt
	color: #666
	width: 50vw
	height: 30px
	padding: 10px 15px
	font-size: 16px
	border: 1px solid #ccc
	border-radius: 50px
	transition: .3s
	&:focus
		outline: none
		box-shadow: 0 0 3px 2px #eee inset
		padding: 10px 25px
</style>
