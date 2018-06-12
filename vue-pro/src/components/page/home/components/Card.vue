<template>
    <van-card
    title="标题"
    desc="描述"  
    num="2"
    price="2.00"
    :thumb="imageURL"
    >
    <div slot="footer">
        <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button>
    </div>
    </van-card>
</template>
<script>
export default {
    data(){
        return {
            imageURL:'https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg',
        }
    }
}
</script>

