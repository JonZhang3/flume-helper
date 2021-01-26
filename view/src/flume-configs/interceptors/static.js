export default {
    preserveExisting: {
        type: Boolean,
        default: true,
        description: 'If configured header already exists, should it be preserved - true or false'
    },
    key: {
        type: String,
        default: '',
        description: 'Name of header that should be created'
    },
    value: {
        type: String,
        default: '',
        description: 'Static value that should be created'
    }
}
