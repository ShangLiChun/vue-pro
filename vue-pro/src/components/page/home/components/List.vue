<template>
    <div class="list">
        <h3>上拉刷新，底部自动加载</h3>
        <van-pull-refresh v-model="loading" @refresh="onRefresh">
            <van-list
            v-model="loading"
            :finished="finished"
            @load="onLoad"
            >
            <van-cell v-for="item in list" :key="item" :title="item + ''" />
            </van-list>
        </van-pull-refresh>
        
    </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },
  methods: {
    onRefresh() {
        console.log('aaaa')
        setTimeout(() => {
            this.$toast('刷新成功');
            this.count++;
            for (let i = 0; i < 10; i++) {
                this.list.push(this.list.length + 1);
            }
            this.loading = false;
        }, 500);
    },
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
            this.list.push(this.list.length + 1);
        }
        this.loading = false;
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    }
  }
}
</script>
<style lang="scss" scoped>
    .list{
        background-color: #ddd;
        h3{
            text-align: center;
            margin: 0;
            color: #999;
        }
    }
</style>
