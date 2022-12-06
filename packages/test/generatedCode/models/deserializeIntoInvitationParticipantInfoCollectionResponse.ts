import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoInvitationParticipantInfo} from './deserializeIntoInvitationParticipantInfo';
import {InvitationParticipantInfoCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInvitationParticipantInfoCollectionResponse(invitationParticipantInfoCollectionResponse: InvitationParticipantInfoCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(invitationParticipantInfoCollectionResponse),
        "value": n => { invitationParticipantInfoCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoInvitationParticipantInfo) as any ; },
    }
}
