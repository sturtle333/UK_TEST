<template>
  <div class="panel panel-default">
    <nav-header></nav-header>
    <div class="panel-heading">Panel Heading without title</div>
    <div class="panel-body">Panel content</div>
  </div>
</template>

<script>
import header from './child/header.js';
export default {
  name: 'Example',
  data(){
    return {
      msg: 'Basis!!!!'
    }
  },
  component:{
    'nav-header': header
  }
}
</script>
