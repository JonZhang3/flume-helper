import hdfs from "@/flume-configs/sinks/hdfs";
import hive from "@/flume-configs/sinks/hive";
import logger from "@/flume-configs/sinks/logger";
import avro from "@/flume-configs/sinks/avro";
import thrift from "@/flume-configs/sinks/thrift";
import irc from "@/flume-configs/sinks/irc";
import file_roll from "@/flume-configs/sinks/file_roll";
import nullSink from "@/flume-configs/sinks/file_roll";
import hbase from "@/flume-configs/sinks/hbase";
import hbase2 from "@/flume-configs/sinks/hbase2";
import asynchbase from "@/flume-configs/sinks/asynchbase";
import MorphlineSolrSink from "@/flume-configs/sinks/MorphlineSolrSink";
import ElasticSearchSink from "@/flume-configs/sinks/ElasticSearchSink";
import KiteDatasetSink from "@/flume-configs/sinks/KiteDatasetSink";
import KafkaSink from "@/flume-configs/sinks/KafkaSink";
import http from "@/flume-configs/sinks/http";

export default {
    hdfs,
    hive,
    logger,
    avro,
    thrift,
    irc,
    file_roll,
    'null': nullSink,
    hbase,
    hbase2,
    asynchbase,
    'org.apache.flume.sink.solr.morphline.MorphlineSolrSink': MorphlineSolrSink,
    'org.apache.flume.sink.elasticsearch.ElasticSearchSink': ElasticSearchSink,
    'org.apache.flume.sink.kite.DatasetSink': KiteDatasetSink,
    'org.apache.flume.sink.kafka.KafkaSink': KafkaSink,
    http,

}
