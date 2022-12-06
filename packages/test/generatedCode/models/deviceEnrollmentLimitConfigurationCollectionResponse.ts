import {BaseCollectionPaginationCountResponse, DeviceEnrollmentLimitConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceEnrollmentLimitConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DeviceEnrollmentLimitConfiguration[];
}
