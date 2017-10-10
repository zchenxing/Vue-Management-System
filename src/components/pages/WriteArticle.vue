<template>
    <div class="page-main-box">

        <el-col :span="13">
            <el-input placeholder="请输入内容" v-model="titleText">
                <template slot="prepend">标题</template>
            </el-input>
        </el-col>

        <el-select v-model="selectTag" placeholder="请选择">
            <el-option v-for="item in tagList" :key="item.id" :label="item.tag_name" :value="item.id">
            </el-option>
        </el-select>

        <el-button type="primary" @click="save(markdownText)">保存</el-button>

        <mavon-editor style="height:100%; margin-top:20px;" :value="markdownText" @save="save" @change="markdownChange" @imgAdd="imgAdd" @imgDel="imgDel"></mavon-editor>
    </div>
</template>



<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
    components: {
        mavonEditor
    },
    data() {
        return {
            titleText: '',
            tagList: [],
            markdownText: '',
            selectTag: null,
            preview: 'edit',
        }
    },
    computed:{
        blogInfo(){
            return this.$store.state.blogInfo;
        }
    },
    mounted() {
      
        this.getAllTag();
      
        if (this.$route.query.id) {
            this.getBlogContent();
        }
    },
    methods: {

        // 获取所有标签
        getAllTag() {
            let that = this;
            this.$rsAxios.get('/blog/tag/all', function(result) {
                that.tagList = result;
            })
        },
        getBlogContent() {
            let that = this,
            id = this.$com.decrypto(this.$route.query.id);

            this.$rsAxios.get('/blog/content/'+id, function(result){
                console.log(result);
                that.titleText =  result.title;
                that.selectTag = result.tag_id;
                that.markdownText = result.content;
            })
        },
        /**
         * markdown正在输入
         */
        markdownChange(text) {
            this.markdownText = text;
            // console.log(test);
        },
        /**
         * 添加图片
         */
        imgAdd(filename, file) {
            console.log('添加图片' + filename);
            console.log(file);
        },
        /**
         * 删除图片
         */
        imgDel(filename) {
            console.log('删除' + filename);
        },
        /**
         * 保存
         */
        save(text) {

            console.log(this.markdownText);

            return;

            if (!this.titleText) {
                this.$message.error('请输入标题');
                return;
            } else if (!this.selectTag) {
                this.$message.error('请选择标签');
                return;
            } else if (!text) {
                this.$message.error('请输入文章');
                return;
            }


            let that = this;

            this.$confirm('是否保存文章?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {

                let form = {
                    title: that.titleText,
                    content: text,
                    tag_id: that.selectTag
                }

                that.$rsAxios.post('/blog/add', form, function() {
                    alert('保存成功');
                    that.$router.push('/ArticleList');
                })

            }).catch(() => {

            });


        },

    }
}
</script>

