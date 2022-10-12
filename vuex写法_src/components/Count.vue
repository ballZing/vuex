<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h2>放大10倍后的和为：{{ bigSum }}</h2>
    <h3>{{ school }},{{ subject }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    // increment() {
    //   this.$store.commit("ADD", this.n);
    // },
    // decrement() {
    //   this.$store.commit("REDUCE", this.n);
    // },
    ...mapMutations({ increment: "ADD", decrement: "REDUCE" }),

    // incrementOdd() {
    //   this.$store.dispatch("addOdd", this.n);
    // },
    // incrementWait() {
    //   this.$store.dispatch("addWait", this.n);
    // },
    ...mapActions({ incrementOdd: "addOdd", incrementWait: "addWait" }),
  },
  computed: {
    // 借助mapState生成计算属性，从state中读取数据（对象写法）
    ...mapState({ sum: "sum", school: "school", subject: "subject" }),
    // 借助mapState生成计算属性，从state中读取数据（数组写法）
    // ...mapState(['sum','school','subject'])

    // 同上有两种写法
    ...mapGetters(["bigSum"]),
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>