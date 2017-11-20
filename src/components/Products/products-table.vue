<template>
  <div>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nombre</th>
          <th scope="col">Categoría</th>
          <th scope="col">Fabricante</th>
          <th scope="col">Precio</th>
          <th scope="col">¿En stock?</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index">
          <th scope="row">{{index}}</th>
          <td>{{product.nombre}}</td>
          <td>{{product.categoria}}</td>
          <td>{{product.fabricante}}</td>
          <td>{{product.precio}} EUR</td>
          <td v-if="product.stock > 0">
            <span>
              <i class="fa fa-check"></i>
            </span>
          </td>
          <td v-else>
            <span>
              <i class="fa fa-times"></i>
            </span>
          </td>
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

<style scoped>
.fa-check {
  color: green;
}
</style>
