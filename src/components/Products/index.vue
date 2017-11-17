<template>
  <div class="products">
    <h1>Products</h1>
    <products-table />
  </div>
</template>

<script>
import ProductsTable from "./products-table";
import { db } from '@/config/db';

export default {
  name: "Products",
  components: {
    ProductsTable
  },
  firebase: {

  }
};
</script>

<style>

</style>
