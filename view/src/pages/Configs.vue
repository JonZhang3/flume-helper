<template>
    <el-container class="global-container">
        <el-row style="text-align: right">
            <el-button type="primary" size="mini"
                       icon="el-icon-plus"
                       @click="$router.push('/configs/new')">新增配置</el-button>
        </el-row>
        <el-row style="flex: 1;">
            <el-table stripe :data="configs">
                <el-table-column prop="name" label="名称"></el-table-column>
                <el-table-column prop="createTime" label="创建时间"></el-table-column>
                <el-table-column prop="updateTime" label="修改时间"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <span class="el-link-group">
                            <el-link :underline="false" type="primary" @click="handleView(scope.row)">查看</el-link>
                            <el-link :underline="false" type="primary" @click="handleEdit(scope.row)">编辑</el-link>
                            <el-link :underline="false" type="danger" @click="handleDelete(scope.row, $event)">删除</el-link>
                        </span>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
        <el-row style="text-align: right;margin-top: 10px;">
            <el-pagination background layout="prev,pager,next" small :page-size="pager.pageSize" :hide-on-single-page="true"
                           :current-page="pager.page" :total="pager.total" @current-change="handlePageChange"></el-pagination>
        </el-row>
    </el-container>
</template>

<script>

import api from "@/api/api";

export default {
    name: 'configs',
    data() {
        return {
            viewConfigDialogVisible: false,
            viewconfigId: '',
            pager: {pageSize: 10, page: 1, total: 0},
            configs: []
        }
    },
    mounted() {
        this.pageListConfigs(null, 1);
    },
    methods: {
        handleEdit(data) {
            this.$router.push(`/configs/edit/${data.id}`);
        },
        handleView(data) {
            this.$router.push(`/configs/view/${data.id}`);
        },
        handlePageChange(page) {
            this.pageListConfigs(null, page);
        },
        handleDelete(data, e) {
            e.stopPropagation();
            e.preventDefault();
            this.$confirm(`<span>确定删除 [<strong style="color: #f56c6c;">${data.name}</strong>] 配置吗</span>`, '提示', {
                dangerouslyUseHTMLString: true,
                confirmButtonText: '删除',
                type: 'warning'
            }).then(() => {
                this.deleteConfig(data.id);
            }).catch(() => {})
        },
        pageListConfigs(name, page) {
            const params = {page}
            if(name) {
                params.name = name;
            }
            api.config.pageQueryConfig(params).then(data => {
                if(data.code === 1) {
                    this.pager.pageSize = data.data.limit;
                    this.pager.page = data.data.page;
                    this.pager.total = data.data.total;
                    this.configs = data.data.records;
                } else {
                    this.$message.error(data.message);
                }
            });
        },
        deleteConfig(id) {
            api.config.deleteConfig(id).then(data => {
                if(data.code === 1) {
                    this.pageListConfigs(null, 1);
                } else {
                    this.$message.error(data.message);
                }
            });
        }
    }
}
</script>
