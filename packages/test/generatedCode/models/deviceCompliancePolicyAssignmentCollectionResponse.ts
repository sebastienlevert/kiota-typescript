import {BaseCollectionPaginationCountResponse, DeviceCompliancePolicyAssignment} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceCompliancePolicyAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DeviceCompliancePolicyAssignment[];
}
