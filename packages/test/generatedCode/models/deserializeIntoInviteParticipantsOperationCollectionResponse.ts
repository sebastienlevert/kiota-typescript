import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoInviteParticipantsOperation} from './deserializeIntoInviteParticipantsOperation';
import {InviteParticipantsOperationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInviteParticipantsOperationCollectionResponse(inviteParticipantsOperationCollectionResponse: InviteParticipantsOperationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(inviteParticipantsOperationCollectionResponse),
        "value": n => { inviteParticipantsOperationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoInviteParticipantsOperation) as any ; },
    }
}
