<template>
  <div class="panel panel-default">
    <head-line></head-line>
    <div class="panel-heading">Panel Heading without title</div>
    <div class="panel-body">Panel content</div>
  </div>
</template>

<script>
import header from './headline.vue'
export default {
  name: 'Example',
  data(){
    return {
      msg: 'Basis!!!!'
    }
  },
  components: {
    'head-line': header
  }
}
</script>
