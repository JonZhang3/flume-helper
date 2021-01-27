export default {
    regex: {
        type: String,
        default: '',
        required: true,
        description: 'Regular expression for matching against events'
    },
    serializers: {
        type: Array,
        default: [],
        separator: ' ',
        description: 'Space-separated list of serializers for mapping matches to header names and serializing their values. (See example below) Flume provides built-in support for the following serializers: org.apache.flume.interceptor.RegexExtractorInterceptorPassThroughSerializer org.apache.flume.interceptor.RegexExtractorInterceptorMillisSerializer'
    },
    'serializers.<>': {
        selector: 'serializers',
        type: {
            type: String,
            default: 'default',
            description: 'Must be default (org.apache.flume.interceptor.RegexExtractorInterceptorPassThroughSerializer), org.apache.flume.interceptor.RegexExtractorInterceptorMillisSerializer, or the FQCN of a custom class that implements org.apache.flume.interceptor.RegexExtractorInterceptorSerializer'
        },
        name: {
            type: String,
            default: '',
            description: ''
        }
    },
    'serializers.*': {
        type: Object,
        default: {},
        description: 'Serializer-specific properties'
    }
}
