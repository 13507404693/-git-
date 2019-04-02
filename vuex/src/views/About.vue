<template>
  <div class="about">
    <h1>about</h1>
      <div v-for="(item,index) in setducts" :key="index">
        <div> 名字:{{item.name}}---价格{{item.pirce}}</div>
      </div>
      <button @click="myPirce(4)">商品降价</button>
     </div>
</template>

<script>
export default {
  data(){
    return{}
  },
  methods:{
    myPirce(ley){ 
      console.log('我是点击事件');
       //this.$store.commit('redmout') //调用 vuex的 mo事件方法
       this.$store.dispatch('reDprice',ley) //dispatch分发
    }
  },
  computed:{ 
    products(){ 
      return this.$store.state.list
    },
    setducts(){ 
   // console.log(this.$store.getters.donedodos)
    return this.$store.getters.donedodos;
    }
  }
}
</script>

<style>

</style>
