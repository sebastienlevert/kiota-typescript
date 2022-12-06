import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoRichLongRunningOperation} from './deserializeIntoRichLongRunningOperation';
import {RichLongRunningOperationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRichLongRunningOperationCollectionResponse(richLongRunningOperationCollectionResponse: RichLongRunningOperationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(richLongRunningOperationCollectionResponse),
        "value": n => { richLongRunningOperationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRichLongRunningOperation) as any ; },
    }
}
