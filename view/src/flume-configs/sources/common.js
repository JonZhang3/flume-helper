import types from "@/flume-configs/types";

export default {
    'selector.type': {
        type: types.Select,
        select: ['replicating', 'multiplexing'],
        default: 'replicating',
        description: 'replicating or multiplexing'
    },
    'selector.*': {
        type: Object,
        default: {},
        description: 'Depends on the selector.type value'
    }
}
