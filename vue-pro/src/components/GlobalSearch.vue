<template>
    <div class="globalsearch">
        <van-popup v-model="searchShow" position="top" :overlay-style="styles">
            <form action="/">
                <van-search
                    v-model="value"
                    placeholder="请输入商品名称"
                    show-action
                    @search="onSearch"
                    @cancel="onCancel"
                />
            </form>
        </van-popup>
        
    </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
    data(){
        return{
            value:'',
            show:true,
            styles:{
                'background-color':'#f2f2f2'
            }
        }
    },
    computed:{
        ...mapGetters([
            'searchShow'
        ]),
        searchShow:{
            get:function(){
                return this.$store.state.searchShow
            },
            set:function(){
                return false
            }
        }
    },
    methods:{
        ...mapMutations([
            'SEARCH_SHOW'
        ]),
        onSearch(value){
            console.log(value)
        },
        onCancel(){
            console.log('取消搜索')
            this.SEARCH_SHOW(false)
        }
    }
}
</script>
<style lang="scss" scoped>
    .globalsearch{
        .van-modal{
            background-color: #ddd;
        }
    }
    
</style>

