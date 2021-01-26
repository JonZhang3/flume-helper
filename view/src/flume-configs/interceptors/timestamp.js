export default {
    headerName: {
        type: String,
        default: 'timestamp',
        description: 'The name of the header in which to place the generated timestamp'
    },
    preserveExisting: {
        type: Boolean,
        default: false,
        description: 'If the timestamp already exists, should it be preserved - true or false'
    }
}
