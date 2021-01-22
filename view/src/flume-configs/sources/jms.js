import common from "./common";

export default {
    initialContextFactory: {
        type: String,
        default: '',
        required: true,
        description: 'Inital Context Factory, e.g: org.apache.activemq.jndi.ActiveMQInitialContextFactory'
    },
    connectionFactory: {
        type: String,
        default: '',
        required: true,
        description: 'The JNDI name the connection factory should appear as'
    },
    providerURL: {
        type: String,
        default: '',
        required: true,
        description: 'The JMS provider URL'
    },
    destinationName: {
        type: String,
        default: '',
        required: true,
        description: 'Destination name'
    },
    destinationType: {
        type: String,
        select: ['queue', 'topic'],
        default: '',
        description: 'Destination type (queue or topic)'
    },
    messageSelector: {
        type: String,
        default: '',
        description: 'Message selector to use when creating the consumer'
    },
    userName: {
        type: String,
        default: '',
        description: 'Username for the destination/provider'
    },
    passwordFile: {
        type: String,
        default: '',
        description: 'File containing the password for the destination/provider'
    },
    batchSize: {
        type: Number,
        default: 100,
        min: 1,
        description: 'Number of messages to consume in one batch'
    },
    'converter.type': {
        type: String,
        default: 'DEFAULT',
        description: 'Class to use to convert messages to flume events. ' +
            'BytesMessage: Bytes of message are copied to body of the FlumeEvent. Cannot convert more than 2GB of data per message; ' +
            'TextMessage: Text of message is converted to a byte array and copied to the body of the FlumeEvent. The default converter uses UTF-8 by default but this is configurable; ' +
            'ObjectMessage: Object is written out to a ByteArrayOutputStream wrapped in an ObjectOutputStream and the resulting array is copied to the body of the FlumeEvent'
    },
    'converter.*': {
        type: Object,
        default: {},
        description: 'Converter properties'
    },
    'converter.charset': {
        type: String,
        default: 'UTF-8',
        description: 'Default converter only. Charset to use when converting JMS TextMessages to byte arrays'
    },
    createDurableSubscription: {
        type: Boolean,
        default: false,
        description: 'Whether to create durable subscription. Durable subscription can only be used with destinationType topic. If true, “clientId” and “durableSubscriptionName” have to be specified'
    },
    clientId: {
        type: String,
        default: '',
        description: 'JMS client identifier set on Connection right after it is created. Required for durable subscriptions'
    },
    durableSubscriptionName: {
        type: String,
        default: '',
        description: 'Name used to identify the durable subscription. Required for durable subscriptions'
    },
    ...common,
}
