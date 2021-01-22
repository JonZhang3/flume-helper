export default {
    table: {
        type: String,
        default: '',
        required: true,
        description: 'The name of the table in Hbase to write to'
    },
    columnFamily: {
        type: String,
        default: '',
        required: true,
        description: 'The column family in Hbase to write to'
    },
    zookeeperQuorum: {
        type: String,
        default: '',
        description: 'The quorum spec. This is the value for the property hbase.zookeeper.quorum in hbase-site.xml'
    },
    znodeParent: {
        type: String,
        default: '/hbase',
        description: 'The base path for the znode for the -ROOT- region. Value of zookeeper.znode.parent in hbase-site.xml'
    },
    batchSize: {
        type: Number,
        default: 100,
        description: 'Number of events to be written per txn'
    },
    coalesceIncrements: {
        type: Boolean,
        default: false,
        description: 'Should the sink coalesce multiple increments to a cell per batch. This might give better performance if there are multiple increments to a limited number of cells'
    },
    timeout: {
        type: Number,
        default: 60000,
        min: 0,
        description: 'The length of time (in milliseconds) the sink waits for acks from hbase for all events in a transaction'
    },
    serializer: {
        type: String,
        default: 'org.apache.flume.sink.hbase2.SimpleHBase2EventSerializer',
        description: 'Default increment column = “iCol”, payload column = “pCol”'
    },
    'serializer.*': {
        type: Object,
        default: {},
        description: 'Properties to be passed to the serializer'
    },
    'async.*': {
        type: Object,
        default: {},
        description: 'Properties to be passed to asyncHbase library. These properties have precedence over the old zookeeperQuorum and znodeParent values'
    }
}
