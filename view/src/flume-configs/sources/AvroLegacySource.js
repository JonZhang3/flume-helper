import common from "@/flume-configs/sources/common";

export default {
    host: {
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
        required: true,
        description: 'Port # to bind to'
    },
    ...common
}
