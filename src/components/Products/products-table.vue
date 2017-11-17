<template>
  <div>
    <table class="ui celled padded table">
      <thead>
        <tr><th class="single line">Evidence Rating</th>
        <th>Effect</th>
        <th>Efficacy</th>
        <th>Consensus</th>
        <th>Comments</th>
      </tr></thead>
      <tbody>
        <tr>
          <td>
            <h2 class="ui center aligned header">A</h2>
          </td>
          <td class="single line">
            Power Output
          </td>
          <td>
            <div class="ui star rating" data-rating="3" data-max-rating="3"></div>
          </td>
          <td class="right aligned">
            80% <br>
            <a href="#">18 studies</a>
          </td>
          <td>Creatine supplementation is the reference compound for increasing muscular creatine levels; there is variability in this increase, however, with some nonresponders.</td>
        </tr>
        <tr>
          <td>
            <h2 class="ui center aligned header">A</h2>
          </td>
          <td class="single line">
            Weight
          </td>
          <td>
            <div class="ui star rating" data-rating="3" data-max-rating="3"></div>
          </td>
          <td class="right aligned">
            100% <br>
            <a href="#">65 studies</a>
          </td>
          <td>Creatine is the reference compound for power improvement, with numbers from one meta-analysis to assess potency</td>
        </tr>
      </tbody>
  </table>
</div>
</template>

<script>
export default {
  name: "ProductsTable",
  mounted() {
    $(".ui.rating").rating();
  }
};
</script>

<style>

</style>
