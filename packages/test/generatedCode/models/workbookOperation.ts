import {Entity, WorkbookOperationError} from './index';
import {WorkbookOperationStatus} from './workbookOperationStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookOperation extends Entity, Partial<Parsable> {
    /** The error property */
    error_escaped?: WorkbookOperationError;
    /** The resource URI for the result. */
    resourceLocation?: string;
    /** The status property */
    status?: WorkbookOperationStatus;
}
