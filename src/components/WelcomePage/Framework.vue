<template>
  <div id="components">
    <head-line></head-line>
    <div class="container theme-showcase" role="main">
      <contents-welcome></contents-welcome>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import header from '../Framecomponents/header.vue'
import welcome from './welcome.vue'
import footer from '../Framecomponents/footer.vue'

export default {
  name: 'Framework',
  created () {
    document.title = "UK Test - 무한으로 즐겨요!";
  },
  components: {
    'head-line': header,
    'contents-welcome': welcome,
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
