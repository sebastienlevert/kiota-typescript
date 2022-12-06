import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUnmuteParticipantOperation} from './deserializeIntoUnmuteParticipantOperation';
import {UnmuteParticipantOperationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnmuteParticipantOperationCollectionResponse(unmuteParticipantOperationCollectionResponse: UnmuteParticipantOperationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(unmuteParticipantOperationCollectionResponse),
        "value": n => { unmuteParticipantOperationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUnmuteParticipantOperation) as any ; },
    }
}
