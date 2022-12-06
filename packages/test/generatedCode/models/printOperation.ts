import {Entity, PrintOperationStatus} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintOperation extends Entity, Partial<Parsable> {
    /** The DateTimeOffset when the operation was created. Read-only. */
    createdDateTime?: Date;
    /** The status property */
    status?: PrintOperationStatus;
}
