import {Entity} from './index';
import {OperationStatus} from './operationStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Operation extends Entity, Partial<Parsable> {
    /** The start time of the operation. */
    createdDateTime?: Date;
    /** The time of the last action of the operation. */
    lastActionDateTime?: Date;
    /** The status property */
    status?: OperationStatus;
}
