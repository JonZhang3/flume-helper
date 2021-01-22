export default {
    endpoint: {
        type: String,
        default: '',
        required: true,
        description: 'The fully qualified URL endpoint to POST to'
    },
    connectTimeout: {
        type: Number,
        default: 5000,
        description: 'The socket connection timeout in milliseconds'
    },
    requestTimeout: {
        type: Number,
        default: 5000,
        description: 'The maximum request processing time in milliseconds'
    },
    contentTypeHeader: {
        type: String,
        default: 'text/plain',
        description: 'The HTTP Content-Type header'
    },
    acceptHeader: {
        type: String,
        default: 'text/plain',
        description: 'The HTTP Accept header value'
    },
    defaultBackoff: {
        type: Boolean,
        default: true,
        description: 'Whether to backoff by default on receiving all HTTP status codes'
    },
    defaultRollback: {
        type: Boolean,
        default: true,
        description: 'Whether to rollback by default on receiving all HTTP status codes'
    },
    defaultIncrementMetrics: {
        type: Boolean,
        default: false,
        description: 'Whether to increment metrics by default on receiving all HTTP status codes'
    },
    'backoff.CODE': {
        type: String,
        default: '',
        description: 'Configures a specific backoff for an individual (i.e. 200) code or a group (i.e. 2XX) code'
    },
    'rollback.CODE': {
        type: String,
        default: '',
        description: 'Configures a specific rollback for an individual (i.e. 200) code or a group (i.e. 2XX) code'
    },
    'incrementMetrics.CODE': {
        type: String,
        default: '',
        description: 'Configures a specific metrics increment for an individual (i.e. 200) code or a group (i.e. 2XX) code'
    }
}
