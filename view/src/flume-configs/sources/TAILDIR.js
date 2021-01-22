import utils from "@/common/utils";
import common from "@/flume-configs/sources/common";

export default {
    filegroups: {
        type: Array,
        default: [],
        separator: ' ',
        required: true,
        description: 'Each file group indicates a set of files to be tailed'
    },
    'filegroups.*': {
        type: Object,
        default: {},
        description: 'filegroups.<filegroupName>. Absolute path of the file group. Regular expression (and not file system patterns) can be used for filename only'
    },
    positionFile: {
        type: String,
        default: '~/.flume/taildir_position.json',
        description: 'File in JSON format to record the inode, the absolute path and the last position of each tailing file'
    },
    'headers.*': {
        type: Object,
        default: {},
        description: 'headers.<filegroupName>.<headerKey>. Header value which is the set with header key. Multiple headers can be specified for one file group'
    },
    byteOffsetHeader: {
        type: Boolean,
        default: false,
        description: 'Whether to add the byte offset of a tailed line to a header called ‘byteoffset’'
    },
    skipToEnd: {
        type: Boolean,
        default: false,
        description: 'Whether to skip the position to EOF in the case of files not written on the position file'
    },
    idleTimeout: {
        type: Number,
        default: 120000,
        min: 0,
        description: 'Time (ms) to close inactive files. If the closed file is appended new lines to, this source will automatically re-open it'
    },
    writePosInterval: {
        type: Number,
        default: 3000,
        min: 0,
        description: 'Interval time (ms) to write the last position of each file on the position file'
    },
    batchSize: {
        type: Number,
        default: 100,
        min: 0,
        description: 'Max number of lines to read and send to the channel at a time. Using the default is usually fine'
    },
    maxBatchCount: {
        type: Number,
        default: utils.LONG_MAX_VALUE,
        min: 0,
        description: 'Controls the number of batches being read consecutively from the same file. If the source is tailing multiple files and one of them is written at a fast rate, it can prevent other files to be processed, because the busy file would be read in an endless loop. In this case lower this value'
    },
    backoffSleepIncrement: {
        type: Number,
        default: 1000,
        min: 0,
        description: 'The increment for time delay before reattempting to poll for new data, when the last attempt did not find any new data'
    },
    maxBackoffSleep: {
        type: Number,
        default: 5000,
        min: 0,
        description: 'The max time delay between each reattempt to poll for new data, when the last attempt did not find any new data'
    },
    cachePatternMatching: {
        type: Boolean,
        default: true,
        description: 'Listing directories and applying the filename regex pattern may be time consuming for directories containing thousands of files. Caching the list of matching files can improve performance. The order in which files are consumed will also be cached. Requires that the file system keeps track of modification times with at least a 1-second granularity'
    },
    fileHeader: {
        type: Boolean,
        default: false,
        description: 'Whether to add a header storing the absolute path filename'
    },
    fileHeaderKey: {
        type: String,
        default: 'file',
        description: 'Header key to use when appending absolute path filename to event header'
    },
    ...common
}
