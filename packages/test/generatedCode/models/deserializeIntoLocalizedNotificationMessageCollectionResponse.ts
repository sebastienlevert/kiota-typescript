import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoLocalizedNotificationMessage} from './deserializeIntoLocalizedNotificationMessage';
import {LocalizedNotificationMessageCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLocalizedNotificationMessageCollectionResponse(localizedNotificationMessageCollectionResponse: LocalizedNotificationMessageCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(localizedNotificationMessageCollectionResponse),
        "value": n => { localizedNotificationMessageCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoLocalizedNotificationMessage) as any ; },
    }
}
