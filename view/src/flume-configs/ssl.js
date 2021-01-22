import types from "@/flume-configs/types";

export default {
    ssl: {
        type: Boolean,
        default: false,
        description: 'Set this to true to enable SSL encryption. If SSL is enabled, you must also specify a “keystore” and a “keystore-password”, either through component level parameters (see below) or as global SSL parameters'
    },
    keystore: {
        type: String,
        default: '',
        description: 'This is the path to a Java keystore file. If not specified here, then the global keystore will be used (if defined, otherwise configuration error)'
    },
    'keystore-password': {
        type: String,
        default: '',
        description: 'The password for the Java keystore. If not specified here, then the global keystore password will be used (if defined, otherwise configuration error)'
    },
    'keystore-type': {
        type: types.Select,
        default: 'JKS',
        select: ['JKS', 'PKCS12'],
        description: 'The type of the Java keystore. This can be “JKS” or “PKCS12”. If not specified here, then the global keystore type will be used (if defined, otherwise the default is JKS)'
    },
    'exclude-protocols': {
        type: Array,
        default: ['SSLv3'],
        separator: ' ',
        description: 'list of SSL/TLS protocols to exclude. SSLv3 will always be excluded in addition to the protocols specified'
    },
    'include-protocols': {
        type: Array,
        default: [],
        separator: ' ',
        description: 'list of SSL/TLS protocols to include. The enabled protocols will be the included protocols without the excluded protocols. If included-protocols is empty, it includes every supported protocols'
    },
    'exclude-cipher-suites': {
        type: Array,
        default: [],
        separator: ' ',
        description: 'list of cipher suites to exclude'
    },
    'include-cipher-suites': {
        type: Array,
        default: [],
        separator: ' ',
        description: 'list of cipher suites to include. The enabled cipher suites will be the included cipher suites without the excluded cipher suites. If included-cipher-suites is empty, it includes every supported cipher suites'
    },
}
