export default {
    headerName: {
        type: String,
        default: 'id',
        description: 'The name of the Flume header to modify'
    },
    preserveExisting: {
        type: Boolean,
        default: true,
        description: 'If the UUID header already exists, should it be preserved - true or false'
    },
    prefix: {
        type: String,
        default: '',
        description: 'The prefix string constant to prepend to each generated UUID'
    }
}
