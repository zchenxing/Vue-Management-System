<template>
    <div class="top-bar-box">
        <div class="top-bar-title">
            后台管理系统
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex2: '1'
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>


<style scoped>

</style>
