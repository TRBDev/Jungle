
<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-2">
          <vertical-menu/>
        </div>
        <div class="col-10">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VerticalMenu from "@/components/shared/VerticalMenu";

export default {
  name: "app",
  components: {
    VerticalMenu
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
