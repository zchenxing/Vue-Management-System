<template>
    <div class="top-bar-box">

        <div class="top-bar-title">
            <p>后台管理系统</p>
        </div>

        <div class="top-bar-tool">
            <ul>
                <li v-for="btn in toolBtnList">
                    <el-button type="text" style="color: #fff" @click="toolClick(btn)">{{btn.text}}</el-button>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            toolBtnList: [
                {
                    index: 1,
                    text: '退出'
                },
                {
                    index: 2,
                    text: '按钮2'
                },
                {
                    index: 3,
                    text: '按钮3'
                }]
        };
    },
    methods: {

        toolClick(btn) {

            console.log(btn);

            switch (btn.index) {
                case 1: this.exitSystem();
                    break;

                default:
                    break;
            }
        },
        exitSystem() {

            let that = this;
            this.$confirm('确认退出系统, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                that.$router.push('/');
            }).catch(() => {

            });
        }
    }
}
</script>


<style scoped>

</style>
