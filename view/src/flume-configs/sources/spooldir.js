import types from "@/flume-configs/types";
import common from "@/flume-configs/sources/common";

export default {
    spoolDir: {
        type: String,
        default: '',
        required: true,
        description: 'The directory from which to read files from'
    },
    fileSuffix: {
        type: String,
        default: '.COMPLETED',
        description: 'Suffix to append to completely ingested files'
    },
    deletePolicy: {
        type: types.Select,
        select: ['never', 'immediate'],
        default: 'never',
        description: 'When to delete completed files: never or immediate'
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
    basenameHeader: {
        type: Boolean,
        default: false,
        description: 'Whether to add a header storing the basename of the file'
    },
    basenameHeaderKey: {
        type: String,
        default: 'basename',
        description: 'Header Key to use when appending basename of file to event header'
    },
    includePattern: {
        type: String,
        default: '^.*$',
        description: 'Regular expression specifying which files to include. It can used together with ignorePattern. If a file matches both ignorePattern and includePattern regex, the file is ignored'
    },
    ignorePattern: {
        type: String,
        default: '^$',
        description: 'Regular expression specifying which files to ignore (skip). It can used together with includePattern. If a file matches both ignorePattern and includePattern regex, the file is ignored.'
    },
    trackerDir: {
        type: String,
        default: '.flumespool',
        description: 'Directory to store metadata related to processing of files. If this path is not an absolute path, then it is interpreted as relative to the spoolDir'
    },
    trackingPolicy: {
        type: types.Select,
        select: ['rename', 'tracker_dir'],
        default: 'rename',
        description: 'The tracking policy defines how file processing is tracked. It can be “rename” or “tracker_dir”. This parameter is only effective if the deletePolicy is “never”. “rename” - After processing files they get renamed according to the fileSuffix parameter. “tracker_dir” - Files are not renamed but a new empty file is created in the trackerDir. The new tracker file name is derived from the ingested one plus the fileSuffix'
    },
    consumeOrder: {
        type: types.Select,
        select: ['oldest', 'youngest', 'random'],
        default: 'oldest',
        description: 'In which order files in the spooling directory will be consumed oldest, youngest and random. In case of oldest and youngest, the last modified time of the files will be used to compare the files. In case of a tie, the file with smallest lexicographical order will be consumed first. In case of random any file will be picked randomly. When using oldest and youngest the whole directory will be scanned to pick the oldest/youngest file, which might be slow if there are a large number of files, while using random may cause old files to be consumed very late if new files keep coming in the spooling directory'
    },
    pollDelay: {
        type: Number,
        default: 500,
        min: 0,
        description: 'Delay (in milliseconds) used when polling for new files'
    },
    recursiveDirectorySearch: {
        type: Boolean,
        default: false,
        description: 'Whether to monitor sub directories for new files to read'
    },
    maxBackoff: {
        type: Number,
        default: 4000,
        min: 0,
        description: 'The maximum time (in millis) to wait between consecutive attempts to write to the channel(s) if the channel is full. The source will start at a low backoff and increase it exponentially each time the channel throws a ChannelException, upto the value specified by this parameter'
    },
    batchSize: {
        type: Number,
        default: 100,
        min: 0,
        description: 'Granularity at which to batch transfer to the channel'
    },
    inputCharset: {
        type: String,
        default: 'UTF-8',
        description: 'Character set used by deserializers that treat the input file as text'
    },
    decodeErrorPolicy: {
        type: types.Select,
        select: ['FAIL', 'REPLACE', 'IGNORE'],
        default: 'FAIL',
        description: 'What to do when we see a non-decodable character in the input file. FAIL: Throw an exception and fail to parse the file. REPLACE: Replace the unparseable character with the “replacement character” char, typically Unicode U+FFFD. IGNORE: Drop the unparseable character sequence'
    },
    deserializer: {
        type: String,
        default: 'LINE',
        description: 'Specify the deserializer used to parse the file into events. Defaults to parsing each line as an event. The class specified must implement EventDeserializer.Builder'
    },
    'deserializer.*': {
        type: Object,
        default: {},
        description: 'Varies per event deserializer'
    },
    bufferMaxLineLength: {
        type: Number,
        default: 5000,
        description: '(Deprecated) Maximum length of a line in the commit buffer. Use deserializer.maxLineLength instead'
    },
    ...common
}
