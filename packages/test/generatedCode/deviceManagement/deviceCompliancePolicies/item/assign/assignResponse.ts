import {BaseCollectionPaginationCountResponse, DeviceCompliancePolicyAssignment} from '../../../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AssignResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DeviceCompliancePolicyAssignment[];
}
