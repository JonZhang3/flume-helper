<template>
    <div>
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
    name: '',
    props: {
        size: {
            type: String,
            default: 'small'
        },
        name: String,
        data: Object
    },
    data() {
        return {
            formData: {

            }
        }
    }
}
</script>
