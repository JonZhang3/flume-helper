export default {
    morphlineFile: {
        type: String,
        default: '',
        required: true,
        description: 'The relative or absolute path on the local file system to the morphline configuration file. Example: /etc/flume-ng/conf/morphline.conf'
    },
    morphlineId: {
        type: String,
        default: 'null',
        description: 'Optional name used to identify a morphline if there are multiple morphlines in a morphline config file'
    },
    batchSize: {
        type: Number,
        default: 1000,
        min: 0,
        description: 'The maximum number of events to take per flume transaction'
    },
    batchDurationMillis: {
        type: Number,
        default: 1000,
        min: 0,
        description: 'The maximum duration per flume transaction (ms). The transaction commits after this duration or when batchSize is exceeded, whichever comes first'
    },
    handlerClass: {
        type: String,
        default: 'org.apache.flume.sink.solr.morphline.MorphlineHandlerImpl',
        description: 'The FQCN of a class implementing org.apache.flume.sink.solr.morphline.MorphlineHandler'
    },
    isProductionMode: {
        type: Boolean,
        default: false,
        description: 'This flag should be enabled for mission critical, large-scale online production systems that need to make progress without downtime when unrecoverable exceptions occur. Corrupt or malformed parser input data, parser bugs, and errors related to unknown Solr schema fields produce unrecoverable exceptions'
    },
    recoverableExceptionClasses: {
        type: String,
        default: 'org.apache.solr.client.solrj.SolrServerException',
        description: 'Comma separated list of recoverable exceptions that tend to be transient, in which case the corresponding task can be retried. Examples include network connection errors, timeouts, etc. When the production mode flag is set to true, the recoverable exceptions configured using this parameter will not be ignored and hence will lead to retries'
    },
    isIgnoringRecoverableExceptions: {
        type: Boolean,
        default: false,
        description: 'This flag should be enabled, if an unrecoverable exception is accidentally misclassified as recoverable. This enables the sink to make progress and avoid retrying an event forever'
    }
}
