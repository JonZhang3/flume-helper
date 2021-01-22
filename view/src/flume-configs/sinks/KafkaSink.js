import types from "@/flume-configs/types";

export default {
    'kafka.bootstrap.servers': {
        type: Array,
        default: [],
        required: true,
        description: 'List of brokers Kafka-Sink will connect to, to get the list of topic partitions This can be a partial list of brokers, but we recommend at least two for HA. The format is comma separated list of hostname:port'
    },
    'kafka.topic': {
        type: String,
        default: 'default-flume-topic',
        required: true,
        description: 'The topic in Kafka to which the messages will be published. If this parameter is configured, messages will be published to this topic. If the event header contains a “topic” field, the event will be published to that topic overriding the topic configured here. Arbitrary header substitution is supported, eg. %{header} is replaced with value of event header named “header”. (If using the substitution, it is recommended to set “auto.create.topics.enable” property of Kafka broker to true.)'
    },
    flumeBatchSize: {
        type: Number,
        default: 1000,
        min: 0,
        description: 'How many messages to process in one batch. Larger batches improve throughput while adding latency'
    },
    'kafka.producer.acks': {
        type: Number,
        default: 1,
        min: 1,
        description: 'How many replicas must acknowledge a message before its considered successfully written. Accepted values are 0 (Never wait for acknowledgement), 1 (wait for leader only), -1 (wait for all replicas) Set this to -1 to avoid data loss in some cases of leader failure'
    },
    useFlumeEventFormat: {
        type: Boolean,
        default: false,
        description: 'By default events are put as bytes onto the Kafka topic directly from the event body. Set to true to store events as the Flume Avro binary format. Used in conjunction with the same property on the KafkaSource or with the parseAsFlumeEvent property on the Kafka Channel this will preserve any Flume headers for the producing side'
    },
    defaultPartitionId: {
        type: String,
        default: '',
        description: 'Specifies a Kafka partition ID (integer) for all events in this channel to be sent to, unless overriden by partitionIdHeader. By default, if this property is not set, events will be distributed by the Kafka Producer’s partitioner - including by key if specified (or by a partitioner specified by kafka.partitioner.class)'
    },
    partitionIdHeader: {
        type: String,
        default: '',
        description: 'When set, the sink will take the value of the field named using the value of this property from the event header and send the message to the specified partition of the topic. If the value represents an invalid partition, an EventDeliveryException will be thrown. If the header value is present then this setting overrides defaultPartitionId'
    },
    allowTopicOverride: {
        type: Boolean,
        default: true,
        description: 'When set, the sink will allow a message to be produced into a topic specified by the topicHeader property (if provided)'
    },
    topicHeader: {
        type: String,
        default: 'topic',
        description: 'When set in conjunction with allowTopicOverride will produce a message into the value of the header named using the value of this property. Care should be taken when using in conjunction with the Kafka Source topicHeader property to avoid creating a loopback'
    },
    'kafka.producer.security.protocol': {
        type: types.Select,
        select: ['PLAINTEXT', 'SASL_PLAINTEXT', 'SASL_SSL', 'SSL'],
        default: 'PLAINTEXT',
        description: 'Set to SASL_PLAINTEXT, SASL_SSL or SSL if writing to Kafka using some level of security. See below for additional info on secure setup'
    },
    'kafka.producer.*': {
        type: Object,
        default: {},
        description: 'These properties are used to configure the Kafka Producer. Any producer property supported by Kafka can be used. The only requirement is to prepend the property name with the prefix kafka.producer. For example: kafka.producer.linger.ms'
    }
}
