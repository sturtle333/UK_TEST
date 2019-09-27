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
import header from './header.vue'
import contents from './contents.vue'
import welcome from './welcome.vue'
import footer from './footer.vue'

export default {
  name: 'Framework',
  components: {
    'head-line': header,
    'contents-content': contents,
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
