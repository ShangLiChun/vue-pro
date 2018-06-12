<template>
    <div class="navbar_box">
        <GlobalSearch v-if="searchShow" />
        <van-nav-bar :class="colorShow?'greenColor':''" v-else :title="title" left-text="返回" @click-left="goBack" @click-right="search" fixed left-arrow>
            <van-icon name="search" slot="right" />
        </van-nav-bar>
        
    </div>
    
    <!-- <mt-header fixed :title="title">
        <mt-button slot="left" icon="back" @click="goBack">返回</mt-button>
        <mt-button icon="more" slot="right"></mt-button>
    </mt-header> -->
</template>
<script>
import GlobalSearch from '@/components/GlobalSearch'
import { mapGetters,mapMutations } from 'vuex'

export default {
    components:{
        GlobalSearch
    },
    data(){
        return {
            title:'',
            colorShow:false
        }
    },
    computed:{
        ...mapGetters([
            'searchShow'
        ]),
    },
    created(){
       this.watchRouter()
    },
    methods:{
        ...mapMutations([
            'SEARCH_SHOW'
        ]),
        watchRouter(){
            console.log(this.$router )
            if(this.$router.history.current.name === '音乐' || this.$router.history.current.path.indexOf('/miusc') > -1){
                this.colorShow = true;
            }else{
                this.colorShow = false;
            }
            this.title = this.$router.history.current.meta.title
        },
        goBack(){
            console.log(this.$router)
            this.$router.back(-1)
        },
        search(){
            console.log('搜索')
            this.SEARCH_SHOW(true)
        }
    },
    watch:{
        // 如果路由有变化，会再次执行该方法
        "$route": "watchRouter"
    }
}
</script>

