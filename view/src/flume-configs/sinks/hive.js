import types from "@/flume-configs/types";

export default {
    'hive.metastore': {
        type: String,
        default: '',
        required: true,
        description: 'Hive metastore URI (eg thrift://a.b.com:9083 )'
    },
    'hive.database': {
        type: String,
        default: '',
        required: true,
        description: 'Hive database name'
    },
    'hive.table': {
        type: String,
        default: '',
        required: true,
        description: 'Hive table name'
    },
    serializer: {
        type: types.Select,
        default: '',
        select: ['DELIMITED', 'JSON'],
        description: 'Serializer is responsible for parsing out field from the event and mapping them to columns in the hive table. Choice of serializer depends upon the format of the data in the event. Supported serializers: DELIMITED and JSON'
    },
    'hive.partition': {
        type: String,
        default: '',
        description: 'Comma separate list of partition values identifying the partition to write to. May contain escape sequences. E.g: If the table is partitioned by (continent: string, country :string, time : string) then ‘Asia,India,2014-02-26-01-21’ will indicate continent=Asia,country=India,time=2014-02-26-01-21'
    },
    'hive.txnsPerBatchAsk': {
        type: Number,
        default: 100,
        min: 0,
        description: 'Hive grants a batch of transactions instead of single transactions to streaming clients like Flume. This setting configures the number of desired transactions per Transaction Batch. Data from all transactions in a single batch end up in a single file. Flume will write a maximum of batchSize events in each transaction in the batch. This setting in conjunction with batchSize provides control over the size of each file. Note that eventually Hive will transparently compact these files into larger files'
    },
    heartBeatInterval: {
        type: Number,
        default: 240,
        min: 0,
        description: '(In seconds) Interval between consecutive heartbeats sent to Hive to keep unused transactions from expiring. Set this value to 0 to disable heartbeats'
    },
    autoCreatePartitions: {
        type: Boolean,
        default: true,
        description: 'Flume will automatically create the necessary Hive partitions to stream to'
    },
    batchSize: {
        type: Number,
        default: 15000,
        min: 0,
        description: 'Max number of events written to Hive in a single Hive transaction'
    },
    maxOpenConnections: {
        type: Number,
        default: 500,
        description: 'Allow only this number of open connections. If this number is exceeded, the least recently used connection is closed'
    },
    callTimeout: {
        type: Number,
        default: 10000,
        min: 0,
        description: '(In milliseconds) Timeout for Hive & HDFS I/O operations, such as openTxn, write, commit, abort'
    },
    roundUnit: {
        type: types.Select,
        default: 'minute',
        select: ['second', 'minute', 'hour'],
        description: 'The unit of the round down value - second, minute or hour'
    },
    roundValue: {
        type: Number,
        default: 1,
        min: 0,
        description: 'Rounded down to the highest multiple of this (in the unit configured using hive.roundUnit), less than current time'
    },
    timeZone: {
        type: String,
        default: 'Local Time',
        description: 'Name of the timezone that should be used for resolving the directory path, e.g. America/Los_Angeles'
    },
    useLocalTimeStamp: {
        type: Boolean,
        default: false,
        description: 'Use the local time (instead of the timestamp from the event header) while replacing the escape sequences'
    }
}
