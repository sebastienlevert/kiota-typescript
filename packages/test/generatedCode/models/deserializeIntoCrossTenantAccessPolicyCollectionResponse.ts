import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoCrossTenantAccessPolicy} from './deserializeIntoCrossTenantAccessPolicy';
import {CrossTenantAccessPolicyCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCrossTenantAccessPolicyCollectionResponse(crossTenantAccessPolicyCollectionResponse: CrossTenantAccessPolicyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(crossTenantAccessPolicyCollectionResponse),
        "value": n => { crossTenantAccessPolicyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCrossTenantAccessPolicy) as any ; },
    }
}
