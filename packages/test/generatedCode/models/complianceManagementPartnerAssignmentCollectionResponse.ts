import {BaseCollectionPaginationCountResponse, ComplianceManagementPartnerAssignment} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ComplianceManagementPartnerAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ComplianceManagementPartnerAssignment[];
}
