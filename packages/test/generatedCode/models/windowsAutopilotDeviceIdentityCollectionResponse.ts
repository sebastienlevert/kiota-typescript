import {BaseCollectionPaginationCountResponse, WindowsAutopilotDeviceIdentity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsAutopilotDeviceIdentityCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: WindowsAutopilotDeviceIdentity[];
}
