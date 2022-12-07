import {LongRunningOperation, PublicError} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RichLongRunningOperation extends LongRunningOperation, Partial<Parsable> {
    /** The error property */
    error_escaped?: PublicError;
    /** A value between 0 and 100 that indicates the progress of the operation. */
    percentageComplete?: number;
    /** A unique identifier for the result. */
    resourceId?: string;
    /** Type of the operation. */
    type?: string;
}
