import utils from "@/common/utils";
import common from "@/flume-configs/sources/common";

export default {
    batchSize: {
        type: Number,
        default: 1,
        description: 'Number of events to attempt to process per request loop'
    },
    totalEvents: {
        type: Number,
        default: utils.LONG_MAX_VALUE,
        description: 'Number of unique events sent by the source'
    },
    ...common
}
