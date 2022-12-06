import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoComplianceManagementPartnerAssignment} from './deserializeIntoComplianceManagementPartnerAssignment';
import {ComplianceManagementPartnerAssignmentCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoComplianceManagementPartnerAssignmentCollectionResponse(complianceManagementPartnerAssignmentCollectionResponse: ComplianceManagementPartnerAssignmentCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(complianceManagementPartnerAssignmentCollectionResponse),
        "value": n => { complianceManagementPartnerAssignmentCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoComplianceManagementPartnerAssignment) as any ; },
    }
}
