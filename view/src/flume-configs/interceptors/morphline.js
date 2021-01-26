export default {
    morphlineFile: {
        type: String,
        required: true,
        default: '',
        description: 'The relative or absolute path on the local file system to the morphline configuration file. Example: /etc/flume-ng/conf/morphline.conf'
    },
    morphlineId: {
        type: String,
        default: '',
        description: 'Optional name used to identify a morphline if there are multiple morphlines in a morphline config file'
    }
}
