<template>
  <div id="Advance">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>
            <div class="advance-header">
              <div class="advance-desc">
                <span>원하는 수열의 길이 입력 :</span>
                <span>수열의 갯수 입력 :</span>
              </div>
              <div class="advance-input">
                <input type="number" v-model="numbers" @focus="numbers = null"  @blur="numbers = numbers === null? 100 : numbers;" @keyup="checkNumbers(numbers)"></input>
                <input type="number" v-model="lines" @focus="lines = null"  @blur="lines = lines === null? 1 : lines;" @keyup="checkLines(lines)"></input>
              </div>
            </div>
            <div class="advance-range">
              <span>숫자 범위 :</span>
              <input type="number" v-model="start" @focus="start = null"  @blur="start = start === null? 0 : start;" @keyup="checkStart(start)"></input> ~
              <input type="number" v-model="end" @focus="end = null"  @blur="end = end === null? 9 : end;" @keyup="checkEnd(end)"></input>
            </div>
            <button type="button" class="btn btn-primary" @click="generate()">확인</button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, key) in strings" class="advance-lines">
          <td>{{ key + 1 }}</td>
          <td class="advance-random-line"><span style="word-break: break-all">{{ value }}</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
  name: 'Advance',
  data () {
    return{
      numbers: 100,
      lines: 1,
      start: 0,
      end: 9,
      strings: []
    }
  },
  methods: {
    generate: function (){
      if(this.start === null || this.end === null || this.numbers === null || this.lines === null) {
        alert('입력칸은 비워두실 수 없습니다.');
        return;
      }

      this.strings = [];
      var min = Math.ceil(this.start);
      var max = Math.floor(this.end);
      for(var i=0;i<this.lines;i++){
        var str = '';
        for(var j=0;j<this.numbers;j++){
          var num = Math.floor(Math.random() * (max - min + 1) + min);
          str = str + num;
        }
        this.strings.push(str);
      }
    },
    checkNumbers: function (numbers) {
      var num = numbers;
      if (num > 1000 || num <= 0) {
        alert('길이는 1부터 1000까지 숫자만 가능합니다.');
        this.numbers = null;
        return;
      }
    },
    checkLines: function (lines) {
      var num = lines;
      if (num > 30 || num <= 0) {
        alert('갯수는 1부터 30까지 숫자만 가능합니다.');
        this.lines = null;
        return;
      }
    },
    checkStart: function (start) {
      var num = start;
      if (num > 8 || num < 0) {
        alert('시작 범위는 0부터 8까지 숫자만 가능합니다.');
        this.start = null;
        return;
      }
      if (num >= this.end && this.end!==null) {
        alert('시작 범위는 종료 범위보다 작아야합니다.');
        this.start = null;
        return;
      }
    },
    checkEnd: function (end) {
      var num = end;
      if (num < 1 || num > 9) {
        alert('종료 범위는 1부터 9까지 숫자만 가능합니다.');
        this.end = null;
        return;
      }
      if (num <= this.start && this.start!==null) {
        alert('종료 범위는 시작 범위보다 커야합니다.');
        this.end = null;
        return;
      }
    }
  }
}
</script>

<style>
.advance-header {
  display: flex;
  flex-direction: row;
}
.advance-desc {
  display: flex;
  flex-direction: column;
}
.advance-desc span {
  height: 3rem;
  text-align: left;
  margin-top: 1rem;
}
.advance-input {
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
}
.advance-input input {
  height: 3rem;
  margin-top: 1rem;
}
.advance-range {
  white-space: nowrap;
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
}
.advance-range>span {
  margin-right: 2rem;
}
.advance-lines{
 display: flex;
}
</style>
