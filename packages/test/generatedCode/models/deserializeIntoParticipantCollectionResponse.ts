import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoParticipant} from './deserializeIntoParticipant';
import {ParticipantCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoParticipantCollectionResponse(participantCollectionResponse: ParticipantCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(participantCollectionResponse),
        "value": n => { participantCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoParticipant) as any ; },
    }
}
