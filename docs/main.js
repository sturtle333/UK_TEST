new Vue ({
  el: '#app',
  data: {
    lines: []
  },
  methods: {
    initial: function(){
      this.lines = [];
      for(var j=0;j<15;j++){
        var arr = [];
        var line_index = j;
        for(var i=0;i<100;i++){
          var num = Math.random();
          num = num * 10;
          num = parseInt(num);
          arr.push(num);
        }
        this.lines.push({
          array: arr,
          answer: [],
          message: '',
          lineIndex: line_index,
          leftNum: 100,
          numberIndex: 0,
          insert: function () {
            
          }
        });
      }
    }
  }
})
