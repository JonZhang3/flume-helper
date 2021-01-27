import types from "@/flume-configs/types";

export default {
    replicating: {
        optional: {
            type: types.Channels,
            default: [],
            description: ''
        }
    },
    multiplexing: {
        header: {
            type: String,
            default: '',
            description: ''
        },
        'default': {
            type: types.Channel,
            default: '',
            description: ''
        },
        'mapping.*': {
            type: types.ObjectChannels,
            default: [],
            description: ''
        }
    },
}
