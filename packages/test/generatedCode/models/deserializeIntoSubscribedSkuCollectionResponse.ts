import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSubscribedSku} from './deserializeIntoSubscribedSku';
import {SubscribedSkuCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSubscribedSkuCollectionResponse(subscribedSkuCollectionResponse: SubscribedSkuCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(subscribedSkuCollectionResponse),
        "value": n => { subscribedSkuCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSubscribedSku) as any ; },
    }
}
