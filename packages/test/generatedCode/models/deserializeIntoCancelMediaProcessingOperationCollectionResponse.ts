import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoCancelMediaProcessingOperation} from './deserializeIntoCancelMediaProcessingOperation';
import {CancelMediaProcessingOperationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCancelMediaProcessingOperationCollectionResponse(cancelMediaProcessingOperationCollectionResponse: CancelMediaProcessingOperationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(cancelMediaProcessingOperationCollectionResponse),
        "value": n => { cancelMediaProcessingOperationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCancelMediaProcessingOperation) as any ; },
    }
}
