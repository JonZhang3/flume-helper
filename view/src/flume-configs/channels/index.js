import memory from "@/flume-configs/channels/memory";
import jdbc from "@/flume-configs/channels/jdbc";
import kafka from "@/flume-configs/channels/kafka";
import file from "@/flume-configs/channels/file";
import SPILLABLEMEMORY from "@/flume-configs/channels/SPILLABLEMEMORY";
import PseudoTxnMemoryChannel from "@/flume-configs/channels/PseudoTxnMemoryChannel";

export default {
    memory,
    jdbc,
    kafka,
    file,
    SPILLABLEMEMORY,
    'org.apache.flume.channel.PseudoTxnMemoryChannel': PseudoTxnMemoryChannel,

}
