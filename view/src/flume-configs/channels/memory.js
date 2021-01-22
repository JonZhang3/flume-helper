export default {
    capacity: {
        type: Number,
        default: 100,
        description: 'The maximum number of events stored in the channel'
    },
    transactionCapacity: {
        type: Number,
        default: 100,
        description: 'The maximum number of events the channel will take from a source or give to a sink per transaction'
    },
    'keep-alive': {
        type: Number,
        default: 3,
        description: 'Timeout in seconds for adding or removing an event'
    },
    byteCapacityBufferPercentage: {
        type: Number,
        default: 20,
        min: 0,
        max: 100,
        description: 'Defines the percent of buffer between byteCapacity and the estimated total size of all events in the channel, to account for data in headers'
    },
    byteCapacity: {
        type: Number,
        description: 'Maximum total bytes of memory allowed as a sum of all events in this channel. The implementation only counts the Event body, which is the reason for providing the byteCapacityBufferPercentage configuration parameter as well. Defaults to a computed value equal to 80% of the maximum memory available to the JVM (i.e. 80% of the -Xmx value passed on the command line). Note that if you have multiple memory channels on a single JVM, and they happen to hold the same physical events (i.e. if you are using a replicating channel selector from a single source) then those event sizes may be double-counted for channel byteCapacity purposes. Setting this value to 0 will cause this value to fall back to a hard internal limit of about 200 GB'
    }
}
