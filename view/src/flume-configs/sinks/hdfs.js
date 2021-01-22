import types from "@/flume-configs/types";

export default {
    'hdfs.path': {
        type: String,
        default: '',
        required: true,
        description: 'HDFS directory path (eg hdfs://namenode/flume/webdata/)'
    },
    'hdfs.filePrefix': {
        type: String,
        default: 'FlumeData',
        description: 'Name prefixed to files created by Flume in hdfs directory'
    },
    'hdfs.fileSuffix': {
        type: String,
        default: '',
        description: 'Suffix to append to file (eg .avro - NOTE: period is not automatically added)'
    },
    'hdfs.inUsePrefix': {
        type: String,
        default: '',
        description: 'Prefix that is used for temporal files that flume actively writes into'
    },
    'hdfs.inUseSuffix': {
        type: String,
        default: '.tmp',
        description: 'Suffix that is used for temporal files that flume actively writes into'
    },
    'hdfs.emptyInUseSuffix': {
        type: Boolean,
        default: false,
        description: 'If false an hdfs.inUseSuffix is used while writing the output. After closing the output hdfs.inUseSuffix is removed from the output file name. If true the hdfs.inUseSuffix parameter is ignored an empty string is used instead'
    },
    'hdfs.rollInterval': {
        type: Number,
        default: 30,
        min: 0,
        description: 'Number of seconds to wait before rolling current file (0 = never roll based on time interval)'
    },
    'hdfs.rollSize': {
        type: Number,
        default: 1024,
        min: 0,
        description: 'File size to trigger roll, in bytes (0: never roll based on file size)'
    },
    'hdfs.rollCount': {
        type: Number,
        default: 10,
        min: 0,
        description: 'Number of events written to file before it rolled (0 = never roll based on number of events)'
    },
    'hdfs.idleTimeout': {
        type: Number,
        default: 0,
        min: 0,
        description: 'Timeout after which inactive files get closed (0 = disable automatic closing of idle files)'
    },
    'hdfs.batchSize': {
        type: Number,
        default: 100,
        min: 1,
        description: 'number of events written to file before it is flushed to HDFS'
    },
    'hdfs.codeC': {
        type: types.Select,
        default: '',
        select: ['gzip', 'bzip2', 'lzo', 'lzop', 'snappy'],
        description: 'Compression codec. one of following : gzip, bzip2, lzo, lzop, snappy'
    },
    'hdfs.fileType': {
        type: types.Select,
        select: ['SequenceFile', 'DataStream', 'CompressedStream'],
        default: 'SequenceFile',
        description: 'File format: currently SequenceFile, DataStream or CompressedStream (1)DataStream will not compress output file and please don’t set codeC (2)CompressedStream requires set hdfs.codeC with an available codeC'
    },
    'hdfs.maxOpenFiles': {
        type: Number,
        default: 5000,
        min: 0,
        description: 'Allow only this number of open files. If this number is exceeded, the oldest file is closed'
    },
    'hdfs.minBlockReplicas': {
        type: Number,
        min: 0,
        description: 'Specify minimum number of replicas per HDFS block. If not specified, it comes from the default Hadoop config in the classpath'
    },
    'hdfs.writeFormat': {
        type: types.Select,
        select: ['Writable', 'Text'],
        default: 'Writable',
        description: 'Format for sequence file records. One of Text or Writable. Set to Text before creating data files with Flume, otherwise those files cannot be read by either Apache Impala (incubating) or Apache Hive'
    },
    'hdfs.threadsPoolSize': {
        type: Number,
        default: 10,
        description: 'Number of threads per HDFS sink for HDFS IO ops (open, write, etc.)'
    },
    'hdfs.rollTimerPoolSize': {
        type: Number,
        default: 1,
        description: 'Number of threads per HDFS sink for scheduling timed file rolling'
    },
    'hdfs.kerberosPrincipal': {
        type: String,
        default: '',
        description: 'Kerberos user principal for accessing secure HDFS'
    },
    'hdfs.kerberosKeytab': {
        type: String,
        default: '',
        description: 'Kerberos keytab for accessing secure HDFS'
    },
    'hdfs.proxyUser': {
        type: String,
        default: '',
        description: ''
    },
    'hdfs.round': {
        type: Boolean,
        default: false,
        description: 'Should the timestamp be rounded down (if true, affects all time based escape sequences except %t)'
    },
    'hdfs.roundValue': {
        type: Number,
        default: 1,
        description: 'Rounded down to the highest multiple of this (in the unit configured using hdfs.roundUnit), less than current time'
    },
    'hdfs.roundUnit': {
        type: types.Select,
        select: ['second', 'minute', 'hour'],
        default: 'second',
        description: 'The unit of the round down value - second, minute or hour'
    },
    'hdfs.timeZone': {
        type: String,
        default: 'Local Time',
        description: 'Name of the timezone that should be used for resolving the directory path, e.g. America/Los_Angeles'
    },
    'hdfs.useLocalTimeStamp': {
        type: Boolean,
        default: false,
        description: 'Use the local time (instead of the timestamp from the event header) while replacing the escape sequences'
    },
    'hdfs.closeTries': {
        type: Number,
        default: 0,
        min: 0,
        description: 'Number of times the sink must try renaming a file, after initiating a close attempt. If set to 1, this sink will not re-try a failed rename (due to, for example, NameNode or DataNode failure), and may leave the file in an open state with a .tmp extension. If set to 0, the sink will try to rename the file until the file is eventually renamed (there is no limit on the number of times it would try). The file may still remain open if the close call fails but the data will be intact and in this case, the file will be closed only after a Flume restart'
    },
    'hdfs.retryInterval': {
        type: Number,
        default: 180,
        min: 0,
        description: 'Time in seconds between consecutive attempts to close a file. Each close call costs multiple RPC round-trips to the Namenode, so setting this too low can cause a lot of load on the name node. If set to 0 or less, the sink will not attempt to close the file if the first attempt fails, and may leave the file open or with a ”.tmp” extension'
    },
    serializer: {
        type: String,
        default: 'TEXT',
        description: 'Other possible options include avro_event or the fully-qualified class name of an implementation of the EventSerializer.Builder interface'
    },
    'serializer.*': {
        type: Object,
        default: {},
        description: ''
    }
}
