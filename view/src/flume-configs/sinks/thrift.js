export default {
    bind: {
        type: String,
        default: '',
        required: true,
        description: 'The hostname or IP address to bind to'
    },
    port: {
        type: Number,
        default: 0,
        required: true,
        min: 0,
        max: 65535,
        description: 'The port # to listen on'
    },
    'batch-size': {
        type: Number,
        default: 100,
        min: 0,
        description: 'number of event to batch together for send'
    },
    'connect-timeout': {
        type: Number,
        default: 20000,
        min: 0,
        description: 'Amount of time (ms) to allow for the first (handshake) request'
    },
    'request-timeout': {
        type: Number,
        default: 20000,
        min: 0,
        description: 'Amount of time (ms) to allow for requests after the first'
    },
    'connection-reset-interval': {
        type: String,
        default: 'none',
        description: 'Amount of time (s) before the connection to the next hop is reset. This will force the Avro Sink to reconnect to the next hop. This will allow the sink to connect to hosts behind a hardware load-balancer when news hosts are added without having to restart the agent'
    },
    ssl: {
        type: Boolean,
        default: false,
        description: 'Set to true to enable SSL for this AvroSink. When configuring SSL, you can optionally set a “truststore”, “truststore-password”, “truststore-type”, and specify whether to “trust-all-certs”'
    },
    truststore: {
        type: String,
        default: '',
        description: 'The path to a custom Java truststore file. Flume uses the certificate authority information in this file to determine whether the remote Avro Source’s SSL authentication credentials should be trusted. If not specified, then the global keystore will be used. If the global keystore not specified either, then the default Java JSSE certificate authority files (typically “jssecacerts” or “cacerts” in the Oracle JRE) will be used'
    },
    'truststore-password': {
        type: String,
        default: '',
        description: 'The password for the truststore. If not specified, then the global keystore password will be used (if defined)'
    },
    'truststore-type': {
        type: String,
        default: 'JKS',
        description: 'The type of the Java truststore. This can be “JKS” or other supported Java truststore type. If not specified, then the global keystore type will be used (if defined, otherwise the defautl is JKS)'
    },
    'exclude-protocols': {
        type: Array,
        default: ['SSLv3'],
        separator: ' ',
        description: 'list of SSL/TLS protocols to exclude. SSLv3 will always be excluded in addition to the protocols specified'
    },
    kerberos: {
        type: Boolean,
        default: false,
        description: 'Set to true to enable kerberos authentication. In kerberos mode, client-principal, client-keytab and server-principal are required for successful authentication and communication to a kerberos enabled Thrift Source'
    },
    'client-principal': {
        type: String,
        default: '',
        description: 'The kerberos principal used by the Thrift Sink to authenticate to the kerberos KDC'
    },
    'client-keytab': {
        type: String,
        default: '',
        description: 'The keytab location used by the Thrift Sink in combination with the client-principal to authenticate to the kerberos KDC'
    },
    'server-principal': {
        type: String,
        default: '',
        description: 'The kerberos principal of the Thrift Source to which the Thrift Sink is configured to connect to'
    }
}
