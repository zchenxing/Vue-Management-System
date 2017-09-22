<template>
    <div class="left-nav-box">
        <el-row class="tac">
            <el-col :span="24">
                <el-menu :default-active="defaultActive" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="menuSelect">

                    <div v-for="item in menuList">
                        <el-menu-item :index="item.type">
                            <i class="el-icon-menu"></i>{{item.title}}
                        </el-menu-item>
                    </div>

                </el-menu>
            </el-col>

        </el-row>
    </div>
</template>


<script>
export default {
    data() {
        return {
            defaultActive: "1",
            menuList: [
                {
                    type: "1",
                    title: '统计',
                    icon: 'el-icon-menu',
                    path: '/StatisticsMain'
                },
                {
                    type: "2",
                    title: '文章列表',
                    icon: 'el-icon-menu',
                    path: '/ArticleList'
                },
                {
                    type: "3",
                    title: '写博客',
                    icon: 'el-icon-menu',
                    path: '/WriteArticle'
                },
                {
                    type: "4",
                    title: '备忘',
                    icon: 'el-icon-menu',
                    path: '/Memorandum'
                },

            ]
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        menuSelect(index) {
            console.log(index);
            let path = this.menuList[index - 1].path;

            this.$router.push(path);
        }
    }
}

</script>



<style scoped>

</style>
