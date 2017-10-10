<template>
    <div class="page-main-box">

        <el-table :data="articleList" border style="width: 100%">

            <el-table-column prop="title" label="标题" width="180">
            </el-table-column>

            <el-table-column label="内容" min-width="180">
                <template scope="scope">
                    <p class="content-row">{{scope.row.content.substring(0,100)}}</p>
                </template>
            </el-table-column>

            <el-table-column prop="tag_name" label="标签">
            </el-table-column>

            <el-table-column prop="create_date" label="创建日期" width="180">
            </el-table-column>

            <el-table-column prop="pv" label="浏览量">
            </el-table-column>

            <el-table-column fixed="right" label="操作" width="110">
                <template scope="scope">

                    <el-button @click="editItem(scope.row)" type="text" size="small">编辑</el-button>

                    <el-button @click="deleteItem(scope.row)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>

        </el-table>

        <div class="page-box">
            <el-pagination @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="limit" layout="prev, pager, next, jumper" :total="totalCount">
            </el-pagination>
        </div>

    </div>
</template>



<script>

export default {

    data() {
        return {
            articleList: [],
            limit: 7,
            totalPage:1,
            totalCount:0,
            currentPage: 1,

        }
    },
    mounted() {
        this.getArticleList();
    },
    methods: {
       
        handleCurrentChange(val) {
            this.currentPage = val;
            this.getArticleList();
        },
        getArticleList() {

            let that = this;
            var form = {
                limit: this.limit,
                page: this.currentPage
            }
            this.$rsAxios.post('/blog/blogList', form, function(result) {
                console.log(result);
                that.totalPage = result.pageGroup.totalPage;
                that.totalCount = result.pageGroup.totalCount;

                that.articleList = result.list;
            })
        },
        /**
         * 编辑
         */
        editItem(blog) {
            
            this.$store.commit('BOLG_INFO', blog);

            this.$router.push({
                    path:'/WriteArticle',
                    query: {
                        id: this.$com.encrypto(blog.id)
                    }
                })
        },
        /**
         * 删除
         */
        deleteItem(){

        }
    }
}
</script>


<style lang="less" scoped>
.content-row {
    height: 40px;
    line-height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
