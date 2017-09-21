<template>
    <div>
        <top-bar></top-bar>
        <left-nav></left-nav>
        <content-main></content-main>
    </div>
</template>


<script>

    import LeftNav from './LeftNav.vue'
    import ContentMain from './Content.vue'
    import TopBar from './TopBar.vue'

    export default {
        components:{
            LeftNav, ContentMain, TopBar
        }
    }
</script>


<style scoped>
   
   
</style>
