import {BaseCollectionPaginationCountResponse, DeviceConfigurationDeviceStatus} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationDeviceStatusCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DeviceConfigurationDeviceStatus[];
}
