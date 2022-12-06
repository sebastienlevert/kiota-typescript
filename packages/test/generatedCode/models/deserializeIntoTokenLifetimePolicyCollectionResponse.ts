import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoTokenLifetimePolicy} from './deserializeIntoTokenLifetimePolicy';
import {TokenLifetimePolicyCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTokenLifetimePolicyCollectionResponse(tokenLifetimePolicyCollectionResponse: TokenLifetimePolicyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(tokenLifetimePolicyCollectionResponse),
        "value": n => { tokenLifetimePolicyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTokenLifetimePolicy) as any ; },
    }
}
