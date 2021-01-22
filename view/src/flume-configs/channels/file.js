export default {
    checkpointDir: {
        type: String,
        default: '~/.flume/file-channel/checkpoint',
        description: 'The directory where checkpoint file will be stored'
    },
    useDualCheckpoints: {
        type: Boolean,
        default: false,
        description: 'Backup the checkpoint. If this is set to true, backupCheckpointDir must be set'
    },
    backupCheckpointDir: {
        type: String,
        default: '',
        description: 'The directory where the checkpoint is backed up to. This directory must not be the same as the data directories or the checkpoint directory'
    },
    dataDirs: {
        type: Array,
        default: ['~/.flume/file-channel/data'],
        description: 'list of directories for storing log files. Using multiple directories on separate disks can improve file channel peformance'
    },
    transactionCapacity: {
        type: Number,
        default: 10000,
        description: 'The maximum size of transaction supported by the channel'
    },
    checkpointInterval: {
        type: Number,
        default: 30000,
        description: 'Amount of time (in millis) between checkpoints'
    },
    maxFileSize: {
        type: Number,
        default: 2146435071,
        description: 'Max size (in bytes) of a single log file'
    },
    minimumRequiredSpace: {
        type: Number,
        default: 524288000,
        description: 'Minimum Required free space (in bytes). To avoid data corruption, File Channel stops accepting take/put requests when free space drops below this value'
    },
    capacity: {
        type: Number,
        default: 1000000,
        description: 'Maximum capacity of the channel'
    },
    'keep-alive': {
        type: Number,
        default: 3,
        description: 'Amount of time (in sec) to wait for a put operation'
    },
    'use-log-replay-v1': {
        type: Boolean,
        default: false,
        description: 'Expert: Use old replay logic'
    },
    'use-fast-replay': {
        type: Boolean,
        default: false,
        description: 'Expert: Replay without using queue'
    },
    checkpointOnClose: {
        type: Boolean,
        default: true,
        description: 'Controls if a checkpoint is created when the channel is closed. Creating a checkpoint on close speeds up subsequent startup of the file channel by avoiding replay'
    },
    'encryption.activeKey': {
        type: String,
        default: '',
        description: 'Key name used to encrypt new data'
    },
    'encryption.cipherProvider': {
        type: String,
        default: '',
        description: 'Cipher provider type, supported types: AESCTRNOPADDING'
    },
    'encryption.keyProvider': {
        type: String,
        default: '',
        description: 'Key provider type, supported types: JCEKSFILE'
    },
    'encryption.keyProvider.keyStoreFile': {
        type: String,
        default: '',
        description: 'Path to the keystore file'
    },
    'encrpytion.keyProvider.keyStorePasswordFile': {
        type: String,
        default: '',
        description: 'Path to the keystore password file'
    },
    'encryption.keyProvider.keys': {
        type: Array,
        default: [],
        separator: ' ',
        description: 'List of all keys (e.g. history of the activeKey setting)'
    },
    'encryption.keyProvider.keys.*': {
        type: Object,
        default: {},
        description: 'Path to the optional key password file. eg: key-1.passwordFile=/path/to'
    }
}
