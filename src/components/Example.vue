<template>
  <div id="components">
    <head-line></head-line>
    <head-banner></head-banner>
    <contents-content></contents-content>
  </div>
</template>

<script>
import header from './header.vue'
import banner from './banner.vue'
import contents from './contents.vue'

export default {
  name: 'Example',
  data(){
    return {
      msg: 'Basis!!!!'
    }
  },
  components: {
    'head-line': header,
    'head-banner': banner,
    'contents-content': contents
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
