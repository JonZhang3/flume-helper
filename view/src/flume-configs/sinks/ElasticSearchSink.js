export default {
    hostNames: {
        type: Array,
        required: true,
        default: [],
        description: 'list of hostname:port, if the port is not present the default port ‘9300’ will be used'
    },
    indexName: {
        type: String,
        default: 'flume',
        description: 'The name of the index which the date will be appended to. Example ‘flume’ -> ‘flume-yyyy-MM-dd’ Arbitrary header substitution is supported, eg. %{header} replaces with value of named event header'
    },
    indexType: {
        type: String,
        default: 'logs',
        description: 'The type to index the document to, defaults to ‘log’ Arbitrary header substitution is supported, eg. %{header} replaces with value of named event header'
    },
    clusterName: {
        type: String,
        default: 'elasticsearch',
        description: 'Name of the ElasticSearch cluster to connect to'
    },
    batchSize: {
        type: Number,
        default: 100,
        description: 'Number of events to be written per txn'
    },
    ttl: {
        type: Number,
        description: 'TTL in days, when set will cause the expired documents to be deleted automatically, if not set documents will never be automatically deleted. TTL is accepted both in the earlier form of integer only e.g. a1.sinks.k1.ttl = 5 and also with a qualifier ms (millisecond), s (second), m (minute), h (hour), d (day) and w (week). Example a1.sinks.k1.ttl = 5d will set TTL to 5 days. Follow http://www.elasticsearch.org/guide/reference/mapping/ttl-field/ for more information'
    },
    serializer: {
        type: String,
        default: 'org.apache.flume.sink.elasticsearch.ElasticSearchLogStashEventSerializer',
        description: 'The ElasticSearchIndexRequestBuilderFactory or ElasticSearchEventSerializer to use. Implementations of either class are accepted but ElasticSearchIndexRequestBuilderFactory is preferred'
    },
    'serializer.*': {
        type: Object,
        default: {},
        description: 'Properties to be passed to the serializer'
    }
}
