<template>
  <div>
    <table class="ui celled padded table">
      <thead>
        <tr class="center aligned">
        <th>Nombre</th>
        <th>Categoría</th>
        <th>Fabricante</th>
        <th>Precio</th>
      </tr></thead>
      <tbody>
        <tr class="center aligned" v-for="(product, index) in products" :key="index">
          <td class="center aligned">
            {{product.nombre}}
          </td>
          <td>
            {{product.categoria}}
          </td>
          <td class="center aligned">
            <a href="#">{{product.fabricante}}</a>
          </td>
          <td>{{product.precio}}€</td>
        </tr>
      </tbody>
  </table>
</div>
</template>

<script>
export default {
  name: "ProductsTable",
  props: ["products"]
};
</script>

<style>

</style>
