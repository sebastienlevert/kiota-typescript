import {SynchronizationError} from './index';
import {SynchronizationTaskExecutionResult} from './synchronizationTaskExecutionResult';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SynchronizationTaskExecution extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Identifier of the job run. */
    activityIdentifier?: string;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Count of processed entries that were assigned for this application. */
    countEntitled?: number;
    /** Count of processed entries that were assigned for provisioning. */
    countEntitledForProvisioning?: number;
    /** Count of entries that were escrowed (errors). */
    countEscrowed?: number;
    /** Count of entries that were escrowed, including system-generated escrows. */
    countEscrowedRaw?: number;
    /** Count of exported entries. */
    countExported?: number;
    /** Count of entries that were expected to be exported. */
    countExports?: number;
    /** Count of imported entries. */
    countImported?: number;
    /** Count of imported delta-changes. */
    countImportedDeltas?: number;
    /** Count of imported delta-changes pertaining to reference changes. */
    countImportedReferenceDeltas?: number;
    /** The error property */
    error_escaped?: SynchronizationError;
    /** The state property */
    state?: SynchronizationTaskExecutionResult;
    /** Time when this job run began. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    timeBegan?: Date;
    /** Time when this job run ended. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    timeEnded?: Date;
}
