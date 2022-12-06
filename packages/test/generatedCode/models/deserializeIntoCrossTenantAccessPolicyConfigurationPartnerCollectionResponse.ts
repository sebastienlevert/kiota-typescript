import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoCrossTenantAccessPolicyConfigurationPartner} from './deserializeIntoCrossTenantAccessPolicyConfigurationPartner';
import {CrossTenantAccessPolicyConfigurationPartnerCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCrossTenantAccessPolicyConfigurationPartnerCollectionResponse(crossTenantAccessPolicyConfigurationPartnerCollectionResponse: CrossTenantAccessPolicyConfigurationPartnerCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(crossTenantAccessPolicyConfigurationPartnerCollectionResponse),
        "value": n => { crossTenantAccessPolicyConfigurationPartnerCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCrossTenantAccessPolicyConfigurationPartner) as any ; },
    }
}
