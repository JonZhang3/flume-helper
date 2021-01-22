import types from "@/flume-configs/types";

export default {
    hostname: {
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
        description: 'Port # to bind to'
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
    'reset-connection-interval': {
        type: String,
        default: 'none',
        description: 'Amount of time (s) before the connection to the next hop is reset. This will force the Avro Sink to reconnect to the next hop. This will allow the sink to connect to hosts behind a hardware load-balancer when news hosts are added without having to restart the agent'
    },
    'compression-type': {
        type: types.Select,
        default: 'none',
        select: ['none', 'deflate'],
        description: 'This can be “none” or “deflate”. The compression-type must match the compression-type of matching AvroSource'
    },
    'compression-leve': {
        type: types.Select,
        select: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        default: '6',
        description: 'The level of compression to compress event. 0 = no compression and 1-9 is compression. The higher the number the more compression'
    },
    ssl: {
        type: Boolean,
        default: false,
        description: 'Set to true to enable SSL for this AvroSink. When configuring SSL, you can optionally set a “truststore”, “truststore-password”, “truststore-type”, and specify whether to “trust-all-certs”'
    },
    'trust-all-certs': {
        type: Boolean,
        default: false,
        description: 'If this is set to true, SSL server certificates for remote servers (Avro Sources) will not be checked. This should NOT be used in production because it makes it easier for an attacker to execute a man-in-the-middle attack and “listen in” on the encrypted connection'
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
    maxIoWorkers: {
        type: Number,
        description: 'The maximum number of I/O worker threads. This is configured on the NettyAvroRpcClient NioClientSocketChannelFactory'
    }
}
