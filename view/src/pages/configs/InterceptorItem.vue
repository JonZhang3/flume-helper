<template>
    <el-table :data="data" class="config-item-root">
        <el-table-column label="类型" width="250">
            <template slot-scope="scope">
                <span v-if="scope.row.type !== 'Custom'">{{scope.row.type}}</span>
                <el-input v-else size="small" style="width: 100%;"></el-input>
            </template>
        </el-table-column>
        <el-table-column label="值">

        </el-table-column>
    </el-table>
</template>

<script>
import Interceptors from '../../flume-configs/interceptors';

export default {
    name: 'interceptor-item',
    props: {
        data: Object
    },
    data() {
        return {

        };
    },

}

</script>
