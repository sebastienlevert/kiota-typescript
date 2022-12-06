import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoHomeRealmDiscoveryPolicy} from './deserializeIntoHomeRealmDiscoveryPolicy';
import {HomeRealmDiscoveryPolicyCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoHomeRealmDiscoveryPolicyCollectionResponse(homeRealmDiscoveryPolicyCollectionResponse: HomeRealmDiscoveryPolicyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(homeRealmDiscoveryPolicyCollectionResponse),
        "value": n => { homeRealmDiscoveryPolicyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoHomeRealmDiscoveryPolicy) as any ; },
    }
}
