<template>
    <el-container class="global-container">
        <el-row>
            <el-col :span="12">
                <span class="back-menu" @click="$router.replace('/')">
                    <i class="el-icon-arrow-left"></i>
                    <span>修改配置 [{{configName}}]</span>
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
                        <el-row><el-button type="primary" size="mini" @click="handleChannelsAdd(1)">加一个</el-button></el-row>
                        <el-row>
                            <el-form :inline="true" :model="channelForm">
                                <el-collapse v-if="channelForm.channels && channelForm.channels.length > 0"
                                             v-model="channelsActiveCollapse" accordion @change="handleChannelsCollapseChange">
                                    <el-collapse-item v-for="(item, index) in channelForm.channels" :name="index" :key="index">
                                        <template slot="title">
                                            {{item.name}} [{{item.type}}] <el-link :underline="false"
                                                                                   @click="handleItemDelete(1, index, $event)"
                                                                                   style="margin-left: 10px;" type="danger">删除</el-link>
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
                    <el-row><el-button type="primary" size="mini" @click="handleChannelsAdd(2)">加一个</el-button></el-row>
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
                                    <br/>
                                    <config-form-items :ref="`source-${index}`" v-if="item.type" type="source"
                                                       :properties="Sources[item.type]" :data="sources[index]"></config-form-items>
                                </el-collapse-item>
                            </el-collapse>
                        </el-form>
                    </el-row>
                </el-tab-pane>

                <el-tab-pane label="Sinks" name="Sinks">
                    <el-row><el-button type="primary" size="mini" @click="handleChannelsAdd(3)">加一个</el-button></el-row>
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
                                    <config-form-items :ref="`sink-${index}`" v-if="item.type" type="sink"
                                                       :properties="Sinks[item.type]" :data="sinks[index]"></config-form-items>
                                </el-collapse-item>
                            </el-collapse>
                        </el-form>
                    </el-row>
                </el-tab-pane>
            </el-tabs>
        </el-row>
    </el-container>
</template>

<script>
import Sources from '../../flume-configs/sources';
import Channels from '../../flume-configs/channels';
import Sinks from '../../flume-configs/sinks';
import api from "@/api/api";
import utils from "@/common/utils";
import merge from 'deepmerge'

import ConfigFormItems from "@/pages/configs/ConfigFormItems";

export default {
    name: 'edit-configs',
    components: {
        ConfigFormItems
    },
    data() {
        return {
            merge,
            Sources,
            Channels,
            Sinks,
            activeTab: 'Channels',
            configName: '',
            agentNameForm: {
                agentName: '',
            },

            channelsActiveCollapse: '',
            channelForm: {
                channels: [],
            },
            channelsIndex: 0,

            sourcesActiveCollapse: '',
            sources: [],
            sourcesIndex: 0,

            sinksActiveCollapse: '',
            sinks: [],
            sinksIndex: 0,

            sourceTypes: Object.keys(Sources),
            channelTypes: Object.keys(Channels),
            sinkTypes: Object.keys(Sinks),

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
    computed: {
        configId() {
            return this.$route.params.configId;
        }
    },
    mounted() {
        this.getConfig(this.$route.params.configId);
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
        handleChannelsAdd(type) {
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
                inputValue: this.configName,
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
                this.updateConfig(value, this.agentNameForm.agentName, channels, sources, sinks, loading);
            }).catch(() => {loading.close();});
        },
        updateConfig(name, agentName, channels, sources, sinks, loading) {
            api.config.updateConfig(this.configId, {
                name,
                agentName,
                channels: JSON.stringify(channels, utils.deleteKey),
                sources: JSON.stringify(sources, utils.deleteKey),
                sinks: JSON.stringify(sinks, utils.deleteKey)
            }, {useLoading: false}).then(data => {
                if(loading) loading.close();
                if(data.code === 1) {
                    this.$message.success("修改成功");
                    this.$router.replace('/');
                } else {
                    this.$message.error(data.message);
                }
            }).catch(() => {if(loading) loading.close();});
        },
        getConfig() {
            api.config.getConfig(this.configId).then(data => {
                if(data.code === 1) {
                    const config = data.data;
                    this.agentNameForm.agentName = config.agentName;
                    this.configName = config.name;
                    let channels = JSON.parse(config.channels);
                    const channelsArr = [];
                    for(let key in channels) {
                        channels[key].name = key;
                        channelsArr.push(channels[key])
                    }

                    let sources = JSON.parse(config.sources);
                    const sourcesArr = [];
                    for(let key in sources) {
                        sources[key].name = key;
                        sourcesArr.push(sources[key]);
                    }

                    let sinks = JSON.parse(config.sinks);
                    const sinksArr = [];
                    for(let key in sinks) {
                        sinks[key].name = key;
                        sinksArr.push(sinks[key]);
                    }

                    this.channelForm.channels = channelsArr;
                    this.sources = sourcesArr;
                    this.sinks = sinksArr;
                } else {
                    this.$message.error(data.message);
                }
            });
        }
    }
}
</script>
