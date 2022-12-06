import {Entity, ResultInfo} from './index';
import {OperationStatus} from './operationStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CommsOperation extends Entity, Partial<Parsable> {
    /** Unique Client Context string. Max limit is 256 chars. */
    clientContext?: string;
    /** The result information. Read-only. */
    resultInfo?: ResultInfo;
    /** The status property */
    status?: OperationStatus;
}
