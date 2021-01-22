import common from "@/flume-configs/sources/common";

export default {
    size: {
        type: Number,
        default: 500,
        min: 0,
        description: 'Payload size of each Event. Unit:byte'
    },
    maxTotalEvents: {
        type: Number,
        default: -1,
        min: -1,
        description: 'Maximum number of Events to be sent'
    },
    maxSuccessfulEvents: {
        type: Number,
        default: -1,
        min: -1,
        description: 'Maximum number of Events successfully sent'
    },
    batchSize: {
        type: Number,
        default: 1,
        min: 1,
        description: 'Number of Events to be sent in one batch'
    },
    maxEventsPerSecond: {
        type: Number,
        default: 0,
        min: 0,
        description: 'When set to an integer greater than zero, enforces a rate limiter onto the source'
    },
    ...common
}
