new Vue ({
  el: '#app',
  data: {
    message: 'Hello,world!!',
    arr: []
  },
  methods: {
    initial: function(){
      this.arr = [];
      for(var j=0;j<15;j++){
        var array = [];
        for(var i=0;i<100;i++){
          var num = Math.random();
          num = num * 10;
          num = parseInt(num);
          array.push(num);
        }
        this.arr.push(array);
      }
    }
  }
})
