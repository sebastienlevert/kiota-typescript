import {BaseCollectionPaginationCountResponse, DeviceCompliancePolicy} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceCompliancePolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DeviceCompliancePolicy[];
}
