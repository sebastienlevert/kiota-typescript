import {Entity, PublicError} from '../';
import {ConnectionOperationStatus} from './connectionOperationStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ConnectionOperation extends Entity, Partial<Parsable> {
    /** If status is failed, provides more information about the error that caused the failure. */
    error_escaped?: PublicError;
    /** Indicates the status of the asynchronous operation. Possible values are: unspecified, inprogress, completed, failed, unknownFutureValue. */
    status?: ConnectionOperationStatus;
}
