import {ObjectMapping, StringKeyStringValuePair} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SynchronizationRule extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** true if the synchronization rule can be customized; false if this rule is read-only and should not be changed. */
    editable?: boolean;
    /** Synchronization rule identifier. Must be one of the identifiers recognized by the synchronization engine. Supported rule identifiers can be found in the synchronization template returned by the API. */
    id?: string;
    /** Additional extension properties. Unless instructed explicitly by the support team, metadata values should not be changed. */
    metadata?: StringKeyStringValuePair[];
    /** Human-readable name of the synchronization rule. Not nullable. */
    name?: string;
    /** Collection of object mappings supported by the rule. Tells the synchronization engine which objects should be synchronized. */
    objectMappings?: ObjectMapping[];
    /** Priority relative to other rules in the synchronizationSchema. Rules with the lowest priority number will be processed first. */
    priority?: number;
    /** Name of the source directory. Must match one of the directory definitions in synchronizationSchema. */
    sourceDirectoryName?: string;
    /** Name of the target directory. Must match one of the directory definitions in synchronizationSchema. */
    targetDirectoryName?: string;
}
