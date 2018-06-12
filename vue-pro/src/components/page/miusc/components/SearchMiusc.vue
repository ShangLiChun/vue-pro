<template>
    <div class="search_m">
        <div class="top">
            <van-search
            ref="search"
            v-model="value"
            :show-action="showaction||historyaction"
            @search="searchValue"
            @focus="focus"
            @click-icon="clearValue"
            class="search"
            placeholder="搜索歌曲、歌单、专辑"
            >
                <div slot="action" @click="cancel" class="cancel">取消</div>
            </van-search>
        </div>
        <div class="content">
            <div class="focus_wrapper" v-if="showaction">
                <van-pull-refresh v-model="loading" @refresh="onRefresh" >
                    <!-- <van-cell :title="zhida.albumname" /> -->
                    <template v-if="zhida !==''">
                        <a :href="`https://y.qq.com/w/album.html?albummid=${zhida.albummid}&ADTAG=myqq&from=myqq&channel=10007100`">
                            <van-card
                            class="vancard"
                            :title="zhida.albumname"
                            :desc="zhida.singername"
                            
                            >
                                <div class="zdythumb" slot="thumb" style="width:40px;height:40px">
                                    <img :src="`https://y.gtimg.cn/music/photo_new/T00${zhida.singermid?'1':'2'}R68x68M000${zhida.singermid?zhida.singermid:zhida.albummid}.jpg?max_age=2592000`" alt="未知">
                                </div>
                            </van-card>
                        </a>
                        
                    </template>
                    <van-list
                    v-model="loading"
                    :finished="finished"
                    @load="onLoad"
                    >   
                        <a 
                        v-for="(item,index) in searchList" 
                        v-bind:key="index" 
                        :href="`https://y.qq.com/w/album.html?albummid=${item.albummid}&ADTAG=myqq&from=myqq&channel=10007100`" >
                            <van-cell :title="item.albumname" :label="returnLabel(item.singer,'name')" >
                                <i slot="icon" class="iconfont icon-15"></i>
                            </van-cell>
                        </a>
                        
                    </van-list>
                </van-pull-refresh>
            </div>
            <div class="historybox" v-if="historyaction &&searchHistory.length > 0&&value===''">
                <van-cell v-for="(item,index) in searchHistory" v-bind:key="index" :title="item" @click="tagSearch(item)">
                    <i slot="icon" class="iconfont icon-15"></i>
                    <i slot="right-icon" class="iconfont icon-close" @click.stop="closeHistory(item)"></i>
                 </van-cell>
            </div>
            
            <div class="mod_search_result" v-if="!showaction && !historyaction ">
                <a :href="special_key.url">
                    <van-tag plain type="danger">{{special_key.key}}</van-tag>
                </a>
                <van-tag 
                plain 
                v-for="tag in defaultHotKey" 
                v-bind:key="tag.n"
                @click.native="tagSearch(tag.k)"
                >{{tag.k}}</van-tag>
            </div>
            
        </div>
        
    </div>
</template>

