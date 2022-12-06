import {BaseCollectionPaginationCountResponse, DeviceComplianceUserStatus} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceComplianceUserStatusCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DeviceComplianceUserStatus[];
}
