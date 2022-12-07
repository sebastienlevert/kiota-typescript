import {DirectoryDefinition, Entity, SynchronizationRule} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SynchronizationSchema extends Entity, Partial<Parsable> {
    /** Contains the collection of directories and all of their objects. */
    directories?: DirectoryDefinition[];
    /** A collection of synchronization rules configured for the synchronizationJob or synchronizationTemplate. */
    synchronizationRules?: SynchronizationRule[];
    /** The version of the schema, updated automatically with every schema change. */
    version?: string;
}
