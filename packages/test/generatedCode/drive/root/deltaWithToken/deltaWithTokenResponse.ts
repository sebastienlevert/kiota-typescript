import {BaseDeltaFunctionResponse, DriveItem} from '../../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeltaWithTokenResponse extends BaseDeltaFunctionResponse, Partial<Parsable> {
    /** The value property */
    value?: DriveItem[];
}
