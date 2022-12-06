import {Entity} from './index';
import {OperationStatus} from './operationStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Operation extends Entity, Partial<Parsable> {
    /** The start time of the operation. */
    createdDateTime?: Date;
    /** The time of the last action of the operation. */
    lastActionDateTime?: Date;
    /** The current status of the operation: notStarted, running, completed, failed */
    status?: OperationStatus;
}
