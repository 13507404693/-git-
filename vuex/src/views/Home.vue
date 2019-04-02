<template>
  <div>
    <h1>home</h1>
    <div v-for="(item,index) in setdhome" :key="index"> 
        <div> 名字:{{item.name}}---价格{{item.pirce}}</div>
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return{}
  },
  computed:{ 
    home(){ 
      return this.$store.state.list
    },
    setdhome(){ 
    console.log(this.$store.getters.donedodos)
    return this.$store.getters.donedodos;
    }
  }

}
</script>
