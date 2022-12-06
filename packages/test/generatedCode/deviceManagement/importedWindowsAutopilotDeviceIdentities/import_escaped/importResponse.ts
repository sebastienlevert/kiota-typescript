import {BaseCollectionPaginationCountResponse, ImportedWindowsAutopilotDeviceIdentity} from '../../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ImportResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ImportedWindowsAutopilotDeviceIdentity[];
}
