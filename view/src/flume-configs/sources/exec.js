import common from "./common";

export default {
    command: {
        type: String,
        default: '',
        required: true,
        description: 'The command to execute'
    },
    shell: {
        type: String,
        default: '',
        description: 'A shell invocation used to run the command. e.g. /bin/sh -c. Required only for commands relying on shell features like wildcards, back ticks, pipes etc'
    },
    restartThrottle: {
        type: Number,
        default: 10000,
        description: 'Amount of time (in millis) to wait before attempting a restart'
    },
    restart: {
        type: Boolean,
        default: false,
        description: 'Whether the executed cmd should be restarted if it dies'
    },
    logStdErr: {
        type: Boolean,
        default: false,
        description: 'Whether the command’s stderr should be logged'
    },
    batchSize: {
        type: Number,
        default: 20,
        description: 'The max number of lines to read and send to the channel at a time'
    },
    batchTimeout: {
        type: Number,
        default: 3000,
        description: 'Amount of time (in milliseconds) to wait, if the buffer size was not reached, before data is pushed downstream'
    },
    ...common
}
