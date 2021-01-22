import common from "@/flume-configs/sources/common";
import ssl from "@/flume-configs/ssl";

export default {
    host: {
        type: String,
        default: '',
        required: true,
        description: 'Host name or IP address to bind to'
    },
    ports: {
        type: Array,
        default: [],
        required: true,
        separator: ' ',
        description: 'list (one or more) of ports to bind to'
    },
    eventSize: {
        type: Number,
        default: 2500,
        min: 0,
        description: 'Maximum size of a single event line, in bytes'
    },
    keepFields: {
        type: String,
        default: 'none',
        description: 'Setting this to ‘all’ will preserve the Priority, Timestamp and Hostname in the body of the event. A spaced separated list of fields to include is allowed as well. Currently, the following fields can be included: priority, version, timestamp, hostname. The values ‘true’ and ‘false’ have been deprecated in favor of ‘all’ and ‘none’'
    },
    portHeader: {
        type: String,
        default: '',
        description: 'If specified, the port number will be stored in the header of each event using the header name specified here. This allows for interceptors and channel selectors to customize routing logic based on the incoming port'
    },
    clientIPHeader: {
        type: String,
        default: '',
        description: 'If specified, the IP address of the client will be stored in the header of each event using the header name specified here. This allows for interceptors and channel selectors to customize routing logic based on the IP address of the client. Do not use the standard Syslog header names here (like _host_) because the event header will be overridden in that case'
    },
    clientHostnameHeader: {
        type: String,
        default: '',
        description: 'If specified, the host name of the client will be stored in the header of each event using the header name specified here. This allows for interceptors and channel selectors to customize routing logic based on the host name of the client. Retrieving the host name may involve a name service reverse lookup which may affect the performance. Do not use the standard Syslog header names here (like _host_) because the event header will be overridden in that case'
    },
    'charset.default': {
        type: String,
        default: 'UTF-8',
        description: 'Default character set used while parsing syslog events into strings'
    },
    'charset.port.*': {
        type: Object,
        default: {},
        description: 'charset.port.<port>. Character set is configurable on a per-port basis'
    },
    batchSize: {
        type: Number,
        default: 100,
        min: 0,
        description: 'Maximum number of events to attempt to process per request loop. Using the default is usually fine'
    },
    readBufferSize: {
        type: Number,
        default: 1024,
        min: 0,
        description: 'Size of the internal Mina read buffer. Provided for performance tuning. Using the default is usually fine'
    },
    numProcessors: {
        type: Number,
        min: 0,
        description: 'Number of processors available on the system for use while processing messages. Default is to auto-detect # of CPUs using the Java Runtime API. Mina will spawn 2 request-processing threads per detected CPU, which is often reasonable'
    },
    ...ssl,
    ...common
}
