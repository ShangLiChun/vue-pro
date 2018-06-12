<template>
    <div class="app-main">
        <router-view></router-view>
    </div>
</template>

<style lang="scss" scoped>
    .app-main{
        position: absolute;
        top: 46px;
        bottom: 55px;
        width: 100%;
        height: calc(100% - 96px);
        overflow: hidden;
        box-sizing: border-box;
    }
</style>

