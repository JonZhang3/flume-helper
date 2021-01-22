export default {
    capacity: {
        type: Number,
        default: 50,
        description: 'The max number of events stored in the channel'
    },
    'keep-alive': {
        type: Number,
        default: 3,
        description: 'Timeout in seconds for adding or removing an event'
    }
}
