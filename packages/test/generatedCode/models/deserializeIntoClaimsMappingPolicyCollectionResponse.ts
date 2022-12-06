import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoClaimsMappingPolicy} from './deserializeIntoClaimsMappingPolicy';
import {ClaimsMappingPolicyCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoClaimsMappingPolicyCollectionResponse(claimsMappingPolicyCollectionResponse: ClaimsMappingPolicyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(claimsMappingPolicyCollectionResponse),
        "value": n => { claimsMappingPolicyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoClaimsMappingPolicy) as any ; },
    }
}
