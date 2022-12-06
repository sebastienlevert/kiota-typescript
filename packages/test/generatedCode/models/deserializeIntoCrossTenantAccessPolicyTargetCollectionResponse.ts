import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoCrossTenantAccessPolicyTarget} from './deserializeIntoCrossTenantAccessPolicyTarget';
import {CrossTenantAccessPolicyTargetCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCrossTenantAccessPolicyTargetCollectionResponse(crossTenantAccessPolicyTargetCollectionResponse: CrossTenantAccessPolicyTargetCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(crossTenantAccessPolicyTargetCollectionResponse),
        "value": n => { crossTenantAccessPolicyTargetCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCrossTenantAccessPolicyTarget) as any ; },
    }
}
