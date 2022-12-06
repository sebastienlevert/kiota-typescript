import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoRecipient} from './deserializeIntoRecipient';
import {RecipientCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRecipientCollectionResponse(recipientCollectionResponse: RecipientCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(recipientCollectionResponse),
        "value": n => { recipientCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRecipient) as any ; },
    }
}
