<template>
  

            <div class="left-nav-box">
                <el-row class="tac">
                    <el-col :span="24">
                        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">

                            <el-submenu index="1">
                                <template slot="title">
                                    <i class="el-icon-message"></i>导航一
                                </template>

                                <el-menu-item index="1-1">选项1</el-menu-item>
                                <el-menu-item index="1-2">选项2</el-menu-item>

                            </el-submenu>

                            <el-menu-item index="2">
                                <i class="el-icon-menu"></i>导航二
                            </el-menu-item>

                            <el-menu-item index="3">
                                <i class="el-icon-setting"></i>导航三
                            </el-menu-item>
                       

                        </el-menu>
                    </el-col>

                </el-row>
            </div>

       
</template>


<script>
export default {
    data() {
        return {
            isCollapse: true
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>



<style scoped>


</style>
