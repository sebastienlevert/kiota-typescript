import {BaseCollectionPaginationCountResponse, DeviceEnrollmentPlatformRestrictionsConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceEnrollmentPlatformRestrictionsConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DeviceEnrollmentPlatformRestrictionsConfiguration[];
}
