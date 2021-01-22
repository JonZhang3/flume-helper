import common from "./common";

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
    kerberos: {
        type: Boolean,
        default: false,
        description: 'Set to true to enable kerberos authentication. In kerberos mode, agent-principal and agent-keytab are required for successful authentication. The Thrift source in secure mode, will accept connections only from Thrift clients that have kerberos enabled and are successfully authenticated to the kerberos KDC'
    },
    'agent-principal': {
        type: String,
        default: '',
        description: 'The kerberos principal used by the Thrift Source to authenticate to the kerberos KDC'
    },
    'agent-keytab': {
        type: String,
        default: '',
        description: 'The keytab location used by the Thrift Source in combination with the agent-principal to authenticate to the kerberos KDC'
    },
    ...common
}
