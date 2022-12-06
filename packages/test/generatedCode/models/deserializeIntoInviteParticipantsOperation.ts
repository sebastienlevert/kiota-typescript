import {deserializeIntoCommsOperation} from './deserializeIntoCommsOperation';
import {deserializeIntoInvitationParticipantInfo} from './deserializeIntoInvitationParticipantInfo';
import {InviteParticipantsOperation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInviteParticipantsOperation(inviteParticipantsOperation: InviteParticipantsOperation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCommsOperation(inviteParticipantsOperation),
        "participants": n => { inviteParticipantsOperation.participants = n.getCollectionOfObjectValuesFromMethod(deserializeIntoInvitationParticipantInfo) as any ; },
    }
}
