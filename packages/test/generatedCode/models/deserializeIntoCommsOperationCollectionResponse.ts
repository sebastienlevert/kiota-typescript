import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoCommsOperation} from './deserializeIntoCommsOperation';
import {CommsOperationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCommsOperationCollectionResponse(commsOperationCollectionResponse: CommsOperationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(commsOperationCollectionResponse),
        "value": n => { commsOperationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCommsOperation) as any ; },
    }
}
