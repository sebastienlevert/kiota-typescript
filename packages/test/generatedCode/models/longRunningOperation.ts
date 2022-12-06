import {Entity} from './index';
import {LongRunningOperationStatus} from './longRunningOperationStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface LongRunningOperation extends Entity, Partial<Parsable> {
    /** The start time of the operation. */
    createdDateTime?: Date;
    /** The time of the last action in the operation. */
    lastActionDateTime?: Date;
    /** URI of the resource that the operation is performed on. */
    resourceLocation?: string;
    /** The status of the operation. The possible values are: notStarted, running, succeeded, failed, unknownFutureValue. */
    status?: LongRunningOperationStatus;
    /** Details about the status of the operation. */
    statusDetail?: string;
}
