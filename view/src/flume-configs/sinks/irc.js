export default {
    hostname: {
        type: String,
        default: '',
        required: true,
        description: 'The hostname or IP address to connect to'
    },
    port: {
        type: Number,
        default: 6667,
        min: 0,
        max: 65535,
        description: 'The port number of remote host to connect'
    },
    nick: {
        type: String,
        default: '',
        required: true,
        description: 'Nick name'
    },
    user: {
        type: String,
        default: '',
        description: 'User name'
    },
    password: {
        type: String,
        default: '',
        description: 'User password'
    },
    chan: {
        type: String,
        default: '',
        required: true,
        description: 'channel'
    },
    name: {
        type: String,
        default: '',
        description: ''
    },
    splitlines: {
        type: Boolean,
        default: true,
        description: ''
    },
    splitchars: {
        type: String,
        default: 'n',
        description: 'ine separator (if you were to enter the default value into the config file, then you would need to escape the backslash, like this: “\\n”)'
    }
}
