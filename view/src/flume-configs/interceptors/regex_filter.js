export default {
    regex: {
        type: String,
        default: '.*',
        description: 'Regular expression for matching against events'
    },
    excludeEvents: {
        type: Boolean,
        default: false,
        description: 'If true, regex determines events to exclude, otherwise regex determines events to include'
    }
}
