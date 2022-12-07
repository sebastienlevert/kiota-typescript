import {OnenoteOperationError, Operation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OnenoteOperation extends Operation, Partial<Parsable> {
    /** The error property */
    error_escaped?: OnenoteOperationError;
    /** The operation percent complete if the operation is still in running status. */
    percentComplete?: string;
    /** The resource id. */
    resourceId?: string;
    /** The resource URI for the object. For example, the resource URI for a copied page or section. */
    resourceLocation?: string;
}
