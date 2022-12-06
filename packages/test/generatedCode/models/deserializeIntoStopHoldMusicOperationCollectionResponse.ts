import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoStopHoldMusicOperation} from './deserializeIntoStopHoldMusicOperation';
import {StopHoldMusicOperationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoStopHoldMusicOperationCollectionResponse(stopHoldMusicOperationCollectionResponse: StopHoldMusicOperationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(stopHoldMusicOperationCollectionResponse),
        "value": n => { stopHoldMusicOperationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoStopHoldMusicOperation) as any ; },
    }
}
