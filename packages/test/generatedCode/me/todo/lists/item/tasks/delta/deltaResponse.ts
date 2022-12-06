import {BaseDeltaFunctionResponse, TodoTask} from '../../../../../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Partial<Parsable> {
    /** The value property */
    value?: TodoTask[];
}
