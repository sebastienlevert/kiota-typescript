import {DataPolicyOperationStatus} from './dataPolicyOperationStatus';
import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DataPolicyOperation extends Entity, Partial<Parsable> {
    /** Represents when the request for this data policy operation was completed, in UTC time, using the ISO 8601 format. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Null until the operation completes. */
    completedDateTime?: Date;
    /** Specifies the progress of an operation. */
    progress?: number;
    /** Possible values are: notStarted, running, complete, failed, unknownFutureValue. */
    status?: DataPolicyOperationStatus;
    /** The URL location to where data is being exported for export requests. */
    storageLocation?: string;
    /** Represents when the request for this data operation was submitted, in UTC time, using the ISO 8601 format. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    submittedDateTime?: Date;
    /** The id for the user on whom the operation is performed. */
    userId?: string;
}
