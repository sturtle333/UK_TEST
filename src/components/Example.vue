<template>
  <div id="components">
    <head-line></head-line>
    <div class="container theme-showcase" role="main">
      <contents-welcome></contents-welcome>
    </div>
  </div>
</template>

<script>
import header from './header.vue'
import contents from './contents.vue'
import welcome from './welcome.vue'

export default {
  name: 'Example',
  data(){
    return {
      msg: 'Basis!!!!'
    }
  },
  components: {
    'head-line': header,
    'contents-content': contents,
    'contents-welcome': welcome
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
