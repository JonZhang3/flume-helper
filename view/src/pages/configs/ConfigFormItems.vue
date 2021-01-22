<template>
    <el-table :data="Object.keys(properties)" stripe border class="config-item-root">
        <el-table-column label="配置" width="250">
            <template slot-scope="scope">
                <span :class="{'config-item-label': true, required: properties[scope.row].required}" v-if="properties[scope.row].type === Object">
                    <span>{{scope.row}}</span>
                    <el-button size="mini" icon="el-icon-plus" circle type="primary" @click="handleAddMapItem(scope)" style="margin-left: 10px;"></el-button>
                </span>
                <span :class="{'config-item-label': true, required: properties[scope.row].required}" v-else>{{scope.row}}</span>
            </template>
        </el-table-column>
        <el-table-column label="值" width="510">
            <template slot-scope="scope">
                <m-name-value-inputs :ref="`nv-${scope.row}`"
                                     :data="configData[scope.row]"
                                     v-if="properties[scope.row].type === Object" size="small"></m-name-value-inputs>
                <el-form-item v-else :key="index" class="config-item-form-item">
                    <template v-if="properties[scope.row].type === String">
                        <el-input v-model="configData[scope.row]" size="small" style="width: 100%;"></el-input>
                    </template>
                    <el-input-number v-else-if="properties[scope.row].type === Number" v-model="configData[scope.row]"
                                     :min="properties[scope.row].min" :max="properties[scope.row].max" size="small"></el-input-number>
                    <el-select v-else-if="properties[scope.row].type === Types.Select" v-model="configData[scope.row]" size="small">
                        <el-option v-for="item in properties[scope.row].select" :label="item" :key="item" :value="item"></el-option>
                    </el-select>
                    <el-checkbox v-else-if="properties[scope.row].type === Boolean" v-model="configData[scope.row]"
                                 size="small">{{configData[scope.row] ? 'true' : 'false'}}</el-checkbox>
                    <el-select v-else-if="properties[scope.row].type === Array" v-model="configData[scope.row]" size="small"
                               multiple allow-create filterable default-first-option placeholder="请输入，按回车确定"></el-select>
                </el-form-item>
            </template>
        </el-table-column>
        <el-table-column label="说明">
            <template slot-scope="scope">
                <span>{{properties[scope.row].description}}</span>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
import types from "@/flume-configs/types";

import MNameValueInputs from "@/components/MNameValueInputs";

export default {
    name: 'config-form-items',
    components: {
        MNameValueInputs
    },
    props: {
        type: String,
        properties: Object,
        data: Object
    },
    mounted() {
        this.configData.name = this.data.name;
        this.configData.type = this.data.type;
        this.initDefaultValues(this.data);
    },
    data() {
        return {
            index: '',
            configData: {},
            Types: types,
            rules: {
                requiredInput: [
                    {required: true, message: '请输入', trigger: 'blur'}
                ],
                requiredSelect: [
                    {required: true, message: '请选择', trigger: 'blur'}
                ],
            }
        }
    },
    methods: {
        initDefaultValues(data) {
            if(data.hasOwnProperty('channels')) {
                this.configData.channels = data.channels;
            } else if(data.hasOwnProperty('channel')) {
                this.configData.channel = data.channel;
            }
            for(let key in this.properties) {
                const value = this.properties[key];
                let result = value.default;
                if(data && data.hasOwnProperty(key)) {
                    result = data[key];
                }
                this.$set(this.configData, key, result);
            }
        },
        handleAddMapItem(scope) {
            this.$refs[`nv-${scope.row}`].addItem();
        },
        getType() {
            return this.type;
        },
        getData() {
            const refs = Object.keys(this.$refs)
            if(refs.length > 0) {
                for(let key of refs) {
                    if(key.startsWith("nv-")) {
                        console.log(key, this.$refs[key]);
                        const data = this.$refs[key].getData();
                        const result = {};
                        if(data.length > 0) {
                            for(let item of data) {
                                result[item.name] = item.value;
                            }
                        }
                        const name = key.replace('nv-', '');
                        this.configData[name] = result;
                    }
                }
            }
            return this.configData
        }
    },
    watch: {
        'data.type'(val) {
            this.configData = {};
            this.configData.name = this.data.name;
            this.configData.type = this.data.type;
            this.initDefaultValues(this.data);
        },
        'data.name'(val) {
            this.configData.name = this.data.name;
        },
        'data.channel'(val) {
            this.configData.channel = this.data.channel;
        },
        'data.channels'() {
            this.configData.channels = this.data.channels;
        }
    }
}
</script>
