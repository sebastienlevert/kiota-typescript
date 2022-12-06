import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DomainState extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Timestamp for when the last activity occurred. The value is updated when an operation is scheduled, the asynchronous task starts, and when the operation completes. */
    lastActionDateTime?: Date;
    /** The OdataType property */
    odataType?: string;
    /** Type of asynchronous operation. The values can be ForceDelete or Verification */
    operation?: string;
    /** Current status of the operation.  Scheduled - Operation has been scheduled but has not started.  InProgress - Task has started and is in progress.  Failed - Operation has failed. */
    status?: string;
}
