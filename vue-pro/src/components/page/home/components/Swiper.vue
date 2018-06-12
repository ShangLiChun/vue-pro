<template>
    <div class="swiper">
        <h3>图片懒加载</h3>
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
            </van-swipe-item>
        </van-swipe>
        <div class="change">
            <h3>监听change事件</h3>
            <van-swipe @change="onChange">
                <van-swipe-item>1</van-swipe-item>
                <van-swipe-item>2</van-swipe-item>
                <van-swipe-item>3</van-swipe-item>
                <van-swipe-item>4</van-swipe-item>
            </van-swipe>
        </div>
        <div class="change">
            <h3>纵向滚动</h3>
            <van-swipe :autoplay="3000" vertical>
                <van-swipe-item>1</van-swipe-item>
                <van-swipe-item>2</van-swipe-item>
                <van-swipe-item>3</van-swipe-item>
                <van-swipe-item>4</van-swipe-item>
            </van-swipe>
        </div>
        
    </div>
</template>
<script>
    export default {
        data() {
            return {
                images: [
                    'https://img.yzcdn.cn/2.jpg',
                    'https://img.yzcdn.cn/2.jpg',
                    'https://img.yzcdn.cn/2.jpg',
                    'https://img.yzcdn.cn/2.jpg',
                    'https://img.yzcdn.cn/2.jpg'
                ]
            }
        },
        methods: {
            onChange(index) {
                this.$toast('当前 Swipe 索引：' + index);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .swiper{
        width: 320px;
        margin: 0 auto;
        img{
            width: 320px;
            height: 180px;
        }
        .change{
            height: 180px;
            .van-swipe{
                height: 100%;
                .van-swipe-item{
                    text-align: center;
                    line-height: 180px;
                    background-color: #629162;
                }
            }
        }
    }
</style>
