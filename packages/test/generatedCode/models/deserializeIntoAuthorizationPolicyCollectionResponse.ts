import {deserializeIntoAuthorizationPolicy} from './deserializeIntoAuthorizationPolicy';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AuthorizationPolicyCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthorizationPolicyCollectionResponse(authorizationPolicyCollectionResponse: AuthorizationPolicyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(authorizationPolicyCollectionResponse),
        "value": n => { authorizationPolicyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAuthorizationPolicy) as any ; },
    }
}
