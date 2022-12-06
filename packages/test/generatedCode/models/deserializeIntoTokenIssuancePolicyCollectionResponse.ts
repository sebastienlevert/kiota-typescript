import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoTokenIssuancePolicy} from './deserializeIntoTokenIssuancePolicy';
import {TokenIssuancePolicyCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTokenIssuancePolicyCollectionResponse(tokenIssuancePolicyCollectionResponse: TokenIssuancePolicyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(tokenIssuancePolicyCollectionResponse),
        "value": n => { tokenIssuancePolicyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTokenIssuancePolicy) as any ; },
    }
}
