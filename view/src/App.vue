<template>
    <div id="app" style="height: 100%;overflow-y: hidden">
        <el-container style="height: 100%;position: relative;bottom: 0;overflow-y: hidden">
            <el-aside width="200px">
                <el-menu :default-active="activeIndex"
                         background-color="#303543"
                         text-color="#fff"
                         active-text-color="#409EFF"
                         :router="true"
                         style="height: 100%;">
                    <el-menu-item index="/">
                        <template slot="title">
                            <i class="el-icon-s-cooperation"></i>
                            <span>配置管理</span>
                        </template>
                    </el-menu-item>
                    <el-menu-item index="/plugins">
                        <template slot="title">
                            <i class="el-icon-s-platform"></i>
                            <span>拓扑管理</span>
                        </template>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main style="overflow-y: auto;">
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            activeIndex: '/'
        }
    },
    methods: {
        getActiveIndex(val) {
            if(!this.$route.meta.parent) {
                this.activeIndex = val;
            } else {
                this.activeIndex = this.$route.meta.parent();
            }
        }
    },
    mounted() {
        this.getActiveIndex(this.$route.path);
    },
    watch: {
        '$route.path'(val) {
            this.getActiveIndex(val);
        }
    }
}
</script>
