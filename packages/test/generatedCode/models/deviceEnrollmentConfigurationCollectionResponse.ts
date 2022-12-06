import {BaseCollectionPaginationCountResponse, DeviceEnrollmentConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceEnrollmentConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DeviceEnrollmentConfiguration[];
}
