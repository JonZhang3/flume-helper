<template>
    <el-container class="global-container">
        <el-row>
            <el-col :span="12">
                <span class="back-menu" @click="$router.replace('/')">
                    <i class="el-icon-arrow-left"></i>
                    <span>新增配置</span>
                </span>
            </el-col>
            <el-col :span="12" style="text-align: right;">
                <el-button type="primary" size="mini" @click="handleSave">保存</el-button>
            </el-col>
        </el-row>
        <el-row style="flex: 1;">
            <div style="display: inline-block; width: 100%;">
                <el-form :inline="true" :model="agentNameForm">
                    <el-form-item label="Agent Name" prop="agentName" :rules="rules.agentName">
                        <el-input v-model="agentNameForm.agentName" size="small"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <el-tabs v-model="activeTab">
                <el-tab-pane label="Channels" name="Channels">
                    <div>
                        <el-row><el-button type="primary" size="mini" @click="handleAdd(1)">加一个</el-button></el-row>
                        <el-row>
                            <el-form :inline="true" :model="channelForm">
                                <el-collapse v-if="channelForm.channels && channelForm.channels.length > 0"
                                             v-model="channelsActiveCollapse" accordion @change="handleChannelsCollapseChange">
                                    <el-collapse-item v-for="(item, index) in channelForm.channels" :name="index" :key="index">
                                        <template slot="title">
                                            {{item.name}} [{{item.type}}] <el-link :underline="false"
                                                                   @click="handleItemDelete(1, index, $event)" style="margin-left: 10px;" type="danger">删除</el-link>
                                        </template>
                                        <el-form-item label="名称" :prop="`channels.${index}.name`" :rules="rules.requiredInput">
                                            <el-input placeholder="必填" size="small" v-model="item.name"></el-input>
                                        </el-form-item>
                                        <el-form-item label="类型" :prop="`channels.${index}.name`" :rules="rules.requiredSelect">
                                            <el-select placeholder="请选择" size="small" v-model="item.type">
                                                <el-option v-for="item in channelTypes"
                                                           :key="item" :label="item" :value="item"></el-option>
                                            </el-select>
                                        </el-form-item>
                                        <br/>
                                        <config-form-items :ref="`channel-${index}`" v-if="item.type" type="channel"
                                                           :properties="Channels[item.type]" :data="channelForm.channels[index]"></config-form-items>
                                    </el-collapse-item>
                                </el-collapse>
                            </el-form>
                        </el-row>
                    </div>
                </el-tab-pane>

                <el-tab-pane label="Sources" name="Sources">
                    <el-row><el-button type="primary" size="mini" @click="handleAdd(2)">加一个</el-button></el-row>
                    <el-row>
                        <el-form :inline="true">
                            <el-collapse v-if="sources && sources.length > 0"
                                         v-model="sourcesActiveCollapse" accordion @change="handleSourcesCollapseChange">
                                <el-collapse-item v-for="(item, index) in sources" :name="index" :key="index">
                                    <template slot="title">
                                        {{item.name}} [{{item.type}}] <el-link :underline="false" @click="handleItemDelete(2, index, $event)"
                                                               style="margin-left: 10px;" type="danger">删除</el-link>
                                    </template>
                                    <el-form-item label="名称" required>
                                        <el-input placeholder="必填" size="small" v-model="item.name"></el-input>
                                    </el-form-item>
                                    <el-form-item label="类型" required>
                                        <el-select placeholder="请选择" size="small" v-model="item.type">
                                            <el-option v-for="item in sourceTypes"
                                                       :key="item" :label="item" :value="item"></el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="Channels" required>
                                        <el-select placeholder="请选择" size="small" multiple v-model="item.channels">
                                            <el-option v-for="c in channelForm.channels" :key="c.name" :label="c.name" :value="c.name"></el-option>
                                        </el-select>
                                    </el-form-item>
                                    <div>
                                        <div>
                                            <div>Interceptors</div>
                                            <el-button type="primary" size="mini" @click="handleInterceptorsAdd">+Interceptor</el-button>
                                        </div>
                                        <el-collapse v-if="interceptors && interceptors.length > 0" v-model="interceptorActiveCollapse" accordion @change="handleInterceptorsCollapseChange">
                                            <el-collapse-item v-for="(item, index) in interceptors" :name="index" :key="index">
                                                <template slot="title">
                                                    {{item.type}} <el-link :underline="false" @click="handleInterceptorDelete(index, $event)" style="margin-left: 10px;" type="danger">删除</el-link>
                                                </template>
                                                <config-form-items :ref="`interceptor-${index}`" v-if="item.type" type="interceptor" :properties="Interceptors[item.type]" :data="interceptors[index]"></config-form-items>
                                            </el-collapse-item>
                                        </el-collapse>
                                    </div>
                                    <br/>
                                    <config-form-items :ref="`source-${index}`" v-if="item.type" type="source" :properties="Sources[item.type]" :data="sources[index]"></config-form-items>
                                </el-collapse-item>
                            </el-collapse>
                        </el-form>
                    </el-row>
                </el-tab-pane>

                <el-tab-pane label="Sinks" name="Sinks">
                    <el-row><el-button type="primary" size="mini" @click="handleAdd(3)">加一个</el-button></el-row>
                    <el-row>
                        <el-form :inline="true">
                            <el-collapse v-if="sinks && sinks.length > 0"
                                         v-model="sinksActiveCollapse" accordion @change="handleSinksCollapseChange">
                                <el-collapse-item v-for="(item, index) in sinks" :name="index" :key="index">
                                    <template slot="title">
                                        {{item.name}} [{{item.type}}] <el-link :underline="false" style="margin-left: 10px;"
                                                               @click="handleItemDelete(3, index, $event)"
                                                               type="danger">删除</el-link>
                                    </template>
                                    <el-form-item label="名称" required>
                                        <el-input placeholder="必填" size="small" v-model="item.name"></el-input>
                                    </el-form-item>
                                    <el-form-item label="类型" required>
                                        <el-select placeholder="请选择" size="small" v-model="item.type">
                                            <el-option v-for="item in sinkTypes"
                                                       :key="item" :label="item" :value="item"></el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="Channel" required>
                                        <el-select placeholder="请选择" size="small" v-model="item.channel">
                                            <el-option v-for="c in channelForm.channels" :key="c.name" :label="c.name" :value="c.name"></el-option>
                                        </el-select>
                                    </el-form-item>
                                    <br/>
                                    <config-form-items :ref="`sink-${index}`" v-if="item.type" type="sink" :properties="Sinks[item.type]" :data="sinks[index]"></config-form-items>
                                </el-collapse-item>
                            </el-collapse>
                        </el-form>
                    </el-row>
                </el-tab-pane>
            </el-tabs>
        </el-row>
        <el-dialog :visible.sync="interceptorTypeSelectDiaVis" width="30%" title="选择 Interceptor 类型">
            <el-select v-model="interceptorSelectedVal" placeholder="请选择" style="width: 100%;">
                <el-option v-for="item in interceptorTypes" :label="item" :key="item" :value="item"></el-option>
            </el-select>
            <span slot="footer" class="dialog-footer">
                <el-button @click="interceptorTypeSelectDiaVis = false">取 消</el-button>
                <el-button type="primary" @click="handleIntercetorAddDialogOk">确 定</el-button>
            </span>
        </el-dialog>
    </el-container>
