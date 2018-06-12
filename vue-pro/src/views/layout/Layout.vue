<template>
    <div class="layout">
        <NavBar />
        <AppMain />
        <FooterBar />
    </div>
</template>
<script>
import {NavBar,FooterBar,AppMain} from './components'
export default {
    components:{
        NavBar,
        FooterBar,
        AppMain
    }
}
</script>

