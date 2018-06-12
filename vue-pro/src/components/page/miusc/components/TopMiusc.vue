<template>
    <div class="hottop">
        <a v-if="topList" v-for="item in topList" v-bind:key="item.id" :href="`https://y.qq.com/w/toplist.html?ADTAG=myqq&from=myqq&channel=10007100&id=${item.id}&type=top`">
            <van-card 
            :title="item.topTitle"
            :thumb="item.picUrl"
            >
                <div class="tages" slot="tags" >
                    <van-row>
                        <van-col span="23" class="desc">
                            <div v-for="(tag,index) in item.songList" v-bind:key="index">
                                {{`${index+1} ${tag.songname}-`}}<span style="color:#ddd">{{tag.singername}}</span>
                            </div>
                        </van-col>
                        <van-col span="1" style="padding:20px 0"><van-icon name="arrow" /></van-col>
                    </van-row>
                </div>
            </van-card>
        </a>
        <div class="topic_more">
            <span href="">去客户端发现更多好音乐 ></span>
        </div>
    </div>
</template>
<script>
import {topList} from '@/api/getQQMiusc'
export default {
    data(){
        return {
            topList:[]
        }
    },
    created(){
        this.getTopList()
    },
    mounted(){
        // this.getData()
    },
    methods:{
        getTopList(){
                topList({
                     g_tk:'5381',
                    uin:'0',
                    format:'json',
                    inCharset:'utf-8',
                    outCharset:'utf-8',
                    notice:'0',
                    platform:'h5',
                    needNewCode:'1',
                    _:'1528520750824'
                }).then(res=>{
                    console.log(res)
                    if(res.code === 0 && res.data && res.data.topList){
                        this.topList = res.data.topList;
                    }
                }).catch(err=>{
                    console.log(err)
                })
            }
    }
}
</script>
<style lang="scss" scoped>
.hottop{
    .tages{
        font-size: 12px;
        .desc{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            div{
                padding: 3px 0;
            }
        }
    }
    .topic_more{
        padding: 20px;
        text-align: center;
        span{
            color: #999;
            font-size: 14px;
        }
    }
}
    
</style>


