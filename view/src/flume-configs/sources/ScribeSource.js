import common from "@/flume-configs/sources/common";

export default {
    port: {
        type: Number,
        default: 1499,
        min: 1,
        max: 65535,
        description: 'Port that Scribe should be connected'
    },
    maxReadBufferBytes: {
        type: Number,
        default: 16384000,
        description: 'Thrift Default FrameBuffer Size'
    },
    workerThreads: {
        type: Number,
        default: 5,
        description: 'Handing threads number in Thrift'
    },
    ...common
}
