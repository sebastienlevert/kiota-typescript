import {StringKeyLongValuePair, SynchronizationProgress, SynchronizationQuarantine, SynchronizationTaskExecution} from './index';
import {SynchronizationStatusCode} from './synchronizationStatusCode';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SynchronizationStatus extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The code property */
    code?: SynchronizationStatusCode;
    /** Number of consecutive times this job failed. */
    countSuccessiveCompleteFailures?: number;
    /** true if the job's escrows (object-level errors) were pruned during initial synchronization. Escrows can be pruned if during the initial synchronization, you reach the threshold of errors that would normally put the job in quarantine. Instead of going into quarantine, the synchronization process clears the job's errors and continues until the initial synchronization is completed. When the initial synchronization is completed, the job will pause and wait for the customer to clean up the errors. */
    escrowsPruned?: boolean;
    /** The lastExecution property */
    lastExecution?: SynchronizationTaskExecution;
    /** The lastSuccessfulExecution property */
    lastSuccessfulExecution?: SynchronizationTaskExecution;
    /** The lastSuccessfulExecutionWithExports property */
    lastSuccessfulExecutionWithExports?: SynchronizationTaskExecution;
    /** Details of the progress of a job toward completion. */
    progress?: SynchronizationProgress[];
    /** The quarantine property */
    quarantine?: SynchronizationQuarantine;
    /** The time when steady state (no more changes to the process) was first achieved. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    steadyStateFirstAchievedTime?: Date;
    /** The time when steady state (no more changes to the process) was last achieved. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    steadyStateLastAchievedTime?: Date;
    /** Count of synchronized objects, listed by object type. */
    synchronizedEntryCountByType?: StringKeyLongValuePair[];
    /** In the event of an error, the URL with the troubleshooting steps for the issue. */
    troubleshootingUrl?: string;
}
