<template>
    <div>
        <span>{{name}}</span>
        <el-form :model="formData" ref="form">
            <template v-for="(item, index) in formData.data">
                <div :key="index" style="display: inline-block; margin-left: 10px;">
                    <el-form-item label="名" :prop="'data.' + index + '.name'" :size="size" :rules="rules.name">
                        <el-input v-model="item.name" :size="size"></el-input>
                    </el-form-item>
                    <el-form-item label="值" :prop="'data.' + index + '.value'" :size="size" :rules="rules.value">
                        <el-input v-model="item.value" :size="size"></el-input>
                    </el-form-item>
                    <el-button size="mini" icon="el-icon-delete" circle type="danger" @click="handleDelete(index)" style="margin-top: 3px;"></el-button>
                </div>
                <br v-if="(index + 1) % 3 === 0"/>
            </template>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'm-name-value-inputs',
    props: {
        size: String,
        name: String,
        data: Object
    },
    data() {
        return {
            formData: {
                data: this.convertData(this.data)
            },
            rules: {
                name: [
                    {required: true, message: '请输入名', trigger: 'blur'}
                ],
                value: [
                    {required: true, message: '请输入值', trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        addItem() {
            this.formData.data.push({
                name: '',
                value: ''
            });
        },
        handleDelete(index) {
            this.formData.data.splice(index, 1);
        },
        convertData(data) {
            const result = [];
            if(data) {
                for(let key in data){
                    result.push({name: key, value: data[key]});
                }
            }
            return result;
        },
        getData() {
            return this.formData.data;
        },
        getName() {
            return this.name;
        },
        valid() {
            const result = this.$refs['form'].validate(valid => {
                return valid;
            });
            console.log(result);
        }
    }
}
</script>

<style>

</style>
