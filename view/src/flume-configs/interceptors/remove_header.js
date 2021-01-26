export default {
    withName: {
        type: String,
        default: '',
        description: 'Name of the header to remove'
    },
    fromList: {
        type: String,
        default: '',
        description: 'List of headers to remove, separated with the separator specified by fromListSeparator'
    },
    fromListSeparator: {
        type: String,
        default: '\\s*,\\s*',
        description: 'Regular expression used to separate multiple header names in the list specified by fromList. Default is a comma surrounded by any number of whitespace characters'
    },
    matching: {
        type: String,
        default: '',
        description: 'All the headers which names match this regular expression are removed'
    }
}
