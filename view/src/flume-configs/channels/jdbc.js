import types from "../types";
export default {
    'db.type': {
        type: String,
        default: 'DERBY',
        description: 'Database vendor, needs to be DERBY'
    },
    'driver.class': {
        type: String,
        default: 'org.apache.derby.jdbc.EmbeddedDriver',
        description: 'Class for vendor’s JDBC driver'
    },
    'driver.url': {
        type: String,
        default: '',
        description: 'JDBC connection URL'
    },
    'db.username': {
        type: String,
        default: 'sa',
        description: 'User id for db connection'
    },
    'db.password': {
        type: String,
        default: '',
        description: 'password for db connection'
    },
    'connection.properties.file': {
        type: String,
        default: '',
        description: 'JDBC Connection property file path'
    },
    'create.schema': {
        type: Boolean,
        default: true,
        description: 'If true, then creates db schema if not there'
    },
    'create.index': {
        type: Boolean,
        default: true,
        description: 'Create indexes to speed up lookups'
    },
    'create.foreignkey': {
        type: Boolean,
        default: true,
        description: ''
    },
    'transaction.isolation': {
        type: types.Select,
        select: ['READ_UNCOMMITTED', 'READ_COMMITTED', 'SERIALIZABLE', 'REPEATABLE_READ'],
        default: 'READ_COMMITTED',
        description: 'Isolation level for db session READ_UNCOMMITTED, READ_COMMITTED, SERIALIZABLE, REPEATABLE_READ'
    },
    'maximum.connections': {
        type: Number,
        default: 10,
        min: 1,
        description: 'Max connections allowed to db'
    },
    'maximum.capacity': {
        type: Number,
        default: 0,
        min: 0,
        description: 'Max number of events in the channel'
    },
    'sysprop.user.home': {
        type: String,
        default: '',
        description: 'Home path to store embedded Derby database'
    },
    'sysprop.*': {
        type: Object,
        default: {},
        description: 'DB Vendor specific properties'
    }
}
