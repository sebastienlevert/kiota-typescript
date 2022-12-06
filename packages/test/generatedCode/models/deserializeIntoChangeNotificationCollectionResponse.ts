import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoChangeNotification} from './deserializeIntoChangeNotification';
import {ChangeNotificationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChangeNotificationCollectionResponse(changeNotificationCollectionResponse: ChangeNotificationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(changeNotificationCollectionResponse),
        "value": n => { changeNotificationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoChangeNotification) as any ; },
    }
}
