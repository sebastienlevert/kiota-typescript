import {BaseCollectionPaginationCountResponse, ComplianceManagementPartner} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ComplianceManagementPartnerCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ComplianceManagementPartner[];
}
