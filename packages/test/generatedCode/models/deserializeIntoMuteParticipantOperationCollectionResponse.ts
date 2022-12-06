import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoMuteParticipantOperation} from './deserializeIntoMuteParticipantOperation';
import {MuteParticipantOperationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMuteParticipantOperationCollectionResponse(muteParticipantOperationCollectionResponse: MuteParticipantOperationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(muteParticipantOperationCollectionResponse),
        "value": n => { muteParticipantOperationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMuteParticipantOperation) as any ; },
    }
}
