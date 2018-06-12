<template>
<div class="miusc_box">
     <van-tabs @click="onClick" v-model="active" swipeable>
        <van-tab v-for="(item,index) in list" v-bind:key="index" :title="item.title">
            <div slot="title" class="custom_title">
               
                <router-link :to="item.path">{{item.title}}</router-link>
                
            </div>
             <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </van-tab>
    </van-tabs>
</div>
</template>
<script>
    export default {
        components:{
        },
        data() {
            return {
                active:0,
                list: [{
                        title:'推荐',
                        id:'recomm',
                        path:'/miusc/index/recomm'
                    },{
                        title:'排行榜',
                        id:'toplist',
                        path:'/miusc/index/toplist'
                    },{
                        title:'搜索',
                        id:'hotkey',
                        path:'/miusc/index/hotkey'
                    }],
            };
        },
        created(){
            this.watchRouter()
        },
        methods: {
            onClick(index, title){
                // console.log(title)
            },
            watchActive(){
                console.log(this.active)
                if(this.active === 0){
                    this.$router.push('/miusc/index/recomm')
                }else if(this.active === 1){
                    this.$router.push('/miusc/index/toplist')
                }else if(this.active === 2){
                    this.$router.push('/miusc/index/hotkey')
                }
            },
            watchRouter(){
                console.log(this.$router.history.current.meta.title.split('-')[1] )
                const t = this.$router.history.current.meta.title.split('-')[1];
                if(t === '推荐'){
                    this.active = 0
                }else if(t === '排行榜'){
                    this.active = 1
                }else if(t === '搜索'){
                    this.active = 2
                }
                // let path = this.$router.history.current.path;
                // const index = this.$router.history.current.path.lastIndexOf("\/");
                // console.log(index)
                // path = path.substring(index + 1, path.length);
                // console.log(path)
                // this.active = this.$router.history.current.path.substring(this.$router.history.current.path.lastIndexOf("\/") + 1, this.$router.history.current.path.length);
            },
        },
        watch:{
            // 如果路由有变化，会再次执行该方法
            "$route": "watchRouter",
            "active":"watchActive"
        }
    };
</script>
<style lang="scss" scoped>
    .miusc_box{
        height: 100%;
        background-color: #f4f4f4;
        .van-tabs{
            overflow-y: auto;
            height: calc(100% - 50px);
        }
        .custom_title{
            a{
                color: #000;
            }
            a.router-link-active{
                color: #31c27c;
            }
        }
        .radioList{
            padding: 10px;
            .title{
                margin-bottom: 10px;
            }
            .van-col>div{
                background-color: #fff;
                padding-bottom: 20px;
                span{
                    padding-left: 10px;
                }
            }
            img{
                width: 100%;
            }
        }
        .songsheet{
            text-align: center;
            font-size: 10px;
            div{
                padding: 10px;
            }
            .footerimg img{
                width: 82px;
                height: 24px;;
            }
        }
        .van-tabs__line{
            background-color: #31c27c;
        }
    }
    
</style>

