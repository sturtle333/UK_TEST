<template>
  <div id="components">
    <head-line></head-line>
    <div class="container theme-showcase" role="main">
      <contents-content></contents-content>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import header from '../Framecomponents/header.vue'
import contents from './contents.vue'
import footer from '../Framecomponents/footer.vue'

export default {
  name: 'TestFrame',
  created () {
    document.title = "UK Test - 테스트하기";
  },
  components: {
    'head-line': header,
    'contents-content': contents,
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
