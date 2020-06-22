<template>
  <div class="navbar" :class="{ open: opened }">
    <div class="menu-icon" @click="openMenu">
      <i class="fas fa-bars"></i>
    </div>
    <ul>
      <router-link to="/" exact>Todos</router-link>
      <router-link to="/completed-todos">Completed Todos</router-link>
      <router-link to="/deleted-todos">Deleted Todos</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      opened: false
    };
  },
  methods: {
    openMenu() {
      this.opened = !this.opened;
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  width: 250px;
  height: 100%;
  transition: 0.3s;
  background: #fff;
  position: absolute;
  top: 0;
  padding: 20px 10px;
  text-align: start;
  left: -270px;
  .menu-icon {
    position: absolute;
    top: 30px;
    right: -40px;
    font-size: 20px;
    cursor: pointer;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    & > * {
      display: block;
      text-decoration: none;
      color: #2c3e50;
      text-align: start;
      padding: 10px;
      margin: 10px 0;
      &:hover {
        color: #2c3e50;
        background: #eee;
      }
    }
  }
}
.open {
  left: 0;
}
</style>
