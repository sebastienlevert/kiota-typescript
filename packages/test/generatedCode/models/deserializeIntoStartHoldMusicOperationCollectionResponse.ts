import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoStartHoldMusicOperation} from './deserializeIntoStartHoldMusicOperation';
import {StartHoldMusicOperationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoStartHoldMusicOperationCollectionResponse(startHoldMusicOperationCollectionResponse: StartHoldMusicOperationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(startHoldMusicOperationCollectionResponse),
        "value": n => { startHoldMusicOperationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoStartHoldMusicOperation) as any ; },
    }
}
