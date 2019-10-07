<template>
  <div id="contents">
    <is-loading v-if="!isInit"></is-loading>
    <div id="contents-nav" v-if="isInit">
      <nav class="navbar navbar-inverse timer">
        <div class="timer-counter"><span>{{ timeLeft }}</span></div>
        <div><div class="line-counter">남은 수열 : {{ 10 - index }}</div></div>
        <div class="timer-btn">
          <div :class="{chosen: isStart}"><button @click="onStart" style="color: #B7F0B1;">시작</button></div>
          <div :class="{chosen: !isStart}"><button @click="onStop" style="color: #FFA7A7;">종료</button></div>
        </div>
      </nav>
    </div>
    <div id="contents-content">
    <div v-for="line in lines">
      <div class="progress" v-if="line.index == index">
         <div class="progress-bar" role="progressbar" :aria-valuenow="line.nowIndex" aria-valuemin="0" aria-valuemax="100" :style="{width: line.nowIndex + '%'}"><span class="sr-only">{{ line.nowIndex }}% Complete</span></div>
      </div>
      <div class="test-line" v-if="line.index == index">
        <div class="test-line-done">
          <p>{{ line.doneStr }}</p>
        </div>
        <div class="test-line-left">
          <p>{{ line.leftStr }}</p>
        </div>
      </div>
      <div class="input-numbers" v-if="line.index == index"><p>{{ line.values[line.nowIndex - 5] }}</p><p>{{ line.values[line.nowIndex - 4] }}</p><p>{{ line.values[line.nowIndex - 3] }}</p><p>{{ line.values[line.nowIndex - 2] }}</p><p>{{ line.values[line.nowIndex - 1] }}</p></div>
      <div class="input-group test-input" v-if="line.index == index && isStart === true">
        <input id="input-box" v-model.trim="msg" @keyup="line.insert()" type="number" autocomplete="off" pattern="\d{1}[0-9]" class="input-box" placeholder="여기에 숫자 입력" aria-label="여기에 숫자 입력" autofocus></input>
        <button class="btn btn-outline-secondary" type="button" @click="line.undo()">되돌리기</button>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Loading from '../errorPage/loading.vue'

export default {
  name: 'contents',
  data () {
    return {
      min: 0,
      sec: 0,
      isStart: false,
      lines: [],
      isInit: false,
      index: 0,
      msg: null,
      timer: null
    }
  },
  methods: {
    onStart: function(){
      this.isStart = true;
      this.timeIsTicking();
    },
    onStop: function(){
      this.isStart = false;
      this.min = 0;
      this.sec = 0;
      clearInterval(this.timer);
    },
    timeIsTicking: function(){
      this.min = 1;
      this.sec = 0;
      this.timer = setInterval(function(){
        if(this.sec !== 0) {
          this.sec = this.sec-1;
        }
        else if (this.min !== 0) {
          this.min = this.min - 1;
          this.sec = 59;
        }
        else {
          if(this.index < 9) {this.endOfLine();}
          else {this.onStop();}
        }
      }.bind(this),10);
    },
    endOfLine: function(){
      clearInterval(this.timer);
      this.index = this.index + 1;
      this.timeIsTicking();
      setTimeout(function(){
        document.getElementById("input-box").focus();
      },10);
    }
  },
  computed: {
    timeLeft: function () {
      var tmin, tsec;
      if (this.min<10) {tmin = '0' + this.min;}
      else {tmin = String(this.min);}
      if (this.sec<10) {tsec = '0' + this.sec;}
      else {tsec = String(this.sec);}

      return tmin + ' : ' + tsec;
    }
  },
  mounted (){
    var main = this;
    for(var i=0;i<10;i++){

    var line = {
      index: i,
      nowIndex: 0,
      numbers: [],
      values: [],
      leftStr: '',
      doneStr: '',
      answers: [],
      leftNum: 99,

      insert: function(){
        var inputmsg = parseInt(main.msg.slice(0,1));
        setTimeout(function(){
          main.msg = null;
        },1);
        this.values.push(inputmsg);
        this.doneStr = this.doneStr + this.numbers[this.nowIndex];
        this.nowIndex = this.nowIndex + 1;
        this.leftStr = this.leftStr.slice(1, 100);

        if(this.nowIndex >= 100){
          main.endOfLine();
        }
      },
      undo: function() {
        alert("hi");
      }
    };
      for(var j=0;j<100;j++){
        var num = Math.random();
        num = num * 10;
        num = parseInt(num);
        line.numbers.push(num);
        line.leftStr = line.leftStr + num;
        if(j!=0){
          line.answers.push((line.numbers[j-1]+num)%10);
        }
      }
      this.lines.push(line);
    }
    this.isInit = true;
  },
  components: {
    'is-loading': Loading
  }
}
</script>

<style>
  #contents {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .timer {
    display: flex;
    flex-direction: row;
    align-items: stretch;
  }
  .line-counter {
    display: inline-block;
    color: white;
    vertical-align: middle;
  }
  .timer-counter {
    color: black;
    background-color: white;
    height: inherit;
    font-size: 4rem;
    text-align: center;
    margin: 1rem;
    margin-right: 5rem;
    border-radius: 5px;
  }
  .timer-counter span {
    margin-left: 4rem;
    margin-right: 4rem;
  }
  .timer-btn {
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: flex-end;
    padding-right: 2rem;
    align-items: stretch;
  }
  .timer-btn button {
    height: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
    background-color: inherit;
    color: white;
    font-size: 2rem;
    border: none;
  }
  .chosen {
    background-color: #000000;
    font-weight: bold;
  }
  .test-line {
    display: flex;
    flex-direction: row;
    font-size: 7rem;
  }
  .test-line-done {
    display: flex;
    flex-direction: row-reverse;
    color: #BDBDBD;
    flex: 2;
    overflow: hidden;
  }
  .test-line-done p {
    text-align: right;
  }
  .test-line-left {
    display: inline-block;
    flex: 7;
    overflow: hidden;
  }
  .test-input {
    display: flex;
    flex-direction: row;
    margin-top: 5%;
  }
  .input-box{
    padding: 2%;
    border: 1px solid gray;
    border-radius: 5px;
  }
  .input-numbers {
    text-align: center;
  }
  .input-numbers p{
    display: inline-block;
    margin: 0 1rem;
    font-size: 3rem;
  }
</style>
