import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoCommsNotification} from './deserializeIntoCommsNotification';
import {CommsNotificationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCommsNotificationCollectionResponse(commsNotificationCollectionResponse: CommsNotificationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(commsNotificationCollectionResponse),
        "value": n => { commsNotificationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCommsNotification) as any ; },
    }
}
