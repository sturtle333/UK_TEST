<template>
  <div id="Simple">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>
            <div class="input-header">
              <span>원하는 수열의 길이 입력 :</span>
              <input type="number" v-model="numbers" @focus="numbers = null" @blur="numbers = numbers === null? 100 : numbers;"></input>
              <button type="button" class="btn btn-primary" @click="generate(numbers)">확인</button>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="random-line"><span style="word-break: break-all">{{ line }}</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Simple',
  data () {
    return {
      line: '',
      numbers: 100
    }
  },
  methods: {
      generate: function(j){
        if(j>1000 || j <= 0) {
        alert("길이는 1부터 1000 사이의 숫자만 가능합니다.");
        this.numbers = null;
        return;
        }
        this.line = '';
        for(var i=0;i<j;i++){
          var num = Math.random();
          num = num * 10;
          num = parseInt(num);
          this.line = this.line + num;
        }
      }
  }
}
</script>

<style>
#Simple {
  margin-top: 5%;
  box-shadow: 5px 5px 5px gray;
  display: flex;
  flex-direction: row;
}
.random-line {
  word-wrap: break-word;
}
</style>
