import {BaseCollectionPaginationCountResponse, DeviceInstallState} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceInstallStateCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DeviceInstallState[];
}
