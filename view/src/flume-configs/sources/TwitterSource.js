import common from "@/flume-configs/sources/common";

export default {
    consumerKey: {
        type: String,
        default: '',
        required: true,
        description: 'OAuth consumer key'
    },
    consumerSecret: {
        type: String,
        default: '',
        required: true,
        description: 'OAuth consumer secret'
    },
    accessToken: {
        type: String,
        default: '',
        required: true,
        description: 'OAuth access token'
    },
    accessTokenSecret: {
        type: String,
        default: '',
        required: true,
        description: 'OAuth token secret'
    },
    maxBatchSize: {
        type: Number,
        default: 1000,
        min: 0,
        description: 'Maximum number of twitter messages to put in a single batch'
    },
    maxBatchDurationMillis: {
        type: Number,
        default: 1000,
        min: 0,
        description: 'Maximum number of milliseconds to wait before closing a batch'
    },
    ...common
}
