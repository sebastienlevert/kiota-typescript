import {BaseCollectionPaginationCountResponse, ManagedDeviceMobileAppConfigurationDeviceStatus} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ManagedDeviceMobileAppConfigurationDeviceStatus[];
}
