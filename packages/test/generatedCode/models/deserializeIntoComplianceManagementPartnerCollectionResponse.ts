import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoComplianceManagementPartner} from './deserializeIntoComplianceManagementPartner';
import {ComplianceManagementPartnerCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoComplianceManagementPartnerCollectionResponse(complianceManagementPartnerCollectionResponse: ComplianceManagementPartnerCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(complianceManagementPartnerCollectionResponse),
        "value": n => { complianceManagementPartnerCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoComplianceManagementPartner) as any ; },
    }
}
