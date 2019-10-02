<template>
  <div id="components">
    <head-line></head-line>
    <div class="container theme-showcase" role="main">
      <contents-randomnumber></contents-randomnumber>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import header from '../Framecomponents/header.vue'
import randomnumber from './randomnumber.vue'
import Simple from './simpleGen.vue'
import footer from '../Framecomponents/footer.vue'

export default {
  name: 'RandomnumberFrame',
  created () {
    document.title = "UK Test - 랜덤숫자 발생기";
  },
  components: {
    'head-line': header,
    'contents-randomnumber': randomnumber,
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
