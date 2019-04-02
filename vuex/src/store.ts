import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[{name:"老一",pirce:'2000'},{name:"老二",pirce:'3000'},{name:"老三",pirce:'4000'}]
  },
  getters:{//数据属性计算的
    donedodos:(state) => {
     var  doness=state.list.map(res=>{ 
          return {
            name:`***${res.name}***`,
            pirce: res.pirce/2
          }
        })
        console.log()
      return doness;
    }
  },
  mutations: {
  
    redmout(state,ley){ 
      state.list.forEach( res => {
          res.pirce-=ley;
      })
     }

  },
  actions: {//支持写任意异步方法
    reDprice:(context,ley)=>{  //点击减多少 通过时间传参过来的
      console.log(ley+'---')
          setTimeout(()=>{
            context.commit('redmout',ley)
          },2000)
    }
  }
})
