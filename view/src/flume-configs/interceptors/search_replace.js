export default {
    searchPattern: {
        type: String,
        default: '',
        description: 'The pattern to search for and replace'
    },
    replaceString: {
        type: String,
        default: '',
        description: 'The replacement string'
    },
    charset: {
        type: String,
        default: 'UTF-8',
        description: 'The charset of the event body. Assumed by default to be UTF-8'
    }
}
