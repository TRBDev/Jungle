<template>
<div>
  
<div class="ui left fixed vertical menu">
  <div class="item">
    <img class="ui centered mini image" src="../../assets/logo.png">
  </div>
  <a class="item">Features</a>
  <a class="item">Testimonials</a>
  <a class="item">Sign-in</a>
  <div class="ui dropdown item">
    Categories
    <i class="dropdown icon"></i>
    <div class="menu">
      <a class="item">Electronics</a>
      <a class="item">Automotive</a>
      <a class="item">Home</a>
    </div>
  </div>
</div>


</div>

</template>

<script>

export default {
  name: 'VerticalMenu',
  mounted: function () {
    $(".ui.dropdown").dropdown();
  }

}
</script>

<style>

</style>
