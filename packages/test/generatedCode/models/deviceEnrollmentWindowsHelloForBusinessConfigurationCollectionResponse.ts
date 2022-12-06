import {BaseCollectionPaginationCountResponse, DeviceEnrollmentWindowsHelloForBusinessConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceEnrollmentWindowsHelloForBusinessConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DeviceEnrollmentWindowsHelloForBusinessConfiguration[];
}
