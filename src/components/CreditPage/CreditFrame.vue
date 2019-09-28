<template>
  <div id="components">
    <head-line></head-line>
    <div class="container theme-showcase" role="main">
      <contents-credit></contents-credit>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import header from '../Framecomponents/header.vue'
import credit from './credit.vue'
import footer from '../Framecomponents/footer.vue'

export default {
  name: 'CreditFrame',
  created () {
    document.title = "UK Test - 제작자";
  },
  components: {
    'head-line': header,
    'contents-credit': credit,
    'nav-footer': footer
  }
}
</script>

<style>
  #components {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>
