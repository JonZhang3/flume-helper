import avro from "./avro";
import thrift from "./thrift";
import exec from "./exec";
import jms from "./jms";
import spooldir from "@/flume-configs/sources/spooldir";
import TAILDIR from "@/flume-configs/sources/TAILDIR";
import TwitterSource from "@/flume-configs/sources/TwitterSource";
import kafka from "@/flume-configs/sources/kafka";
import netcat from "@/flume-configs/sources/netcat";
import netcatudp from "@/flume-configs/sources/netcatudp";
import seq from "@/flume-configs/sources/seq";
import syslogtcp from "@/flume-configs/sources/syslogtcp";
import multiport_syslogtcp from "@/flume-configs/sources/multiport_syslogtcp";
import syslogudp from "@/flume-configs/sources/syslogudp";
import http from "@/flume-configs/sources/http";
import StressSource from "@/flume-configs/sources/StressSource";
import AvroLegacySource from "@/flume-configs/sources/AvroLegacySource";
import ThriftLegacySource from "@/flume-configs/sources/ThriftLegacySource";
import ScribeSource from "@/flume-configs/sources/ScribeSource";

export default {
    avro,
    thrift,
    exec,
    jms,
    spooldir,
    TAILDIR,
    netcat,
    netcatudp,
    seq,
    syslogtcp,
    multiport_syslogtcp,
    syslogudp,
    http,
    'org.apache.flume.source.kafka.KafkaSource': kafka,
    'org.apache.flume.source.twitter.TwitterSource': TwitterSource,
    'org.apache.flume.source.StressSource': StressSource,
    'org.apache.flume.source.avroLegacy.AvroLegacySource': AvroLegacySource,
    'org.apache.flume.source.thriftLegacy.ThriftLegacySource': ThriftLegacySource,
    'org.apache.flume.source.scribe.ScribeSource': ScribeSource
}
