import common from "./common";
import ssl from "@/flume-configs/ssl";

export default {
    bind: {
        type: String,
        default: '',
        required: true,
        description: 'hostname or IP address to listen on'
    },
    port: {
        type: Number,
        default: 0,
        required: true,
        min: 0,
        max: 65535,
        description: 'Port # to bind to'
    },
    threads: {
        type: Number,
        default: 1,
        description: 'Maximum number of worker threads to spawn'
    },
    'compression-type': {
        type: String,
        default: 'none',
        description: 'This can be “none” or “deflate”. The compression-type must match the compression-type of matching AvroSource'
    },
    ...ssl,
    ipFilter: {
        type: Boolean,
        default: false,
        description: 'Set this to true to enable ipFiltering for netty'
    },
    ipFilterRules: {
        type: 'StringArray',
        selectPrepend: ['allow:ip', 'allow:name', 'deny:ip', 'deny:name'],
        default: [],
        description: 'Define N netty ipFilter pattern rules with this config'
    },
    ...common
}
