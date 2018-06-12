<template>
    <div class="recommend">
        <van-swipe v-if="sliders.data.length > 0" :autoplay="sliders.autoplay">
            <van-swipe-item v-for="image in sliders.data" :key="image.id">
                <a :href="image.linkUrl"><img v-lazy="image.picUrl" class="sliderimage" /></a>
            </van-swipe-item>
        </van-swipe>
        <div class="cardList" v-if="radioList">
            <div class="title">电台</div>
            <van-row gutter="20">
                <van-col span="12" v-for="item in radioList" v-bind:key="item.radioid">
                    <div>
                        <img :src="item.picUrl" alt="">
                        <span>{{item.Ftitle}}</span>
                    </div>
                </van-col>
            </van-row>
        </div>
        <div class="cardList" v-if="songList">
            <div class="title">热门歌单</div>
            <van-row gutter="20">
                <van-col span="12" v-for="item in songList" v-bind:key="item.id">
                    <div>
                        <img :src="item.picUrl" alt="">
                        <div>{{item.songListDesc}}</div>
                        <span>{{item.songListAuthor}}</span>
                    </div>
                </van-col>
            </van-row>
        </div>
        <div class="songsheet">
            <div style="color:rgba(0,0,0,.6)">去客户端发现更多好音乐></div>
            <div style="font-size:14px">查看电脑版音乐</div>
            <div class="footerimg"><img src="https://y.gtimg.cn/mediastyle/mobile/yqq_v5/img/logo_footer.png?max_age=19830212&d=20151105145423" alt=""></div>
            <div tyle="color:#ddd">Copyright © 1998 - 2018  Tencent. All Rights Reserved.</div>
            <div tyle="color:rgba(0,0,0,.5)">联系电话：0755-86013388 QQ群：55209235</div>
        </div>
    </div>
</template>
<script>
import {musichAll} from '@/api/getQQMiusc'
 export default {
        data() {
            return {
                sliders:{
                    data:[],
                    autoplay:3000
                },
                radioList:[],
                songList:[]
            };
        },
        created(){
            this.Recommend()
        },
        methods: {
           Recommend(){
                musichAll({
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
                    if(res.code === 0 && res.data){
                        if(res.data.slider){
                            this.sliders.data = res.data.slider;
                        }
                        if(res.data.radioList){
                            this.radioList = res.data.radioList;
                        }
                        if(res.data.songList){
                            this.songList = res.data.songList;
                        }
                        
                    }
                }).catch(err=>{
                    console.log(err)
                })
            },
        }
    };
</script>

<style lang="scss" scoped>
    .recommend{
         height: 100%;
        .sliderimage{
            height: 150px;
            width: 100%;
        }
        .cardList{
            padding: 10px;
            font-size: 14px;
            .title{
                margin-bottom: 10px;
                font-size: 16px;
            }
            .van-col>div{
                background-color: #fff;
                padding-bottom: 20px;
                span,div{
                    padding-left: 10px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
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
    }
</style>

