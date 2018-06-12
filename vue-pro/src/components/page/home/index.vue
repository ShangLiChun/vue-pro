<template>
    <div class="home">
      <van-tabs sticky>
        <van-tab v-for="item in tabList" v-bind:key="item.id" :title="item.title">
          <template v-if="item.id === 'LazyLoad'">
            <LazyLoad />
          </template>
          <template v-if="item.id === 'Swiper'">
            <Swiper />
          </template>
          <template v-if="item.id === 'Card'">
            <Card />
          </template>
          <template v-if="item.id === 'List'">
            <List />
          </template>
        </van-tab>
      </van-tabs>
    </div>
    <!-- <van-list
    v-model="loading"
    :finished="finished"
    @load="onLoad"
    :offset="1000"
    >
    <van-cell v-for="item in list" :key="item" :title="item + ''" />
    </van-list> -->
</template>
<script>
  import {LazyLoad,Swiper,Card,List} from './components'
  export default {
    components:{
      LazyLoad,
      Swiper,
      Card,
      List
    },
    data() {
      return {
        list: [],
        loading: false,
        finished: false,
        tabList:[
          {
            title:'懒加载',
            id:'LazyLoad'
          },{
            title:'轮播',
            id:'Swiper'
          },{
            title:'卡片',
            id:'Card'
          },{
            title:'列表',
            id:'List'
          }
        ]
      };
    },

    methods: {
      onLoad() {
        setTimeout(() => {
          for (let i = 0; i < 18; i++) {
            this.list.push(this.list.length + 1);
          }
          this.loading = false;

          if (this.list.length >= 40) {
            this.finished = true;
          }
        }, 1000);
      }
    }
  }
</script>
<style lang="scss" scoped>
  .home{
    position: relative;
    height: 100%;
    .van-tabs{
      overflow-y: auto;
      height: calc(100% - 50px);
    }
  }
</style>
