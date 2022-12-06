import {BaseDeltaFunctionResponse, DriveItem} from '../../../../../../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Partial<Parsable> {
    /** The value property */
    value?: DriveItem[];
}
