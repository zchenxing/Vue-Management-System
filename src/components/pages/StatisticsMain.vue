<template>
    <div class="page-main-box">
      统计数据
  </div>
</template>


<script>
    export default {
  
        computed: {
            blogInfo(){
                return this.$store.state.blogInfo;
            },
            changeBlogInfo(){
                return this.$store.getters.changePeople
            }
        },
        mounted(){
            
        }
    }
</script>
