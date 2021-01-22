export default {
    'sink.directory': {
        type: String,
        default: '',
        required: true,
        description: 'The directory where files will be stored'
    },
    'sink.pathManager': {
        type: String,
        default: 'DEFAULT',
        description: 'The PathManager implementation to use'
    },
    'sink.pathManager.extension': {
        type: String,
        default: '',
        description: 'The file extension if the default PathManager is used'
    },
    'sink.pathManager.prefix': {
        type: String,
        default: '',
        description: 'A character string to add to the beginning of the file name if the default PathManager is used'
    },
    'sink.rollInterval': {
        type: Number,
        default: 30,
        description: 'Roll the file every 30 seconds. Specifying 0 will disable rolling and cause all events to be written to a single file'
    },
    'sink.serializer': {
        type: String,
        default: 'TEXT',
        description: 'Other possible options include avro_event or the FQCN of an implementation of EventSerializer.Builder interface'
    },
    'sink.batchSize': {
        type: Number,
        default: 100,
        min: 0,
        description: ''
    }
}
