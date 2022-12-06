import {LongRunningOperation, PublicError} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RichLongRunningOperation extends LongRunningOperation, Partial<Parsable> {
    /** Error that caused the operation to fail. */
    error_escaped?: PublicError;
    /** A value between 0 and 100 that indicates the progress of the operation. */
    percentageComplete?: number;
    /** The unique identifier for the result. */
    resourceId?: string;
    /** The type of the operation. */
    type?: string;
}
