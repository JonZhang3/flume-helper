import timestamp from "@/flume-configs/interceptors/timestamp";
import host from "@/flume-configs/interceptors/host";
import Static from "@/flume-configs/interceptors/static";
import remove_header from "@/flume-configs/interceptors/remove_header";
import uuid from "@/flume-configs/interceptors/uuid";
import morphline from "@/flume-configs/interceptors/morphline";
import search_replace from "@/flume-configs/interceptors/search_replace";
import regex_filter from "@/flume-configs/interceptors/regex_filter";
import regex_extractor from "@/flume-configs/interceptors/regex_extractor";

export default {
    timestamp,
    host,
    'static': Static,
    remove_header,
    'org.apache.flume.sink.solr.morphline.UUIDInterceptor$Builder': uuid,
    'org.apache.flume.sink.solr.morphline.MorphlineInterceptor$Builder': morphline,
    search_replace,
    regex_filter,
    regex_extractor,
    custom: ''
}
