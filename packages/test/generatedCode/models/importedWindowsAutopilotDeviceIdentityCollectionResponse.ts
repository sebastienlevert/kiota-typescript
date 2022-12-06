import {BaseCollectionPaginationCountResponse, ImportedWindowsAutopilotDeviceIdentity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ImportedWindowsAutopilotDeviceIdentityCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ImportedWindowsAutopilotDeviceIdentity[];
}
