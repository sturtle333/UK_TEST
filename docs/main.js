new Vue ({
  el: '#app',
  data: {
    isInit: false,
    purpose: 0,
    lines: [],
    timer: {
      sec: 60
    }
  },
  methods: {
    initial: function(){
      var main = this;
      main.lines = [];
      main.isInit = true;
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
          hint: [],
          message: '',
          lineIndex: line_index,
          leftNum: 99,
          numberIndex: 0,
          next: function(){
            var i = main.purpose;
            main.purpose = i + 1;
            var parseIndex = this.numberIndex + 1;
            var parseLeft = this.leftNum - 1;
            this.numberIndex = parseIndex;
            this.leftNum = parseLeft;
            setTimeout(function(){
              document.getElementById("input").focus();
            },10);
            return;
          },
          insert: function (){
            if(this.leftNum <= 1){
              this.next();
              return;
            }
            setTimeout(function(){
              var parseMs = parseInt(this.message);
              var parseIndex = this.numberIndex + 1;
              var parseLeft = this.leftNum - 1;
              this.answer.push(parseMs);
              this.message = '';
              this.numberIndex = parseIndex;
              this.leftNum = parseLeft;
            }.bind(this),10);
          },
          undo: function(){
            var parseIndex = this.numberIndex - 1;
            if(parseIndex==-1) {
              this.message = '';
              return;
            }
            var parseLeft = this.leftNum + 1;
            this.numberIndex = parseIndex;
            this.leftNum = parseLeft;
            this.message = '';
            this.answer.pop();
          }
        });
      }
    },
    start: function() {
      alert("start");
    },
    end: function() {
      alert("end");
    }
  }
})
