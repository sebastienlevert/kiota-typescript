import {BaseCollectionPaginationCountResponse, DeviceCompliancePolicyState} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceCompliancePolicyStateCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DeviceCompliancePolicyState[];
}
