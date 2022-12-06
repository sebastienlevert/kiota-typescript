import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPrintOperation} from './deserializeIntoPrintOperation';
import {PrintOperationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintOperationCollectionResponse(printOperationCollectionResponse: PrintOperationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(printOperationCollectionResponse),
        "value": n => { printOperationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPrintOperation) as any ; },
    }
}