<script>
import {gethotkey,searchforKeyp} from '@/api/getQQMiusc'
import {getUrlParams} from '@/utils/auth'
const R = require('ramda');
export default {
    data(){
        return {
            isAction:false,
            showaction:false,
            historyaction:false,
            value:'',
            special_key:{},
            defaultHotKey:[],
            searchList:[],
            zhida:'',
            page:0,
            loading: false,
            finished: false,
            searchHistory:[]
        }
    },
    created(){
        this.getHotKey();
        this.watchRouter()
    },
    methods:{
        searchValue(value){
            console.log(value);
            this.tagSearch(value)
        },
        focus(){
            if(this.value){
                this.showaction = true;
            }else{
                this.historyaction = true;
            }
            this.searchHistory = localStorage.getItem('yqq_search_history')?JSON.parse(localStorage.getItem('yqq_search_history')):[];
            console.log(this.searchHistory)
        },
        cancel(){
            this.value = '';
            this.zhida = {};
            this.searchList = [];
             this.historyaction = false;
            this.showaction = false
        },
        clearValue(){
            // console.log(this.$refs.search)
            this.showaction = false;
            this.historyaction = true;
            this.searchHistory = localStorage.getItem('yqq_search_history')?JSON.parse(localStorage.getItem('yqq_search_history')):[];
            console.log(this.searchHistory)
        },
        closeHistory(text){
            // console.log(text);
            this.searchHistory = localStorage.getItem('yqq_search_history')?JSON.parse(localStorage.getItem('yqq_search_history')):[];
            // console.log(this.searchHistory)
            this.searchHistory = R.filter(n=> n !== text)(this.searchHistory);
            localStorage.setItem('yqq_search_history',JSON.stringify(this.searchHistory))
        },
        tagSearch(k){
            console.log(k)
            if(k){
                this.value = k;
                let search_history = localStorage.getItem('yqq_search_history')?JSON.parse(localStorage.getItem('yqq_search_history')):'';
                console.log(search_history)
                if(search_history === ''){
                    localStorage.setItem('yqq_search_history',JSON.stringify([k]))
                }else{
                    let f = false;
                    search_history.map((item,index)=>{
                        if(item === k){
                            f = true
                        }
                    })
                    console.log(f)
                    if(!f){
                        localStorage.setItem('yqq_search_history',JSON.stringify(R.prepend(k)(search_history)))
                    }
                    
                }
                const _this = this;
                this.searchforKeyp(k,20,1,_this);
                // this.showaction = true;
            }
        },
        returnLabel(arr,key){
            const arrs = arr.map((item,index)=>{
                return item[key]
            })
            return arrs.join('/');
        },
        onRefresh() {
            const _this = this;
           this.searchforKeyp(this.value,20,1,_this)
        },
         onLoad() {
             console.log(this.loading)
             console.log(this.value)
             const _this = this;
             if(this.value !== ''){
                 this.searchforKeyp(this.value,20,this.page+1,_this)
             }
            
            console.log(this.searchList)
        },
        getHotKey(){
            gethotkey({
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
                        if(res.data.special_key){
                            this.special_key = {
                                key:res.data.special_key,
                                url:res.data.special_url
                            }
                        }
                        if(res.data.hotkey){
                            const R = require('ramda');
                            var ageNameSort = R.sortWith([
                                R.descend(R.prop('n'))
                            ]);
                            const arr = R.take(8)(ageNameSort(res.data.hotkey))
                            console.log(arr)
                            this.defaultHotKey = arr;
                        }
                    }
                }).catch(err=>{
                    console.log(err)
                })
        },
        searchforKeyp(k,page,p,_this){
            _this.page = p
            searchforKeyp({
                 g_tk:'5381',
                uin:'0',
                format:'json',
                inCharset:'utf-8',
                outCharset:'utf-8',
                notice:'0',
                platform:'h5',
                needNewCode:'1',
                _:'1528520750824',
                w:k,
                zhidaqu:1,
                catZhida:1,
                t:0,
                flag:1,
                ie:'utf-8',
                sem:1,
                aggr:0,
                prepage:page,
                n:page,
                p:p,
                remoteplace:'txt.mqq.all',
                _:'1528691153968'
            }).then(res=>{
                console.log(res)
                if(res.code === 0 && res.data){
                    if(p === 1){
                        console.log(res.data.zhida.type)
                        if(res.data.zhida.type === 3){
                            _this.zhida = res.data.zhida;
                        }else{
                            _this.zhida = ''
                        }
                        _this.searchList = res.data.song.list;
                    }else{
                         const R = require('ramda');
                        _this.searchList = R.concat(_this.searchList)(res.data.song.list)
                    }
                    _this.loading = false;
                    if(res.data.song.list.length === 0){
                        _this.finished = true
                    }
                    _this.showaction = true;
                }
            }).catch(err=>{
                console.log(err)
                _this.loading = false;
            })
        },
        watchRouter(){
            // console.log(this.$router.history.current.meta)
            // console.log(getUrlParams('p'))
            // const parms = decodeURI(document.location.href.split('?')[1].split('=')[1]);
            // console.log(parms)
            // if(parms === '搜索'){
            //     this.isAction = true;
            // }else{
            //     this.isAction = false;
            // }
        },
    },
    watch:{
        // 如果路由有变化，会再次执行该方法
        "$route": "watchRouter"
    }
}
</script>

<style lang="scss" scoped>
    .search_m{
        height: 100%;
        background-color: #fff;
        .top{
            .search{
               .cancel{
                    line-height: 30px;
                    padding: 0 10px;
                }
            }
        }
        .content{
            .mod_search_result{
                padding: 10px;
                .van-tag{
                    padding: 5px;
                    font-size: 14px;
                    margin-right: 15px;
                    margin-bottom: 15px;
                }
                .van-tag--plain{
                    color: #000;
                    border-color: #000;
                }
                .van-tag--danger{
                    color:#f44;
                    border-color: #f44;
                }
            }
            .van-cell{
                height: 55px;
                padding: 0;
                i.iconfont{
                    font-size: 30px;
                    margin-left: 20px;
                    margin-right: 15px;
                    line-height: 55px;
                }
                .van-cell__title{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    .van-cell__label {
                        line-height: inherit;
                    }
                }
            }
        }
    }
</style>


