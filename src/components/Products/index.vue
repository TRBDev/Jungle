<template>
  <div class="products">
    <h1>Products</h1>
    <products-table :products="productos" />
  </div>
</template>

<script>
import ProductsTable from "./products-table";
import { db } from "@/config/db";

export default {
  name: "Products",
  components: {
    ProductsTable
  },
  firebase: {
    productos: {
      source: db.ref("productos")
    }
  }
};
</script>

<style>

</style>
