import {Entity, Json} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookFunctionResult extends Entity, Partial<Parsable> {
    /** The error property */
    error_escaped?: string;
    /** The value property */
    value?: Json;
}
