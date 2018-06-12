<template>
    <van-tabbar v-model="active">

        <van-tabbar-item v-for="item in routes" v-if="item.children" v-bind:key="item.path">
            <router-link :to="item.path" class="navitem">
                <i class="iconfont" v-if="item.meta&&item.meta.icon" :class="item.meta.icon"></i>
                <!-- <van-icon v-if="item.children[0].meta&&item.children[0].meta.icon" :name="item.children[0].meta.icon" /> -->
                <span>{{item.meta.title}}</span>
            </router-link>
        </van-tabbar-item>
        <!-- <van-tabbar-item icon="chat" dot>标签</van-tabbar-item>
        <van-tabbar-item icon="records" info="5">标签</van-tabbar-item>
        <van-tabbar-item icon="gold-coin" info="20">标签</van-tabbar-item> -->
    </van-tabbar>
    <!-- <mt-tabbar v-model="selected">
        <mt-tab-item v-for="item in routes" v-bind:key="item.children[0].path" :id="item.children[0].path">
            <router-link :to="item.children[0].path" class="navitem">
                <i class="iconfont" v-if="item.children[0].meta&&item.children[0].meta.icon" :class="item.children[0].meta.icon"></i>
                <span>{{item.children[0].name}}</span>
            </router-link>
        </mt-tab-item>
    </mt-tabbar> -->
</template>
<script>
export default {
    data(){
        return {
            active:0
        }
    },
    created(){
       this.watchRouter()
    },
    computed:{
        routes() {
            return this.$router.options.routes
        }
    },
    methods:{
        watchRouter(){
            console.log(this.$router.options.routes)
            // this.$router.push()
            // this.active = this.$router.history.current.meta.path
        }
    },
    watch:{
        // 如果路由有变化，会再次执行该方法
        "$route": "watchRouter"
    }
}
</script>

