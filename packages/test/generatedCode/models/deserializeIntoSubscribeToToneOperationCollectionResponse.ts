import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSubscribeToToneOperation} from './deserializeIntoSubscribeToToneOperation';
import {SubscribeToToneOperationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSubscribeToToneOperationCollectionResponse(subscribeToToneOperationCollectionResponse: SubscribeToToneOperationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(subscribeToToneOperationCollectionResponse),
        "value": n => { subscribeToToneOperationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSubscribeToToneOperation) as any ; },
    }
}
