<template>
    <div>
        <h3>图片懒加载</h3>
        <!-- <lazy-component>
            <img v-for="(img,index) in imageList" v-bind:key="index" v-lazy="img" >
        </lazy-component> -->
        <div class="lazybox" v-for="(img,index) in imageList" v-bind:key="index">
            <img v-lazy="img" >
        </div>
        
    </div>
</template>
<script>

export default {
    // components:{LazyLoad},
    data(){
        return {
            imageList:[
                'https://img.yzcdn.cn/2.jpg',
                'https://img.yzcdn.cn/2.jpg',
                'https://img.yzcdn.cn/2.jpg',
                'https://img.yzcdn.cn/2.jpg',
                'https://img.yzcdn.cn/2.jpg',
                'https://img.yzcdn.cn/2.jpg',
                'https://img.yzcdn.cn/2.jpg',
                'https://img.yzcdn.cn/2.jpg',
                ]
        }
    },
    created(){
        console.log(this.imageList)
    }
}
</script>
<style lang="scss" scoped>
    .lazybox{
        text-align: center;
        img{
            width: 300px
        }
    }
</style>

