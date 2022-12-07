import {Entity} from './index';
import {LongRunningOperationStatus} from './longRunningOperationStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface LongRunningOperation extends Entity, Partial<Parsable> {
    /** The createdDateTime property */
    createdDateTime?: Date;
    /** The lastActionDateTime property */
    lastActionDateTime?: Date;
    /** The resourceLocation property */
    resourceLocation?: string;
    /** The status property */
    status?: LongRunningOperationStatus;
    /** The statusDetail property */
    statusDetail?: string;
}
