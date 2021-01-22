import types from "@/flume-configs/types";
import common from "@/flume-configs/sources/common";

export default {
    'kafka.bootstrap.servers': {
        type: Array,
        default: [],
        required: true,
        description: 'List of brokers in the Kafka cluster used by the source'
    },
    'kafka.topics': {
        type: Array,
        default: [],
        required: true,
        description: 'list of topics the kafka consumer will read messages from'
    },
    'kafka.topics.regex': {
        type: String,
        default: '',
        required: true,
        description: 'Regex that defines set of topics the source is subscribed on. This property has higher priority than kafka.topics and overrides kafka.topics if exists'
    },
    'kafka.consumer.group.id': {
        type: String,
        default: 'flume',
        description: 'Unique identified of consumer group. Setting the same id in multiple sources or agents indicates that they are part of the same consumer group'
    },
    batchSize: {
        type: Number,
        default: 1000,
        min: 0,
        description: 'Maximum number of messages written to Channel in one batch'
    },
    batchDurationMillis: {
        type: Number,
        default: 1000,
        min: 0,
        description: 'Maximum time (in ms) before a batch will be written to Channel The batch will be written whenever the first of size and time will be reached'
    },
    backoffSleepIncrement: {
        type: Number,
        default: 1000,
        min: 0,
        description: 'Initial and incremental wait time that is triggered when a Kafka Topic appears to be empty. Wait period will reduce aggressive pinging of an empty Kafka Topic. One second is ideal for ingestion use cases but a lower value may be required for low latency operations with interceptors'
    },
    maxBackoffSleep: {
        type: Number,
        default: 5000,
        min: 0,
        description: 'Maximum wait time that is triggered when a Kafka Topic appears to be empty. Five seconds is ideal for ingestion use cases but a lower value may be required for low latency operations with interceptors'
    },
    useFlumeEventFormat: {
        type: Boolean,
        default: false,
        description: 'By default events are taken as bytes from the Kafka topic directly into the event body. Set to true to read events as the Flume Avro binary format. Used in conjunction with the same property on the KafkaSink or with the parseAsFlumeEvent property on the Kafka Channel this will preserve any Flume headers sent on the producing side'
    },
    setTopicHeader: {
        type: Boolean,
        default: true,
        description: 'When set to true, stores the topic of the retrieved message into a header, defined by the topicHeader property'
    },
    topicHeader: {
        type: String,
        default: 'topic',
        description: 'Defines the name of the header in which to store the name of the topic the message was received from, if the setTopicHeader property is set to true. Care should be taken if combining with the Kafka Sink topicHeader property so as to avoid sending the message back to the same topic in a loop'
    },
    'kafka.consumer.security.protocol': {
        type: types.Select,
        select: ['PLAINTEXT', 'SASL_PLAINTEXT', 'SASL_SSL', 'SSL'],
        default: 'PLAINTEXT',
        description: 'Set to SASL_PLAINTEXT, SASL_SSL or SSL if writing to Kafka using some level of security. See below for additional info on secure setup'
    },
    'kafka.consumer.*': {
        type: Object,
        default: {},
        description: 'These properties are used to configure the Kafka Consumer. Any consumer property supported by Kafka can be used. The only requirement is to prepend the property name with the prefix kafka.consumer. For example: kafka.consumer.auto.offset.reset'
    },
    ...common
}
