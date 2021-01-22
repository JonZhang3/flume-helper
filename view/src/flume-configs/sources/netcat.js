import common from "@/flume-configs/sources/common";

export default {
    bind: {
        type: String,
        default: '',
        required: true,
        description: 'Host name or IP address to bind to'
    },
    port: {
        type: Number,
        default: 1,
        min: 1,
        max: 65535,
        description: 'Port # to bind to'
    },
    'max-line-length': {
        type: Number,
        default: 512,
        min: 0,
        description: 'Max line length per event body (in bytes)'
    },
    'ack-every-event': {
        type: Boolean,
        default: true,
        description: 'Respond with an “OK” for every event received'
    },
    ...common
}
