<template>
    <el-container class="global-container">
        <el-row>
            <el-col :span="12">
                <span class="back-menu" @click="$router.back()">
                    <i class="el-icon-arrow-left"></i>
                    <span>查看 [{{configName}}]</span>
                </span>
            </el-col>
            <el-col :span="12" style="text-align: right;">
                <el-button type="primary" size="mini" @click="handleCopy">复制</el-button>
            </el-col>
        </el-row>
        <el-row class="config-text-wrapper" ref="content-wrapper"
                style="flex: 1;overflow: auto;background-color: #f8f8f8;margin-top: 5px;padding: 5px;" v-html="configText"></el-row>
    </el-container>
</template>

<script>
import Sources from '../../flume-configs/sources';
import Channels from '../../flume-configs/channels';
import Sinks from '../../flume-configs/sinks';
import api from "@/api/api";
import utils from "@/common/utils";
import copy from 'copy-to-clipboard';

export default {
    name: 'view-config',
    data() {
        return {
            configName: '',
            config: {},
            configText: ''
        }
    },
    mounted() {
        this.getConfig(this.id);
    },
    computed: {
        id() {
            return this.$route.params.configId;
        }
    },
    methods: {
        handleCopy() {
            if(copy(this.$refs['content-wrapper'].$el.innerText, {format: 'text/plain'})) {
                this.$message.success('复制成功');
            }
        },
        getConfig(id) {
            api.config.getConfig(id).then(data => {
                if(data.code === 1) {
                    this.config = data.data;
                    this.rendeConfg(this.config);
                } else {
                    this.$message.error(data.message);
                }
            });
        },
        getHtml(datas, type, agentName, agentHtml, linkHtml) {
            const html = [];
            if(datas) {
                const names = Object.keys(datas)
                if(names.length > 0) {
                    agentHtml.push('<span>' + agentName + '.' + type + '=' + names.join(' ') +'</span>');
                    for(let name of names) {
                        const data = datas[name];
                        for(let key in data) {
                            if(type === 'sources' && key === 'channels') {
                                linkHtml.push('<span>' + agentName + '.' + type + '.' + name + '.channels=' + data[key].join(' ') + '</span>');
                            } else if(type === 'sinks' && key === 'channel') {
                                linkHtml.push('<span>' + agentName + '.' + type + '.' + name + '.channel=' + data[key] + '</span>');
                            } else {
                                if(utils.isBoolean(data[key])) {
                                    html.push('<span>' + agentName + '.' + type + '.' + name + '.' + key + '=' + data[key] + '</span>');
                                } else if(utils.isArray(data[key]) && data[key].length > 0) {
                                    debugger;
                                    let separator = ',';
                                    if(type === 'sources') {
                                        const s = Sources[data.type][key].separator
                                        if (s) separator = s;
                                    } else if(type === 'channels') {
                                        const s = Channels[data.type][key].separator
                                        if (s) separator = s;
                                    } else if(type === 'sinks') {
                                        const s = Sinks[data.type][key].separator
                                        if (s) separator = s;
                                    }
                                    html.push('<span>' + agentName + '.' + type + '.' + name + '.' + key + '=' + data[key].join(separator) + '</span>');
                                } else if(utils.isObject(data[key])) {
                                    const k = key.replace(".*", '');
                                    for(let ak in data[key]) {
                                        html.push('<span>' + agentName + '.' + type + '.' + name + '.' + k + '.' + ak + '=' + data[key][ak] + '</span>');
                                    }
                                } else if(data[key]) {
                                    html.push('<span>' + agentName + '.' + type + '.' + name + '.' + key + '=' + data[key] + '</span>');
                                }
                            }
                        }
                    }
                }
            }
            return html;
        },
        rendeConfg(config) {
            this.configName = config.name;
            const agentName = config.agentName;
            const channels = JSON.parse(config.channels);
            const sources = JSON.parse(config.sources);
            const sinks = JSON.parse(config.sinks);
            const agentHtml = [];
            const linkHtml = [];
            const channelsHtml = this.getHtml(channels, 'channels', agentName, agentHtml, linkHtml);
            const sourcesHtml = this.getHtml(sources, 'sources', agentName, agentHtml, linkHtml);
            const sinksHtml = this.getHtml(sinks, 'sinks', agentName, agentHtml, linkHtml);
            this.configText = agentHtml.join('') + '<br/>'
                + channelsHtml.join('') + '<br/>'
                + sourcesHtml.join('') + '<br/>'
                + sinksHtml.join('') + '<br/>'
                + linkHtml.join('');
        }
    }
}
</script>
<style>
.config-text-wrapper span {
    display: block;
}
</style>
