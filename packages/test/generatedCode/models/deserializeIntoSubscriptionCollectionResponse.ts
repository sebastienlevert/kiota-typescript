import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSubscription} from './deserializeIntoSubscription';
import {SubscriptionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSubscriptionCollectionResponse(subscriptionCollectionResponse: SubscriptionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(subscriptionCollectionResponse),
        "value": n => { subscriptionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSubscription) as any ; },
    }
}
