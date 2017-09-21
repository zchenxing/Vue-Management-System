<template>
    <div class="login-page-box">

        <div class="login-center-box">

            <div class="login-center-title">
                <p>后台管理系统</p>
            </div>

            <el-col :span="21">
                <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">

                    <el-form-item label="用户名" prop="admin">
                        <el-input placeholder="请输入用户名" type="text" v-model="ruleForm2.admin" auto-complete="off"></el-input>
                    </el-form-item>

                    <el-form-item label="密码" prop="checkPass">
                        <el-input  placeholder="请输入密码" type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-col :span="24">
                            <el-button style="width: 100%; margin-top:20px;" type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                        </el-col>

                    </el-form-item>
                </el-form>

            </el-col>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        var validateAdmin = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入用户名'));
            } else {
                if (this.ruleForm2.checkPass !== '') {
                    this.$refs.ruleForm2.validateField('checkPass');
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            }  else {
                callback();
            }
        };
        return {
            ruleForm2: {
                admin: '',
                checkPass: '',
            },
            rules2: {
                admin: [
                    { validator: validateAdmin, trigger: 'blur' }
                ],
                checkPass: [
                    { validator: validatePass2, trigger: 'blur' }
                ],
            }
        };
    },
    methods: {
        submitForm(formName) {
            let that = this;
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    that.$router.push('/WebApp');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    }
}
</script>