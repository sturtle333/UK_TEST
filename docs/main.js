new Vue ({
  el: '#app',
  data: {
    isInit: false,
    purpose: 0,
    lines: [],
    counting: null,
    done: false
  },
  methods: {
    initial: function(){
      var main = this;
      main.lines = [];
      main.purpose = 0;
      for(var j=0;j<15;j++){
        var arr = [];
        var hn = [];
        var line_index = j;
        for(var i=0;i<100;i++){
          var num = Math.random();
          num = num * 10;
          num = parseInt(num);
          arr.push(num);
          if(i!=0){
            hn.push((arr[i-1]+num)%10);
          }
        }
        this.lines.push({
          array: arr,
          answer: [],
          hint: hn,
          message: '',
          lineIndex: line_index,
          leftNum: 99,
          numberIndex: 0,
          timer: 60,
          timeSave: 60,
          score: 0,
          next: function(){
            var i = main.purpose;
            main.purpose = i + 1;
            var parseIndex = this.numberIndex + 1;
            var parseLeft = this.leftNum - 1;
            this.numberIndex = parseIndex;
            this.leftNum = parseLeft;
            this.timeSave = this.timer;
            this.scoring();
            if(this.lineIndex < 14){
              main.lines[this.lineIndex+1].timer = 60 + this.timeSave;
              main.lines[this.lineIndex+1].start();
            }
            else {
              main.done = true;
            }
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
          },
          start: function() {
            main.isInit = true;
            setTimeout(function(){
              document.getElementById("input").focus();
            },10);
            main.counting = setInterval(function(){
              var temp;
              if(main.lines[main.purpose].timer <= 0){
                main.lines[main.purpose].next();
              }
              else {
                temp = main.lines[main.purpose].timer - 1;
              }
              this.timer = temp;
            }.bind(this),1000);
          },
          end: function() {
            if(counting != null){
              clearInterval(main.counting);
            }
          },
          scoring: function(){
            for(var i=0;i<this.answer.length;i++){
              var scoreTemp = this.score;
              if(this.hint[i] == this.answer[i]){
                this.score = scoreTemp + 1;
              }
            }
          }
        });
      }
      clearInterval(main.counting);
    }
  }
})
