export default {
    preserveExisting: {
        type: Boolean,
        default: false,
        description: 'If the host header already exists, should it be preserved - true or false'
    },
    useIP: {
        type: Boolean,
        default: true,
        description: 'Use the IP Address if true, else use hostname'
    },
    hostHeader: {
        type: String,
        default: 'host',
        description: 'The header key to be used'
    }
}
