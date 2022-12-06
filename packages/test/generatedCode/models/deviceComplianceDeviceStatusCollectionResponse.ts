import {BaseCollectionPaginationCountResponse, DeviceComplianceDeviceStatus} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceComplianceDeviceStatusCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DeviceComplianceDeviceStatus[];
}
