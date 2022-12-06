import {SubscriptionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSubscription} from './serializeSubscription';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSubscriptionCollectionResponse(writer: SerializationWriter, subscriptionCollectionResponse: SubscriptionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, subscriptionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", subscriptionCollectionResponse.value as any, serializeSubscription);
}
