import {Entity, MetadataEntry, SynchronizationSchema} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SynchronizationTemplate extends Entity, Partial<Parsable> {
    /** Identifier of the application this template belongs to. */
    applicationId?: string;
    /** true if this template is recommended to be the default for the application. */
    default_escaped?: boolean;
    /** Description of the template. */
    description?: string;
    /** true if this template should appear in the collection of templates available for the application instance (service principal). */
    discoverable?: boolean;
    /** One of the well-known factory tags supported by the synchronization engine. The factoryTag tells the synchronization engine which implementation to use when processing jobs based on this template. */
    factoryTag?: string;
    /** Additional extension properties. Unless mentioned explicitly, metadata values should not be changed. */
    metadata?: MetadataEntry[];
    /** The schema property */
    schema?: SynchronizationSchema;
}