</template>

<script>
import Sources from '../../flume-configs/sources';
import Channels from '../../flume-configs/channels';
import Sinks from '../../flume-configs/sinks';
import Interceptors from '../../flume-configs/interceptors';
import api from "@/api/api";
import utils from "@/common/utils";

import ConfigFormItems from "@/pages/configs/ConfigFormItems";
import InterceptorItem from "@/pages/configs/InterceptorItem";

export default {
    name: 'new-configs',
    components: {
        ConfigFormItems,
        InterceptorItem
    },
    data() {
        return {
            Sources,
            Channels,
            Sinks,
            Interceptors,
            activeTab: 'Channels',
            interceptorTypeSelectDiaVis: false,

            agentNameForm: {
                agentName: 'a1',
            },

            channelsActiveCollapse: '',
            channelForm: {
                channels: [],
            },
            channelsIndex: 0,

            sourcesActiveCollapse: '',
            sources: [],
            sourcesIndex: 0,
            interceptorSelectedVal: '',
            interceptorActiveCollapse: '',
            interceptors: [],

            sinksActiveCollapse: '',
            sinks: [],
            sinksIndex: 0,

            sourceTypes: Object.keys(Sources),
            channelTypes: Object.keys(Channels),
            sinkTypes: Object.keys(Sinks),
            interceptorTypes: Object.keys(Interceptors),

            rules: {
                agentName: [
                    {required: true, message: '请输入', trigger: 'blur'},
                ],
                requiredInput: [
                    {required: true, message: '请输入', trigger: 'blur'},
                ],
                requiredSelect: [
                    {required: true, message: '请选择', trigger: 'blur'},
                ]
            }
        }
    },
    methods: {
        handleChannelsCollapseChange(active) {
            this.channelsActiveCollapse = active;
        },
        handleSourcesCollapseChange(active) {
            this.sourcesActiveCollapse = active;
        },
        handleSinksCollapseChange(active) {
            this.sinksActiveCollapse = active;
        },
        handleInterceptorsCollapseChange(active) {
            this.interceptorActiveCollapse = active;
        },
        handleInterceptorsAdd() {
            if(this.interceptors.length >= 10) {
                this.$message.info("最多添加 10 个 Interceptors");
            }
            this.interceptorSelectedVal = '';
            this.interceptorTypeSelectDiaVis = true;
        },
        handleIntercetorAddDialogOk() {
            if(!this.interceptorSelectedVal) {
                this.$message.warning("请选择一个 Interceptor 类型");
                return;
            }
            this.interceptors.push({
                type: this.interceptorSelectedVal
            });
            this.interceptorSelectedVal = '';
            this.interceptorTypeSelectDiaVis = false;
            this.interceptorActiveCollapse = this.interceptors.length - 1;
        },
        handleInterceptorDelete(index, e) {
            e.stopPropagation();
            e.preventDefault();
            this.interceptors.splice(index, 1);
        },
        handleAdd(type) {
            switch (type) {
                case 1:
                    if(this.channelForm.channels.length >= 10) {
                        this.$message.info("最多添加 10 个 Channels");
                        return;
                    }
                    this.channelForm.channels.push({
                        name: 'c' + ++this.channelsIndex,
                        type: ''
                    });
                    this.channelsActiveCollapse = this.channelForm.channels.length - 1;
                    break;
                case 2:
                    if(this.sources.length >= 10) {
                        this.$message.info("最多添加 10 个 Sources");
                        return;
                    }
                    this.sources.push({
                        name: 'r' + ++this.sourcesIndex,
                        type: '',
                        channels: []
                    });
                    this.sourcesActiveCollapse = this.sources.length - 1;
                    break;
                case 3:
                    if(this.sinks.length >= 10) {
                        this.$message.info("最多添加 10 个 Sinks");
                        return;
                    }
                    this.sinks.push({
                        name: 'k' + ++this.sinksIndex,
                        type: '',
                        channel: ''
                    });
                    this.sinksActiveCollapse = this.sinks.length - 1;
                    break;
            }

        },
        handleItemDelete(type, index, e) {
            e.stopPropagation();
            e.preventDefault();
            switch (type) {
                case 1:
                    this.channelForm.channels.splice(index, 1);
                    break;
                case 2:
                    this.sources.splice(index, 1);
                    break;
                case 3:
                    this.sinks.splice(index, 1);
                    break;
            }
        },
        handleSave() {
            const loading = this.$loading({
                lock: true,
                text: '拼命加载中...',
                spinner: 'el-icon-loading'
            });
            const refs = Object.keys(this.$refs)
            if(refs.length === 0) {
                this.$message.warning("请完成配置");
                loading.close();
                return;
            }
            const channels = {}, sources = {}, sinks = {};
            for(let key of refs) {
                if(key.startsWith("channel")) {
                    const data = this.$refs[key][0].getData();
                    const name = data.name;
                    if(!name) {
                        this.$message.warning("有 Channel 未指定名称");
                        loading.close();
                        return;
                    }
                    channels[name] = data;
                } else if(key.startsWith("source")) {
                    const data = this.$refs[key][0].getData();
                    const name = data.name;
                    if(!name) {
                        this.$message.warning("有 Source 未指定名称");
                        loading.close();
                        return;
                    }
                    sources[name] = data;
                } else if(key.startsWith("sink")) {
                    const data = this.$refs[key][0].getData();
                    const name = data.name;
                    if(!name) {
                        this.$message.warning("有 Sink 未指定名称");
                        loading.close();
                        return;
                    }
                    sinks[name] = data;
                }
            }
            if(Object.keys(channels).length === 0) {
                this.$message.warning("最少添加一个 Channel");
                loading.close();
                return;
            }
            if(Object.keys(sources).length === 0) {
                this.$message.warning("最少添加一个 Source");
                loading.close();
                return;
            }
            if(Object.keys(sinks).length === 0) {
                this.$message.warning("最少添加一个 Sink");
                loading.close();
                return;
            }
            this.$prompt('配置名', '请输入配置名', {
                confirmButtonText: '保存',
                cancelButtonText: '取消',
                inputValidator(val) {
                    if(!val) {
                        return "请输入配置名"
                    }
                    if(val.length > 64) {
                        return "配置名最大长度为 64";
                    }
                    return true
                }
            }).then(({value}) => {
                this.addConfig(value, this.agentNameForm.agentName, channels, sources, sinks, loading);
            }).catch(() => {loading.close();});
        },
        addConfig(name, agentName, channels, sources, sinks, loading) {
            api.config.addConfig({
                name,
                agentName,
                channels: JSON.stringify(channels, utils.deleteKey),
                sources: JSON.stringify(sources, utils.deleteKey),
                sinks: JSON.stringify(sinks, utils.deleteKey)
            }, {useLoading: false}).then(data => {
                if(loading) loading.close();
                if(data.code === 1) {
                    this.$message.success("新增成功");
                    this.$router.replace('/');
                } else {
                    this.$message.error(data.message);
                }
            }).catch(() => {if(loading) loading.close();});
        }
    }
}
</script>
