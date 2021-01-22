import file from "@/flume-configs/channels/file";

export default {
    memoryCapacity: {
        type: Number,
        default: 10000,
        description: 'Maximum number of events stored in memory queue. To disable use of in-memory queue, set this to zero'
    },
    overflowCapacity: {
        type: Number,
        default: 100000000,
        description: 'Maximum number of events stored in overflow disk (i.e File channel). To disable use of overflow, set this to zero'
    },
    overflowTimeout: {
        type: Number,
        default: 3,
        description: 'The number of seconds to wait before enabling disk overflow when memory fills up'
    },
    byteCapacityBufferPercentage: {
        type: Number,
        default: 20,
        description: 'Defines the percent of buffer between byteCapacity and the estimated total size of all events in the channel, to account for data in headers. See below'
    },
    byteCapacity: {
        type: Number,
        description: 'Maximum bytes of memory allowed as a sum of all events in the memory queue. The implementation only counts the Event body, which is the reason for providing the byteCapacityBufferPercentage configuration parameter as well. Defaults to a computed value equal to 80% of the maximum memory available to the JVM (i.e. 80% of the -Xmx value passed on the command line). Note that if you have multiple memory channels on a single JVM, and they happen to hold the same physical events (i.e. if you are using a replicating channel selector from a single source) then those event sizes may be double-counted for channel byteCapacity purposes. Setting this value to 0 will cause this value to fall back to a hard internal limit of about 200 GB'
    },
    avgEventSize: {
        type: Number,
        default: 500,
        description: 'Estimated average size of events, in bytes, going into the channel'
    },
    ...file
}
