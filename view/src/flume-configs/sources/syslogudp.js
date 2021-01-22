import common from "@/flume-configs/sources/common";

export default {
    host: {
        type: String,
        default: '',
        required: true,
        description: 'Host name or IP address to bind to'
    },
    port: {
        type: Number,
        default: 1,
        min: 1,
        max: 65535,
        required: true,
        description: 'Port # to bind to'
    },
    keepFields: {
        type: String,
        default: 'none',
        description: 'Setting this to ‘all’ will preserve the Priority, Timestamp and Hostname in the body of the event. A spaced separated list of fields to include is allowed as well. Currently, the following fields can be included: priority, version, timestamp, hostname. The values ‘true’ and ‘false’ have been deprecated in favor of ‘all’ and ‘none’'
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
    ...common
}
