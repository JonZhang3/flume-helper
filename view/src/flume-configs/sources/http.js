import ssl from "@/flume-configs/ssl";
import common from "@/flume-configs/sources/common";

export default {
    port: {
        type: Number,
        default: 1,
        min: 1,
        max: 65535,
        required: true,
        description: 'Port # to bind to'
    },
    bind: {
        type: String,
        default: '0.0.0.0',
        description: 'The hostname or IP address to listen on'
    },
    handler: {
        type: String,
        default: 'org.apache.flume.source.http.JSONHandler',
        description: 'The FQCN of the handler class'
    },
    'handler.*': {
        type: Object,
        default: {},
        description: 'Config parameters for the handler'
    },
    'QueuedThreadPool.*': {
        type: Object,
        default: {},
        description: 'Jetty specific settings to be set on org.eclipse.jetty.util.thread.QueuedThreadPool. N.B. QueuedThreadPool will only be used if at least one property of this class is set'
    },
    'HttpConfiguration.*': {
        type: Object,
        default: {},
        description: 'etty specific settings to be set on org.eclipse.jetty.server.HttpConfiguration'
    },
    'SslContextFactory.*': {
        type: Object,
        default: {},
        description: 'Jetty specific settings to be set on org.eclipse.jetty.util.ssl.SslContextFactory (only applicable when ssl is set to true)'
    },
    'ServerConnector.*': {
        type: Object,
        default: {},
        description: 'Jetty specific settings to be set on org.eclipse.jetty.server.ServerConnector'
    },
    ...ssl,
    ...common
}
