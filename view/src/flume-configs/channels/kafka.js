import types from "@/flume-configs/types";

export default {
    'kafka.bootstrap.servers': {
        type: Array,
        default: [],
        required: true,
        description: 'List of brokers in the Kafka cluster used by the channel This can be a partial list of brokers, but we recommend at least two for HA. The format is comma separated list of hostname:port'
    },
    'kafka.topic': {
        type: String,
        default: 'flume-channel',
        description: 'Kafka topic which the channel will use'
    },
    'kafka.consumer.group.id': {
        type: String,
        default: 'flume',
        description: 'Consumer group ID the channel uses to register with Kafka. Multiple channels must use the same topic and group to ensure that when one agent fails another can get the data Note that having non-channel consumers with the same ID can lead to data loss'
    },
    parseAsFlumeEvent: {
        type: Boolean,
        default: true,
        description: 'Expecting Avro datums with FlumeEvent schema in the channel. This should be true if Flume source is writing to the channel and false if other producers are writing into the topic that the channel is using. Flume source messages to Kafka can be parsed outside of Flume by using org.apache.flume.source.avro.AvroFlumeEvent provided by the flume-ng-sdk artifact'
    },
    pollTimeout: {
        type: Number,
        default: 500,
        description: 'The amount of time(in milliseconds) to wait in the “poll()” call of the consumer. https://kafka.apache.org/090/javadoc/org/apache/kafka/clients/consumer/KafkaConsumer.html#poll(long)'
    },
    defaultPartitionId: {
        type: String,
        default: '',
        description: 'Specifies a Kafka partition ID (integer) for all events in this channel to be sent to, unless overriden by partitionIdHeader. By default, if this property is not set, events will be distributed by the Kafka Producer’s partitioner - including by key if specified (or by a partitioner specified by kafka.partitioner.class)'
    },
    partitionIdHeader: {
        type: String,
        default: '',
        description: 'When set, the producer will take the value of the field named using the value of this property from the event header and send the message to the specified partition of the topic. If the value represents an invalid partition the event will not be accepted into the channel. If the header value is present then this setting overrides defaultPartitionId'
    },
    'kafka.consumer.auto.offset.reset': {
        type: String,
        default: 'latest',
        description: 'What to do when there is no initial offset in Kafka or if the current offset does not exist any more on the server (e.g. because that data has been deleted): earliest: automatically reset the offset to the earliest offset latest: automatically reset the offset to the latest offset none: throw exception to the consumer if no previous offset is found for the consumer’s group anything else: throw exception to the consumer'
    },
    'kafka.producer.security.protocol': {
        type: types.Select,
        select: ['PLAINTEXT', 'SASL_PLAINTEXT', 'SASL_SSL', 'SSL'],
        default: 'PLAINTEXT',
        description: 'Set to SASL_PLAINTEXT, SASL_SSL or SSL if writing to Kafka using some level of security. See below for additional info on secure setup'
    },
    'kafka.consumer.security.protocol': {
        type: types.Select,
        select: ['PLAINTEXT', 'SASL_PLAINTEXT', 'SASL_SSL', 'SSL'],
        default: 'PLAINTEXT',
        description: 'Set to SASL_PLAINTEXT, SASL_SSL or SSL if writing to Kafka using some level of security. See below for additional info on secure setup'
    },
    'kafka.producer.*': {
        type: Object,
        default: {},
        description: 'If using SASL_PLAINTEXT, SASL_SSL or SSL refer to Kafka security for additional properties that need to be set on producer'
    },
    'kafka.consumer.*': {
        type: Object,
        default: {},
        description: 'If using SASL_PLAINTEXT, SASL_SSL or SSL refer to Kafka security for additional properties that need to be set on consumer'
    }
}
