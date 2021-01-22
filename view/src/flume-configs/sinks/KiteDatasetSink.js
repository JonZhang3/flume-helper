export default {
    'kite.dataset.uri': {
        type: String,
        required: true,
        default: '',
        description: 'URI of the dataset to open'
    },
    'kite.repo.uri': {
        type: String,
        default: '',
        description: 'URI of the repository to open (deprecated; use kite.dataset.uri instead)'
    },
    'kite.dataset.namespace': {
        type: String,
        default: '',
        description: 'Namespace of the Dataset where records will be written (deprecated; use kite.dataset.uri instead)'
    },
    'kite.dataset.name': {
        type: String,
        default: '',
        description: 'Name of the Dataset where records will be written (deprecated; use kite.dataset.uri instead)'
    },
    'kite.batchSize': {
        type: Number,
        default: 100,
        description: 'Number of records to process in each batch'
    },
    'kite.rollInterval': {
        type: Number,
        default: 30,
        description: 'Maximum wait time (seconds) before data files are released'
    },
    'kite.flushable.commitOnBatch': {
        type: Boolean,
        default: true,
        description: 'If true, the Flume transaction will be commited and the writer will be flushed on each batch of kite.batchSize records. This setting only applies to flushable datasets. When true, it’s possible for temp files with commited data to be left in the dataset directory. These files need to be recovered by hand for the data to be visible to DatasetReaders'
    },
    'kite.syncable.syncOnBatch': {
        type: Boolean,
        default: true,
        description: 'Controls whether the sink will also sync data when committing the transaction. This setting only applies to syncable datasets. Syncing gaurentees that data will be written on stable storage on the remote system while flushing only gaurentees that data has left Flume’s client buffers. When the kite.flushable.commitOnBatch property is set to false, this property must also be set to false'
    },
    'kite.entityParser': {
        type: String,
        default: 'avro',
        description: 'Parser that turns Flume Events into Kite entities. Valid values are avro and the fully-qualified class name of an implementation of the EntityParser.Builder interface'
    },
    'kite.failurePolicy': {
        type: String,
        default: 'retry',
        description: 'Policy that handles non-recoverable errors such as a missing Schema in the Event header. The default value, retry, will fail the current batch and try again which matches the old behavior. Other valid values are save, which will write the raw Event to the kite.error.dataset.uri dataset, and the fully-qualified class name of an implementation of the FailurePolicy.Builder interface'
    },
    'kite.error.dataset.uri': {
        type: String,
        default: '',
        description: 'URI of the dataset where failed events are saved when kite.failurePolicy is set to save. Required when the kite.failurePolicy is set to save'
    },
    'auth.kerberosPrincipal': {
        type: String,
        default: '',
        description: 'Kerberos user principal for secure authentication to HDFS'
    },
    'auth.kerberosKeytab': {
        type: String,
        default: '',
        description: 'Kerberos keytab location (local FS) for the principal'
    },
    'auth.proxyUser': {
        type: String,
        default: '',
        description: 'The effective user for HDFS actions, if different from the kerberos principal'
    }
}
